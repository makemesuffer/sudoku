module.exports = function solveSudoku(matrix) {

    function colCheck(col, num) {
        for(let i = 0; i < 9; i++) {
            if(matrix[i][col] === num) return true;
        }
    }

    function rowCheck(row, num) {
        for(let i = 0; i < 9; i++) {
            if(matrix[row][i] === num) return true;
        }
    }

    function cellCheck(row, col, num) {
        const r = Math.floor(row / 3) * 3;
        const c = Math.floor(col / 3) * 3;
        for(let i = r; i < r + 3; i++) {
            for(let j = c; j < c + 3; j++) {
                if(matrix[i][j] === num) return true;
            }
        }
    }

    function safeCheck(row, col, num) {
        return (!rowCheck(row, num) && !colCheck(col, num) && !cellCheck(row, col, num));
    }

    function solve() {
        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {
                if(!matrix[row][col]) {
                    for(let num = 1; num <= 9; num++) {
                        if(safeCheck(row, col, num)) {
                            matrix[row][col] = num;
                            if(solve()) {
                                return true;
                            } else {
                                matrix[row][col] = 0;
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    if(solve()) {
        return matrix;
    }
};
