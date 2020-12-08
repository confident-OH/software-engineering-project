import {Sudoku} from "./Sudoku";
import * as _ from "lodash";
import {isNull} from "util";

/**
 * Represents a square of a {@code Sudoku}.
 *
 * A {@code Square} is part of a collection of {@code Square}s in
 * a {@code Sudoku}.
 *
 * Provides a collection of candidates which are valid values
 * to fill in this square. It also provides it's units, row, column
 * and peers as indices of the owning {@code Sudoku}. In addition
 * it provides a name of the square.
 */
export class Square {

    private readonly index: number;
    private readonly row: number;
    private readonly column: number;
    private readonly box: number;
    private readonly peerIndices: number[];
    private readonly name: string;
    private value: number | null;
    private candidates: number[] | null;

    constructor(index: number) {
        this.index = index;
        this.row = _.findIndex(Sudoku.rowIndicesArray, (a) => _.indexOf(a, index) !== -1);
        this.column = _.findIndex(Sudoku.columnIndicesArray, (a) => _.indexOf(a, index) !== -1);
        this.box = _.findIndex(Sudoku.boxIndicesArray, (a) => _.indexOf(a, index) !== -1);
        this.peerIndices = _.pull(_.union(Sudoku.rowIndicesArray[this.row],
            Sudoku.columnIndicesArray[this.column], Sudoku.boxIndicesArray[this.box]), index);
        this.value = null;
        this.candidates = Sudoku.values.slice();
        this.name = Sudoku.rowNames[this.row] + Sudoku.columnNames[this.column];
    }

    getValue(): number | null {
        return this.value;
    }

    setValue(value: number): void {
        this.value = value;
        this.candidates = null;
    }

    getPeerIndices(): number[] {
        return this.peerIndices;
    }

    getCandidates(): number[] | null {
        return this.candidates;
    }

    getRowIndex() {
        return this.row;
    }

    getRowName() {
        return Sudoku.rowNames[this.row];
    }

    getName() {
        return this.name;
    }

    getColumnIndex() {
        return this.column;
    }

    getColumnName() {
        return Sudoku.columnNames[this.column];
    }

    getBoxIndex() {
        return this.box;
    }

    getBoxName() {
        return Sudoku.boxNames[this.box];
    }

    getIndex() {
        return this.index;
    }

    getUnitIndices() {
        //see Sudoku::constructor()
        return [this.row, this.column + 9, this.box + 18];
    }

    /**
     * Removes an array of given values from the candidates of this
     * square. Returns false if a value was already set or no values were
     * removed. If values were removed it returns true.
     *
     * @param {number[]} values the values to remove
     * @returns {boolean} whether candidates were removed
     */
    removeCandidates(values: number[]): boolean {
        let intersection = this.getCandidateIntersection(values);
        if (intersection.length !== 0) {
            let difference = _.difference(this.candidates, intersection);
            this.candidates = difference;
            return true;
        }
        return false;
    }

    /**
     * Returns whether this square is unset and its candidates contain the given value.
     *
     * @param {number} value the value to look for
     * @returns {boolean} whether the value is a candidate of this square
     */
    containsCandidate(value: number): boolean {
        return (!isNull(this.candidates) && this.candidates.indexOf(value) !== -1);
    }

    /**
     * Returns the intersection of the candidates of this square and the given values.
     *
     * If the square is already set an empty array is returned.
     *
     * @param {number[]} values the values to intersect the candidates with
     * @returns {number[]} the intersection, empty or not
     */
    getCandidateIntersection(values: number[]): number[] {
        return isNull(this.candidates) ? [] : _.intersection(this.candidates, values);
    }

    isSet() {
        return this.value !== null;
    }
}