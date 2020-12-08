/**
 * A class to represent a 'move' of a sudoku game.
 *
 * A 'move' may be to set a square to a value or to remove
 * an array of numbers from the candidates of a square.
 * It provides an index and a value (which may be an array
 * of numbers in case these are the values to remove from candidates)
 * to set as well as an optional reason and rating.
 */
export class SudokuStateChange {
    private index: number;
    private value: number | number[];
    private reason?: string;
    private rating?: number;

    constructor(index: number, value: number | number[], reason?: string, rating?: number) {
        this.index = index;
        this.value = value;
        this.reason = reason;
        this.rating = rating;
    }

    getIndex() {
        return this.index;
    }

    getValue() {
        return this.value;
    }

    getReason() {
        return this.reason;
    }

    getRating() {
        return this.rating;
    }

    setRating(rating: number) {
        this.rating = rating;
    }

    setReason(reason: string) {
        this.reason = reason;
    }
}