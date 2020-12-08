import {Sudoku} from "./Sudoku";
import {SudokuStateChange} from "./SudokuStateChange";

/**
 * A class to represent a sudoku game.
 *
 * A sudoku game is a class which has
 * an original state, which can apply a move, which assures that
 * an applied move is valid and tests whether it's solved. In
 * addition it provides a history (i.e. an array of {@code SudokuStateChange}
 * and if solved a solved state. It also stores a summed up rating to
 * the changes made so far.
 */
export class SudokuGame {

    private readonly originalState: Sudoku;
    private changes: SudokuStateChange[];
    private currentState: Sudoku;
    private solvedState: Sudoku | null;
    private rating?: number;

    /**
     * Creates a sudoku game. It takes a `string` representing a sudoku or an instance of `Sudoku`.
     *
     * @param {string | Sudoku} input the sudoku or an representation of it
     */
    constructor(input: string | Sudoku) {
        if (typeof input == 'string') {
            this.originalState = Sudoku.createSudokuByString(input);
        } else {
            this.originalState = input;
        }
        this.changes = [];
        this.currentState = Sudoku.copy(this.originalState);
        this.solvedState = null;
    }

    getChanges(): SudokuStateChange[] {
        return this.changes;
    }

    getOriginalState(): Sudoku {
        return this.originalState;
    }

    getCurrentState(): Sudoku {
        return this.currentState;
    }

    getSolvedState(): Sudoku | null {
        return this.solvedState;
    }

    getRating(): number {
        return (typeof this.rating != 'undefined' ? this.rating : 0);
    }

    /**
     * Tries to apply a move to a sudoku game. Returns whether it did a move.
     *
     * A 'move' may be to set a square to a value or to remove a set of
     * values from the candidates of a square ({@see SudokuStateChange}).
     * To set a value is successful if the square isn't already set and the value
     * is a candidate of that square. To remove candidates is successful if the
     * square wasn't already set and there was a candidate to remove.
     * Returns whether this move was successful. If the move was successful,
     * the move is executed the optional reason and rating are set.
     * If the game was solved with this move the appropriate fields
     * are set.
     *
     * @param {SudokuStateChange} move the move to do
     * @returns {boolean} whether the move was successful
     */
    changeState(move: SudokuStateChange): boolean {
        let value = move.getValue();
        if (typeof value === "number") {
            // set a value
            try {
                this.currentState.setValue(move.getIndex(), value);
                return this.recordChange(move);
            }
            catch (e) {
                return false;
            }
        } else {
            // remove candidates
            if (this.currentState.removeCandidates(move.getIndex(), value)) {
                this.recordChange(move);
                return true;
            }
            return false;
        }
    };

    private recordChange(move: SudokuStateChange) {
        this.changes.push(new SudokuStateChange(move.getIndex(),
            move.getValue(), move.getReason(), move.getRating()));
        let rating = move.getRating();
        if (rating) {
            this.rating = this.rating ? this.rating += rating : rating;
        }
        if (this.currentState.isSolved()) {
            this.solvedState = this.currentState;
        }
        return true;
    }

    /**
     * Returns a string summoning all changes made to this game.
     *
     * @returns {string} the string representing the changes made
     */
    getChangesString(): string {
        let stringArray: string[] = [];
        this.changes.forEach((change) => {
            let changeString: string;
            changeString = '';
            changeString += change.getReason() + '\n';
            changeString += '\tRating: ' + change.getRating() + '\n';
            stringArray.push(changeString)
        });
        return stringArray.join('');
    }

    /**
     * Returns whether the game is solved
     *
     * @returns {boolean} whether the game is solved
     */
    isSolved(): boolean {
        return this.solvedState !== null;
    }

    /**
     * Returns a nice representation of the current state of a game
     * and some statistics.
     *
     * @returns {string} the representation of the current state
     */
    toString(): string {
        let result = 'Moves:\n' + this.getChangesString() +
            '\nNumber of Moves: ' + this.getChanges().length +
            '\nRating: ' + this.getRating() +
            '\nSolved: ' + this.isSolved() +
            '\nCurrent state:\n\n' + this.getCurrentState().toString();
        return result;
    }
}