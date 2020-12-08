import * as _ from "lodash";

import {SudokuGame} from '../game/SudokuGame';
import {SolverRule} from "./SolverRule";
import {MostBasicRules} from "./MostBasicRules";
import {BasicRules} from "./BasicRules";
import {ToughRules} from "./ToughRules";


/**
 * This class represents a solver to a given game.
 */
export class Solver {
    private readonly game: SudokuGame;
    private rules: SolverRule[];

    /**
     * Gets a {@code Solver} for the given game.
     *
     * @param {SudokuGame} game the given game
     */
    constructor(game: SudokuGame) {
        this.game = game;
        this.rules = [];
    }

    addRules(rules: SolverRule[]) {
        this.rules = _.concat(this.rules, rules);
    }

    addStandardRules() {
        let mostBasicRules = new MostBasicRules();
        let basicRules = new BasicRules();
        let toughRules = new ToughRules();
        this.rules = _.concat(this.rules, mostBasicRules.rules);
        this.rules = _.concat(this.rules, basicRules.rules);
        this.rules = _.concat(this.rules, toughRules.rules);
    }

    /**
     * This method tries to solve the associated game.
     *
     * It applies every rule registered with this solver.
     * In a loop it tries each rule from simplest to
     * hardest. If it finds a rule that applies it sets a
     * single move according this rule. It also sets the reason
     * and rating of the move. The rating is calculated from
     * the base rating of the rule divided by the number of
     * possibilities for the rule. After a rule is applied
     * the loop starts again. The loop ends when the game is
     * solved or if no rule could be applied.
     *
     * @returns {boolean} whether the game was solved
     */
    solve(): boolean {
        if (this.rules.length === 0) {
            throw new Error('No rules added!');
        }
        let allTried = false;
        let solved = false;
        let ruleApplied: boolean;
        while (!solved && !allTried) {
            ruleApplied = false;
            this.rules.forEach((rule) => {
                if (!ruleApplied) {
                    let moves = rule.getRule()(this.game.getCurrentState());
                    let numberOfMoves = moves.length;
                    if (numberOfMoves !== 0) {
                        let rating = rule.getRating() / numberOfMoves;
                        moves.forEach((move) => {
                            move.setRating(rating);
                            move.setReason(rule.getName() + move.getReason());
                            if (this.game.changeState(move)) {
                                solved = this.game.isSolved();
                                ruleApplied = true;
                            }
                        })
                    }
                }
            })
            if (!ruleApplied) {
                allTried = true;
            }
        }
        return this.game.isSolved();
    }
}