export default (expenses) => expenses
    .reduce((sum, expense) => sum + expense.amount, 0)
// export default (expenses) => expenses
//     .map(expense => expense.amount)
//     .reduce((sum, value) => sum + value, 0)