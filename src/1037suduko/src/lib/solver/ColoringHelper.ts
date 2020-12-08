import * as _ from "lodash";

import {Sudoku} from "../game/Sudoku";
import {Square} from "../game/Square";

enum Color {
    Blue,
    Green,
    Uncolored
}

/**
 * A class representing a coloring of a sudoku.
 */
export class Coloring {

    static Color = Color;

    /**
     * The colors used to color the sudoku.
     * @type {Color[]} the colors
     */
    static colors: Color[] = [Color.Blue, Color.Green];

    private coloredSquares: Square[][];
    private readonly squares: Square[];

    /**
     * Returns an empty coloring of a sudoku, that is a sudoku with all squares uncolored.
     * @param {Sudoku} sudoku the sudoku to color
     */
    constructor(sudoku: Sudoku) {
        this.squares = sudoku.getSquares();
        this.coloredSquares = [];
        this.coloredSquares[Color.Uncolored] = this.squares;
        this.coloredSquares[Color.Blue] = [];
        this.coloredSquares[Color.Green] = [];
    }

    /**
     * Colors the given squares to the given colors.
     *
     * Tests whether each of the given squares is uncolored.
     *
     * @param {Square[]} squares the squares to color
     * @param {Color} color the color to use
     */
    colorSquares(squares: Square[], color: Color) {
        if (squares.reduce((res, square) =>
                (res || this.coloredSquares[Color.Uncolored].indexOf(square) === -1), false)) {
            throw new Error('Square already colored');
        }
        this.coloredSquares[color] = _.concat(this.coloredSquares[color], squares);
        this.coloredSquares[Color.Uncolored] = _.difference(this.coloredSquares[Color.Uncolored], squares);
    }

    /**
     * Gets all squares colored with a given color.
     *
     * @param {Color} color the color to search for
     * @returns {Square[]} the colored squares
     */
    getSquares(color: Color): Square[] {
        return this.coloredSquares[color];
    }

    /**
     * Gets all uncolored squares.
     *
     * @returns {Square[]} the uncolored squares
     */
    getUncoloredSquares(): Square[] {
        return this.coloredSquares[Color.Uncolored];
    }
}

/**
 * A class with helper functions for coloring.
 */
export class ColoringHelper {

    /**
     * Returns all colorings of a given sudoku for a given value.
     *
     *First it finds all 'links' for the given value, that is pairs of squares in a unit that
     * are the last possibilities in this unit for this value. Then it finds all 'chains' that can be
     * formed with these links. 'Chains' are links that share a square. For each chain that is longer
     * than a single link find the accompanying 'coloring'. A 'coloring' is found by giving the first
     * square in the first link in a chain a randomly chosen color and then alternating the color for
     * each square in the chain.
     *
     * @param {Sudoku} sudoku the sudoku to color
     * @param {number} value the value to color the sudoku for
     * @returns {Coloring[]} the colorings of the sudoku
     */
    static color(sudoku: Sudoku, value: number): Coloring[] {
        //find all links
        let links: Square[][] = [];
        let units = sudoku.getUnits();
        units.forEach(unit => {
            let squares = unit.filter(square => square.containsCandidate(value));
            if (squares.length === 2) {
                links = _.unionWith(links, [squares], (link, newLink) => _.isEqual(link, newLink));
            }
        })
        //find all chains formed by these links
        let chains: Square[][][] = [];
        links.forEach(link => {
            //find chains that intersect with this link
            let neighbouringChains = chains.filter(chain => chain.reduce((neighbouring, neighbouringLink) =>
                (neighbouring || _.intersection(link, neighbouringLink).length !== 0), false));
            //if this link hasn't intersections, add a new chain
            if (neighbouringChains.length === 0) {
                chains.push([link]);
            }
            //if it has one intersection, add this link to the intersecting chain
            else if (neighbouringChains.length === 1) {
                neighbouringChains[0].push(link);
            }
            //it has more connections ...
            else {
                //... so find all intersecting chains ...
                chains = _.differenceWith(chains, neighbouringChains, (arrVal, othVal) => _.isEqual(arrVal, othVal));
                //... and form a new chain
                let newChain: Square[][] = [];
                neighbouringChains.forEach(neighbouringChain => {
                        let neighbouringChainWithoutLink = neighbouringChain.filter(linkInChain =>
                            !_.isEqual(linkInChain, link));
                        newChain = _.concat(newChain, neighbouringChainWithoutLink);
                    }
                );
                chains.push(newChain);
            }
        });
        //find all colorings produced by these chains, that are longer than a single link
        let colorings: Coloring[] = [];
        chains = chains.filter(chain => (chain.length !== 1));
        chains.forEach(chain => {
            let coloring = new Coloring(sudoku);
            let coloredSquares: Square[][] = [];
            coloredSquares[Color.Blue] = [];
            coloredSquares[Color.Green] = [];
            let squaresToColor: Square[] = _.flatten(chain);
            squaresToColor = _.uniq(squaresToColor);
            //color the first square
            coloredSquares[Color.Blue].push(squaresToColor[0]);
            squaresToColor.shift();
            coloredSquares[Color.Uncolored] = squaresToColor;
            //color the rest!
            while (squaresToColor.length !== 0) {
                let squareColored = false;
                let squareToColor = squaresToColor[0];
                let neighbours = links.filter(link => (link.indexOf(squareToColor) !== -1)).map(link =>
                    link[0] === squareToColor ? link[1] : link [0]
                );
                let coloredNeighbours = Coloring.colors.map(color => neighbours.filter(neighbour =>
                    coloredSquares[color].indexOf(neighbour) !== -1)
                );
                Coloring.colors.forEach(color => {
                    if (coloredNeighbours[color].length > 0) {
                        //color the square to color
                        let otherColor = color == Color.Green ? Color.Blue : Color.Green;
                        coloredSquares[otherColor].push(squareToColor);
                        squaresToColor = squaresToColor.filter(remains => remains !== squareToColor);
                        squareColored = true
                        //color uncolored neighbours
                        let uncoloredNeighbours = neighbours.filter(neighbour =>
                            coloredNeighbours[color].indexOf(neighbour) === -1);
                        uncoloredNeighbours.forEach(uncoloredNeighbour => {
                            coloredSquares[color].push(uncoloredNeighbour);
                            squaresToColor = squaresToColor.filter(remains => remains !== uncoloredNeighbour);
                        });
                    }
                });
                if (!squareColored) {
                    //revolve squares to color
                    let first = squaresToColor.shift()!;
                    squaresToColor.push(first);
                }
            }
            Coloring.colors.forEach(color => {
                coloring.colorSquares(coloredSquares[color], color);
            });
            colorings.push(coloring);
        });
        return colorings;
    }
}
