import {SudokuGame} from "./lib/game/SudokuGame";
import {Solver} from "./lib/solver/Solver";
import {SudokuCli} from "./lib/cli/SudokuCli";
import {Backtracker} from "./lib/backtracker/Backtracker";
import {Generator, Symmetry} from "./lib/generator/Generator";

try {
    let options = SudokuCli.parseArguments(process.argv);
    let sudokuString = options.sudokuString;

    if (options.help) {
        console.log(SudokuCli.printHelp());
    }
    ;

    if (options.version) {
        console.log(SudokuCli.printVersion());
    }
    ;

    if (sudokuString) {
        if (options.solver) {
            let game = new SudokuGame(sudokuString);
            let solver = new Solver(game);
            solver.addStandardRules();
            solver.solve();
            console.log('Game:\n' + game.toString());
        }
        else if (options.backtrack) {
            let game = new SudokuGame(sudokuString);
            let backtracker = new Backtracker(game);
            backtracker.solve(true);
            if (backtracker.solvedGames.length !== 1) {
                console.log("!!!!!!!!!!!!!!!!!!!!1MULTIPLE SOLUTIONS FOUND!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                backtracker.solvedGames.forEach((game, index) => {
                    console.log("SOLUTION NUMBER " + index + '\n');
                    console.log(game.toString());
                });
            }
            else {
                console.log('Game:\n' + game.toString());
            }
        }
    }
    else if (options.generate) {
        let game = Generator.generate(0, 100, 5, Symmetry.central);
        if (game !== null)
            console.log(game.toString());
    }
    else {
        console.log('No game found!')
    }
}
catch (e) {
    console.log(e.message);
    console.log(SudokuCli.printHelp());
}