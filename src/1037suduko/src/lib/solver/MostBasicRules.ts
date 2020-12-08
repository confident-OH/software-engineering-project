import {SolverRule, TRuleFunction} from "./SolverRule";
import {SudokuStateChange} from "../game/SudokuStateChange";
import {Sudoku} from "../game/Sudoku";
import {Square} from "../game/Square";

/**
 * A class grouping the most simple sudoku rules.
 *
 * The rules were taken from the website 'http://www.sudokuwiki.org/sudoku.htm'
 * run by Andrew Stuart. The naming of the rule mostly follows the naming
 * on that site.
 */
export class MostBasicRules {
    /**
     * The 'last square free rule' checks whether there is a unit in
     * which there is only one square unfilled and fills it with the
     * last remaining value.
     *
     * @param {Sudoku} sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be
     * done according this rule
     */
    static lsfRuleFn: TRuleFunction = (sudoku) => {
        let moves: SudokuStateChange[] = [];
        let units = sudoku.getUnits();
        units.forEach((unit, unitIndex) => {
            let count = 0;
            Sudoku.unitIndices.forEach((index) => {
                if (unit[index].getValue()) {
                    count++;
                }
            })
            if (count === 8) {
                Sudoku.unitIndices.forEach((index) => {
                    let square = unit[index];
                    let candidates = square.getCandidates();
                    if (candidates) {
                        let reason = 'Set ' + square.getName() + ' to ' +
                            candidates[0] + ' in unit ' +
                            Sudoku.unitNames[unitIndex];
                        moves.push(new SudokuStateChange(square.getIndex(),
                            candidates[0], reason
                        ));
                    }
                })
            }
        });
        return moves;
    }
    /**
     * The 'last square left rule' checks for each unit whether there
     * is a value that can only be filled in one square of the unit.
     *
     * @param {Sudoku} sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be
     * done according this rule
     */
    static lslRuleFn: TRuleFunction = (sudoku) => {
        let moves: SudokuStateChange[] = [];
        let units = sudoku.getUnits();
        units.forEach((unit, index) => {
            Sudoku.values.forEach((value) => {
                let squares: Square[] = [];
                unit.forEach((square) => {
                    if (square.containsCandidate(value)) {
                        squares.push(square);
                    }
                });
                if (squares.length === 1) {
                    let square = squares[0];
                    let reason = 'Set ' + square.getName() + ' to ' + value +
                        ' in unit ' + Sudoku.unitNames[index];
                    moves.push(new SudokuStateChange(square.getIndex(), value,
                        reason));
                }
            })
        });
        return moves;
    }

    /**
     * The 'last candidate rule' checks for each square whether there is only
     * one last candidate left and sets it to this value.
     *
     * @param {Sudoku} sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be
     * done according this rule
     */
    static lcRuleFn: TRuleFunction = (sudoku) => {
        let moves: SudokuStateChange[] = [];
        let squares = sudoku.getSquares()
        squares.forEach((square) => {
            let candidates = square.getCandidates();
            if (candidates !== null && candidates.length === 1) {
                let candidate = candidates[0];
                let reason = 'Set ' + square.getName() + ' to ' + candidate;
                moves.push(new SudokuStateChange(square.getIndex(), candidate,
                    reason));
            }
        });
        return moves;
    }

    rules: SolverRule[];

    constructor() {
        this.rules = [];

        let lsfRule: SolverRule = new SolverRule('Last Square Free Rule: ', 1,
            MostBasicRules.lsfRuleFn);
        this.rules.push(lsfRule);

        let lslRule = new SolverRule('Last Square Left Rule: ', 2,
            MostBasicRules.lslRuleFn);
        this.rules.push(lslRule);

        let lcRule = new SolverRule('Last Candidate Rule: ', 5,
            MostBasicRules.lcRuleFn);
        this.rules.push(lcRule);
    }
}