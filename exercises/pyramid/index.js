// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    pyramidRow(1, n);
}

function pyramidRow (column, n) {
    if (column === n + 1) {
        return
    }

    let string = ' '.repeat(n - column) + '#'.repeat(2 * column - 1) + ' '.repeat(n - column);
    console.log(string);

    pyramidRow(column + 1, n);
}

module.exports = pyramid;
