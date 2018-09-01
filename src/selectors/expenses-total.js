
export default (expenses) => {
    if(expenses.length === 0) {
        return 0;
    } else {
        return expenses
            .reduce((acc, expense) => acc + expense.amount, 0);
    }
};
