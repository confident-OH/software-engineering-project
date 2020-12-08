import * as _ from "lodash";

import {SudokuGame} from "../game/SudokuGame";
import {Sudoku} from "../game/Sudoku";
import {Square} from "../game/Square";
import {ColumnChooser, DataObject, IResultHandler, TChooseColumnFn} from "./DLXHelpers";
import {DLX} from "./DLX";
import {SudokuStateChange} from "../game/SudokuStateChange";

/**
 * Solves sudoku puzzles with a backtracking Algorithm.
 */
export class Backtracker {
    private readonly game: SudokuGame;
    private _rows: boolean[][];
    private _columnNames: string[];
    private _solvedGames: SudokuGame[];

    constructor(game: SudokuGame) {
        this.game = game;
        //create a representation of an empty sudoku
        this._columnNames = this.createColumnNames();
        this._rows = this.createRows();
        //set the given values from the given game
        game.getCurrentState().getSquares().filter(square => square.isSet()).forEach(square =>
            this.setValue(square, square.getValue()!))
        this._solvedGames = [];
    }

    /**
     * Solves a sudoku puzzle with backtracking.
     *
     * @param {boolean} findAll whether to find all solutions to the puzzle. Optional, defaults to {@code true}.
     * @param {TChooseColumnFn} strategy the column choosing strategy. Defaults to
     *      {@code ColumnChooser.chooseColumnSmallest}
     */
    public solve(findAll: boolean = true, strategy: TChooseColumnFn = ColumnChooser.chooseColumnSmallest) {
        //get a result handler, a dlx and solve it.
        let sudokuResultHandler = new SudokuResultHandler(this.game.getCurrentState());
        let dlx = new DLX(this._columnNames, this._rows, sudokuResultHandler, strategy, findAll);
        dlx.solve();
        let solutions = sudokuResultHandler.getResult();
        //if findAll is set remember solutions
        if (findAll) {
            let newSolvedGame: SudokuGame;
            solutions.forEach(solution => {
                let currentStateCopy = Sudoku.copy(this.game.getCurrentState());
                newSolvedGame = new SudokuGame(currentStateCopy);
                solution.forEach(move => {
                    newSolvedGame.changeState(move);
                });
                this._solvedGames.push(newSolvedGame);
            });
        }
        //set game to a current state if there was a solution
        if (sudokuResultHandler.getCount() >= 1) {
            solutions[0].forEach(move => {
                this.game.changeState(move);
            });
        }
    }

    public get rows(): boolean[][] {
        return this._rows;
    }

    public get columnNames(): string[] {
        return this._columnNames;
    }

    public get solvedGames(): SudokuGame[] {
        return this._solvedGames;
    }

    private getEmptyRow(): boolean[] {
        let emptyRow = Array(this.columnNames.length);
        _.fill(emptyRow, false);
        return emptyRow;
    }

    /**
     * Creates the column names for a Sudoku as DLX.
     *
     * @returns {string[]} the column names
     */
    private createColumnNames(): string[] {
        let columnNames: string[];
        let emptySudoku = new Sudoku();
        columnNames = emptySudoku.getSquares().map(square => "Some number in square " + square.getName());
        Sudoku.values.forEach(value => {
            columnNames = _.concat(columnNames, Sudoku.columnNames.map(columnName =>
                value + " must be present in column " + columnName));
            columnNames = _.concat(columnNames, Sudoku.rowNames.map(rowName =>
                value + " must be present in row " + rowName));
            columnNames = _.concat(columnNames, Sudoku.boxNames.map(boxName =>
                value + " must be present in box " + boxName));
        })
        return columnNames;
    }

    /**
     * Create the rows of a DLX-representation of this game.
     *
     * @returns {boolean[][]} the rows of the representation
     */
    private createRows(): boolean[][] {
        let rows: boolean[][] = [];
        let emptySudoku = new Sudoku();
        Sudoku.values.forEach(value => {
            emptySudoku.getSquares().forEach(square => {
                let row = this.getEmptyRow();
                this.getColumnsIndices(square, value).forEach(columnIndex => row[columnIndex] = true);
                rows.push(row);
            })
        })
        return rows;
    }

    /**
     * Gets the indices of a row to set when the corresponding square of this game is set.
     *
     * @param {Square} square the square to set in the representation
     * @param {number} value the value to set in the representation
     * @returns {number[]} the indices to set in the corresponding row
     */
    private getColumnsIndices(square: Square, value: number): number[] {
        let columnIndices: number[] = [];
        columnIndices.push(square.getIndex());
        columnIndices.push(81 + (value - 1) * 27 + square.getColumnIndex());
        columnIndices.push(90 + (value - 1) * 27 + square.getRowIndex());
        columnIndices.push(99 + (value - 1) * 27 + square.getBoxIndex());
        return columnIndices;
    }

    /**
     * Sets a value in the DLX representation of this game.
     *
     * @param {Square} square the square to set
     * @param {number} value the value to set
     */
    private setValue(square: Square, value: number) {
        let valuesToRemove = Sudoku.values.filter(valueToRemove => valueToRemove !== value);
        valuesToRemove.forEach(valueToRemove => {
            this._rows[this.getRowIndex(square, valueToRemove)] = this.getEmptyRow();
        });
    }

    /**
     * Gets the index of a row for a given square and value.
     *
     * @param {Square} square the given square
     * @param {number} value the given value
     * @returns {number} the index of the row
     */
    private getRowIndex(square: Square, value: number): number {
        return (((value - 1) * 81) + square.getIndex());
    }
}

/**
 * A result handler specific to solutions of a sudoku puzzle.
 */
class SudokuResultHandler implements IResultHandler {
    private solutions: SudokuStateChange[][] = [];
    private count: number;
    private sudoku: Sudoku;

    /**
     * Parameter 'sudoku' is needed for determining squares already set.
     *
     * @param {Sudoku} sudoku the sudoku to solve
     */
    constructor(sudoku: Sudoku) {
        this.sudoku = sudoku;
        this.count = 0;
    }

    /**
     * Turns a solution of DLX into an array of valid {@code SudokuStateChange}s.
     *
     * @param {DataObject[]} solution the DLX solution
     */
    processResult = (solution: DataObject[]) => {
        this.count++;
        let moves: SudokuStateChange[] = [];
        let rowIndex: number;
        let value: number;
        let square: Square;
        solution.forEach(row => {
            rowIndex = row.rowIndex - 1;
            value = Math.floor(rowIndex / 81) + 1;
            square = this.sudoku.getSquares()[rowIndex % 81];
            if (!square.isSet()) {
                moves.push(new SudokuStateChange(square.getIndex(), value, "Set " + square.getName() + " to " +
                    value + " by backtracking", 0));
            }
        });
        this.solutions.push(moves);
    }

    getResult = () => this.solutions;

    getCount = () => this.count;
}
