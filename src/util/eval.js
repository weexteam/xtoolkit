const chalk = require('chalk');

/**
 * Evaluate an expression in the context of
 * prompt answers data.
 */

module.exports = function evaluate (exp, data) {
  /* eslint-disable no-new-func */
  const fn = new Function('data', 'return ' + exp);
  try {
    return fn(data);
  }
  catch (e) {
    console.error(chalk.red('Error when evaluating filter condition: ' + exp));
  }
};
