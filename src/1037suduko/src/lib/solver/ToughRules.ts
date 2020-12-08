import * as _ from "lodash";

import {SudokuStateChange} from "../game/SudokuStateChange";
import {SolverRule, TRuleFunction} from "./SolverRule";
import {Sudoku} from "../game/Sudoku";
import {AbstractToughRules} from "./AbstractToughRules";
import {AbstractColoringRules} from "./AbstractColoringRules";

/**
 * A class grouping the tough sudoku rules.
 *
 * The rules were taken from the website 'http://www.sudokuwiki.org/sudoku.htm'
 * run by Andrew Stuart. The naming of the rules mostly follows the naming
 * on that site.
 */
export class ToughRules {

    /**
     * The Y-Wing rule checks all squares that have two remaining candidates.From these squares it takes the union
     * of all remaining candidates. From this union it takes all triples of values. For every remaining candidate and
     * every value triple it checks for possible wings. Possible wings are pairs of squares whose candidates give the
     * full triple and that have one candidate in common with the square candidate. For each such pair of wings it
     * removes the common candidate from each common peer whose candidates contain it.
     *
     * @param {Sudoku} sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be done according this rule
     * @private
     */
    private static _ywRuleFn: TRuleFunction = (sudoku) => {
        return AbstractToughRules.abstractY_Wing(sudoku, false);
    }

    /**
     * The XYZ-Wing rule is a variant of the Y-Wing rule. It differs from that rule in that the hinge contains
     * all three values and the common value is removed from the peers of the two wings and the hinge.
     *
     * @param {Sudoku} sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be done according this rule
     * @private
     */
    private static _xyzwRuleFn: TRuleFunction = (sudoku) => {
        return AbstractToughRules.abstractY_Wing(sudoku, true);
    }

    /**
     * The X-Wing rule searches firstly rows then columns for defining 'X'-es.
     * @see AbstractBasicRules.abstractCrossExclude
     *
     * @param {Sudoku} sudoku sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be done according this rule
     * @private
     */
    private static _xwRuleFn: TRuleFunction = (sudoku) => {
        let moves: SudokuStateChange[];
        let rows = sudoku.getRows();
        let columns = sudoku.getColumns();
        moves = AbstractToughRules.abstractCrossExclude(columns, rows, 2);
        moves = _.concat(moves, AbstractToughRules.abstractCrossExclude(rows, columns, 2));
        return moves;
    }

    /**
     * The Swordfish rule searches firstly rows then columns for defining '3*3' squares.
     * @see AbstractBasicRules.abstractCrossExclude
     *
     * @param {Sudoku} sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be done according this rule
     * @private
     */
    private static _sfRuleFn: TRuleFunction = (sudoku) => {
        let moves: SudokuStateChange[];
        let rows = sudoku.getRows();
        let columns = sudoku.getColumns();
        moves = AbstractToughRules.abstractCrossExclude(columns, rows, 3);
        moves = _.concat(moves, AbstractToughRules.abstractCrossExclude(rows, columns, 3));
        return moves;
    }

    /**
     * The Simple Coloring rule applies the Twice in Unit and Two Colors seen rules.
     *
     * @param {Sudoku} sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be done according this rule
     * @private
     */
    private static _scRuleFn: TRuleFunction = (sudoku) => {
        let moves: SudokuStateChange[];
        moves = AbstractColoringRules.twiceInUnit(sudoku);
        moves = _.concat(moves, AbstractColoringRules.twoColorsSeen(sudoku));
        return moves;
    }

    rules: SolverRule[];

    constructor() {
        this.rules = [];

        let xwRule = new SolverRule('X-Wing Rule: ', 50, ToughRules._xwRuleFn);
        this.rules.push(xwRule);

        let scRule = new SolverRule('Simple Coloring Rule: ', 55, ToughRules._scRuleFn);
        this.rules.push(scRule);

        let ywRule = new SolverRule('Y-Wing Rule: ', 60, ToughRules._ywRuleFn);
        this.rules.push(ywRule);

        let sfRule = new SolverRule('Swordfish Rule: ', 65, ToughRules._sfRuleFn);
        this.rules.push(sfRule);

        let xyzwRule = new SolverRule('XYZ-Wing Rule: ', 70, ToughRules._xyzwRuleFn);
        this.rules.push(xyzwRule);
    }
}