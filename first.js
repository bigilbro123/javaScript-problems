// // arr1 and arr2 are two countries ,each 1 is can connect vertically and horizontaly for build a island ,not connect digonally,

// let arr1 = [
//     [1, 1, 1, 1, 0],
//     [1, 1, 0, 1, 0],
//     [1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0]]

// //output 1



// let arr2 = [
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 1]]

// //output 3


function numIslands(grid) {
    if (grid === null || grid.length === 0) {
        return 'array cannot be null';
    }

    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    function dfs(grid, i, j) {
        if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 0) {
            return;
        }

        grid[i][j] = 0;

        // explore all four directions
        dfs(grid, i + 1, j); // down
        dfs(grid, i - 1, j); // up
        dfs(grid, i, j + 1); // right
        dfs(grid, i, j - 1); // left
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                count++;
                dfs(grid, i, j);
            }
        }
    }

    return count;
}

// Test cases
let arr1 = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

let arr2 = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
];

let arr3 = [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1]
];
let arr4 = []
console.log(numIslands(arr1)); // Outputs: 1
console.log(numIslands(arr2)); // Outputs: 3
console.log(numIslands(arr3));
console.log(numIslands(arr4));