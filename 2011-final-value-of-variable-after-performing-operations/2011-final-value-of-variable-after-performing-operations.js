/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((acc, cur) => {
        switch(cur) {
            case '--X':
            case 'X--':
                return acc - 1;
            case '++X':
            case 'X++':
                return acc + 1;
        }
    }, 0)

};