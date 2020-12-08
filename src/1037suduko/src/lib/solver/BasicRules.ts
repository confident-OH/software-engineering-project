import {SolverRule, TRuleFunction} from "./SolverRule";
import {SudokuStateChange} from "../game/SudokuStateChange";
import {Sudoku} from "../game/Sudoku";
import {AbstractBasicRules} from "./AbstractBasicRules";

/**
 * A class grouping the simple sudoku rules.
 *
 * The rules were taken from the website 'http://www.sudokuwiki.org/sudoku.htm'
 * run by Andrew Stuart. The naming of the rules mostly follows the naming
 * on that site.
 */
export class BasicRules {

    /**
     * The 'naked pair rule' checks each unit whether there are two squares
     * that have only the same two candidates. If it finds such a pair, it
     * removes their candidate from all other squares that are in units shared
     * by this pair.
     *
     * @param {Sudoku} sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be done according this rule
     */
    private static _npRuleFn: TRuleFunction = (sudoku) => {
        return AbstractBasicRules.nakedTupleRule(sudoku, 2);
    }

    /**
     * The 'naked triple rule' checks each unit whether there are three squares
     * that have just three candidates in common. If it finds such a triple, it
     * removes the common candidates from all other squares that are in units shared
     * by this triple.
     *
     * @param {Sudoku} sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be
     * done according this rule
     */
    private static _ntRuleFn: TRuleFunction = (sudoku) => {
        return AbstractBasicRules.nakedTupleRule(sudoku, 3);
    }

    /**
     * The 'naked quadruple rule' checks each unit whether there are four squares
     * that have just four candidates in common. If it finds such a quadruple, it
     * removes the common candidates from all other squares that are in units shared
     * by this triple.
     *
     * @param {Sudoku} sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be
     * done according this rule
     */
    private static _nqRuleFn: TRuleFunction = (sudoku) => {
        return AbstractBasicRules.nakedTupleRule(sudoku, 4);
    }

    /**
     * The 'hidden pair rule' checks each unit whether there are two candidates
     * that have just two squares in common. If it finds such a pair, it
     * removes the common candidates from all other squares in this unit.
     *
     * @param {Sudoku} sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be
     * done according this rule
     */
    private static _hpRuleFn: TRuleFunction = (sudoku) => {
        return AbstractBasicRules.hiddenTupleRule(sudoku, 2);
    }

    /**
     * The 'hidden triple rule' checks each unit whether there are three candidates
     * that have just three squares in common. If it finds such a triple, it
     * removes the common candidates from all other squares in this unit.
     *
     * @param {Sudoku} sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be
     * done according this rule
     */
    private static _htRuleFn: TRuleFunction = (sudoku) => {
        return AbstractBasicRules.hiddenTupleRule(sudoku, 3);
    }

    /**
     * The 'hidden quadruple rule' checks each unit whether there are four candidates
     * that have just four squares in common. If it finds such a quadruple, it
     * removes the common candidates from all other squares in this unit.
     *
     * @param {Sudoku} sudoku the state of the game
     * @returns {SudokuStateChange[]} an array of moves that could be
     * done according this rule
     */
    private static _hqRuleFn: TRuleFunction = (sudoku) => {
        return AbstractBasicRules.hiddenTupleRule(sudoku, 4);
    }

    /**
     * It checks every box whether there is there is a pointing pair or triple
     * in a line. If it finds a pointing pair or triple it removes the values of the
     * pointing pairs or triples from all squares in that line.
     *
     * @param {Sudoku} sudoku the sudoku to solve
     * @returns {SudokuStateChange[]} the moves to do
     * @private
     */
    private static _ppRuleFn: TRuleFunction = (sudoku) => {
        let boxes = sudoku.getBoxes();
        return AbstractBasicRules.boxLineIntersection(sudoku, boxes);
    }

    /**
     * It checks every line whether there is there is a pointing pair or triple
     * in a box. If it finds a pointing pair or triple it removes the values of the
     * pointing pairs or triples from all squares in that box.
     *
     * @param {Sudoku} sudoku the sudoku to solve
     * @returns {SudokuStateChange[]} the moves to do
     * @private
     */
    private static _blrRuleFn: TRuleFunction = (sudoku) => {
        let lines = sudoku.getLines();
        return AbstractBasicRules.boxLineIntersection(sudoku, lines);
    }

    rules: SolverRule[];

    constructor() {
        this.rules = [];

        let npRule = new SolverRule('Naked Pair Rule: ', 10, BasicRules._npRuleFn);
        this.rules.push(npRule);

        let hpRule = new SolverRule('Hidden Pair Rule: ', 15, BasicRules._hpRuleFn);
        this.rules.push(hpRule);

        let ntRule = new SolverRule('Naked Triple Rule: ', 20, BasicRules._ntRuleFn);
        this.rules.push(ntRule);

        let htRule = new SolverRule('Hidden Triple Rule: ', 25, BasicRules._htRuleFn);
        this.rules.push(htRule);

        let nqRule = new SolverRule('Naked Quadruple Rule: ', 30, BasicRules._nqRuleFn);
        this.rules.push(nqRule);

        let hqRule = new SolverRule('Hidden Quadruple Rule: ', 35, BasicRules._hqRuleFn);
        this.rules.push(hqRule);

        let ppRule = new SolverRule('Pointing Pairs Rule: ', 40, BasicRules._ppRuleFn);
        this.rules.push(ppRule);

        let blrRule = new SolverRule('Box/Line Reduction Rule: ', 45, BasicRules._blrRuleFn);
        this.rules.push(blrRule);
    }
};
