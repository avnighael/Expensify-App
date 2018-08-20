import expenseReducer from '../../reducers/expenses';
import uuid from 'uuid';
import expenses from "../fixtures/expenses";

const id1 = uuid();
const expense1 = {
    id: id1,
    description: 'breakfast',
    note: '',
    amount: '150',
    createdAt: 0
};

test('should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const expenseAction = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expenseReducer(expenses, expenseAction);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if id is not found', () => {
    const expenseAction = {
        type: 'REMOVE_EXPENSE',
        id: 1234
    };
    const state = expenseReducer(expenses, expenseAction);
    expect(state).toEqual(expenses)
});

test('should add given expense', () => {
    const expense = {
        id: uuid(),
        description: 'rent',
        note: '',
        amount: '15000',
        createdAt: 0
    };
    const expenseAction = {
        type: 'ADD_EXPENSE',
        expense: expense
    };
    const state = expenseReducer(expenses, expenseAction);
    expect(state).toEqual([...expenses, expense])
});

test('should edit the given expense', () => {
    const note = "Feb month bill";
    const expenseAction = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note: note
        }
    };

    const state = expenseReducer(expenses, expenseAction);
    expect(state[1].note).toBe(note)
});

test('should not edit the expense if id not found', () => {
    const amount = 50000;
    const expenseAction = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            amount: amount
        }
    };

    const state = expenseReducer(expenses, expenseAction);
    expect(state).toEqual(expenses)
});
