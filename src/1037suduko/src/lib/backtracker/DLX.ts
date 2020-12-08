import {ColumnChooser, ColumnObject, DataObject, IResultHandler, TChooseColumnFn} from "./DLXHelpers";

/**
 * A class implementing the Dancing Links implementation of Algorithm X. Also called "DLX".
 *
 * This implementation is nearly wordily the same as in Donald Knuth's original paper (see
 * http://lanl.arxiv.org/pdf/cs/0011047). The variable names are changed however for a little
 * more verbosity. Other changes:
 * - Added fields "rowIndex" to {@link DataObject} and "columnIndex" to {@link ColumnObject}
 * - Made the functions "print" and "choose column" configurable
 * - Added fields "numberOfColumns" and "numberOfRows"
 * - Added field "columns" to store the {@link ColumnObject}s
 * - Added a boolean parameter "findAll" to chose whether to find all solutions to a problem or just one.
 * - Added a boolean field "running" that is evaluated if "findAll" is set to false.
 */
export class DLX {
    private chooseColumn: TChooseColumnFn;
    private resultHandler: IResultHandler;
    private numberOfColumns: number;
    private numberOfRows: number;
    private root: DataObject;
    private currentSolution: DataObject[];
    private columns: ColumnObject[];
    private findAll: boolean;
    private running: boolean;

    /**
     * Constructs the representation of a Dancing Links problem.
     *
     * Expects the names of the columns and an array of rows, which are
     * expected to have the same length as the names. It also expects an
     * result handler, implementing `IResultHandler`, which is responsible
     * for returning the result in the favored way. Optionally a rule for
     * choosing the nest column to cover can be given.
     *
     * @param {string[]} names the names of the columns
     * @param {boolean[][]} rows the rows of the problem
     * @param {IResultHandler} resultHandler the result handler
     * @param {TChooseColumnFn} chooseColumnFn the rule for choosing a column.
     *      Optional, defaults to {@code ColumnChooser.chooseColumnSmallest}.
     * @param {boolean} findAll whether to find all ore one solution. Optional, defauts to {@code true}
     */
    constructor(names: string[],
                rows: boolean[][],
                resultHandler: IResultHandler,
                chooseColumnFn: TChooseColumnFn = ColumnChooser.chooseColumnSmallest,
                findAll: boolean = true) {
        //validate input
        if (!rows.reduce((haveRightLength, currentRow) =>
                haveRightLength && currentRow.length === names.length, true)) {
            throw new Error('At least one row has a wrong length');
        }
        //initialize attributes
        this.numberOfColumns = names.length;
        this.numberOfRows = rows.length;
        this.root = new DataObject();
        this.currentSolution = [];
        this.resultHandler = resultHandler;
        this.chooseColumn = chooseColumnFn;
        this.findAll = findAll;
        this.running = false;

        //create columns
        this.columns = names.map((name, index) => new ColumnObject(name, index + 1));

        //doubly link columns
        this.columns.forEach(column => {
            column.right = this.root;
            column.left = this.root.left;
            this.root.left.right = column;
            this.root.left = column;
        });

        //add rows
        rows.forEach((row, rowIndex) => {
            this.addNewRow(row, rowIndex);
        });
    }

    /**
     * Solve this problem.
     *
     * Results can be retrieved via the given `IResultHandler`.
     *
     * @param {boolean} findAll whether to to find all solutions to a given puzzle candidate
     */
    public solve() {
        this.running = true;
        this.search(0);
    }

    private addNewRow(row: boolean[], rowIndex: number) {
        let rowDataArray: DataObject[] = [];
        //for each row
        row.forEach((filled, columnIndex) => {
            //create a data object for each entry, ...
            if (filled) {
                let newDataObject = new DataObject();
                newDataObject.rowIndex = rowIndex + 1;
                //... link it to its column ...
                newDataObject.up = this.columns[columnIndex].up;
                newDataObject.down = this.columns[columnIndex];
                newDataObject.column = this.columns[columnIndex];
                this.columns[columnIndex].up.down = newDataObject;
                this.columns[columnIndex].up = newDataObject;
                this.columns[columnIndex].size++;
                //... and store it
                rowDataArray.push(newDataObject);
            }
        });

        if (rowDataArray.length !== 0) {
            //for each stored row
            let firstInRow = rowDataArray[0];
            //for each data object in it
            rowDataArray.forEach(node => {
                if (node !== firstInRow) {
                    //link it in its row
                    node.left = firstInRow.left;
                    node.right = firstInRow;
                    firstInRow.left.right = node;
                    firstInRow.left = node;
                }
            });
        }
    }

    private search(depth: number) {
        if (this.root.right == this.root) {
            this.resultHandler.processResult(this.currentSolution);
            if (!this.findAll) {
                this.running = false;
            }
            return;
        }
        else {
            let columnToCover = this.chooseColumn(this.root);
            this.cover(columnToCover);
            let rowToSearch = columnToCover.down;
            while (rowToSearch != columnToCover) {
                this.currentSolution[depth] = rowToSearch;
                let innerColumnToCover = rowToSearch.right;
                while (innerColumnToCover != rowToSearch) {
                    this.cover(innerColumnToCover.column);
                    innerColumnToCover = innerColumnToCover.right;
                }
                if (this.running) {
                    this.search(depth + 1);
                }
                rowToSearch = this.currentSolution[depth];
                columnToCover = rowToSearch.column;
                innerColumnToCover = rowToSearch.left;
                while (innerColumnToCover != rowToSearch) {
                    this.uncover(innerColumnToCover.column);
                    innerColumnToCover = innerColumnToCover.left;
                }
                rowToSearch = rowToSearch.down;
            }
            this.uncover(columnToCover);
            return;
        }
    }

    private cover(column: ColumnObject) {
        column.right.left = column.left;
        column.left.right = column.right;
        let currentRow = column.down;
        while (currentRow != column) {
            let currentColumn = currentRow.right;
            while (currentColumn != currentRow) {
                currentColumn.down.up = currentColumn.up;
                currentColumn.up.down = currentColumn.down;
                currentColumn.column.size--;
                currentColumn = currentColumn.right;
            }
            currentRow = currentRow.down;
        }
    }

    private uncover(column: ColumnObject) {
        let currentRow = column.up;
        while (currentRow != column) {
            let currentColumn = currentRow.left;
            while (currentColumn != currentRow) {
                currentColumn.column.size++;
                currentColumn.down.up = currentColumn;
                currentColumn.up.down = currentColumn;
                currentColumn = currentColumn.left;
            }
            currentRow = currentRow.up;
        }
        column.right.left = column;
        column.left.right = column;
    }
}
