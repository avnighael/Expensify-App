import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 300, createdAt: 21000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount:100, createdAt: 1000 }));

// console.log(store.getState());
store.dispatch(setTextFilter('bill'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'));
