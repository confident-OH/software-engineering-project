import {Sudoku} from "../game/Sudoku";
import {SudokuStateChange} from "../game/SudokuStateChange";

/**
 * Type that a solver rule must follow.
 */
export type TRuleFunction = (sudoku: Sudoku) => SudokuStateChange[];

/**
 * A class to represent a rule to be applied to a sudoku game.
 */
export class SolverRule {

    constructor(private name: string,
                private baseRating: number,
                private rule: TRuleFunction) {
    }

    getRule() {
        return this.rule;
    }

    getRating() {
        return this.baseRating;
    }

    getName() {
        return this.name;
    }
}