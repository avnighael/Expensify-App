import filtersReducers from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set text to the given text', () => {
    const currentState = {
        text: 'electricity',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    };
    const state = filtersReducers(currentState, action);
    expect(state.text).toBe('rent');
});

test('should set sortBy to amount', () => {
    const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE'};

    const state = filtersReducers(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set startDate to the given date', () => {
    const currentState = {
        text: 'electricity',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const startDate = moment(0);
    const action = {
        type: 'SET_START_DATE',
        startDate: startDate
    };
    const state = filtersReducers(currentState, action);
    expect(state.startDate).toBe(startDate);
});

test('should set endDate to the given date', () => {
    const currentState = {
        text: 'electricity',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const endDate = moment(0);
    const action = {
        type: 'SET_END_DATE',
        endDate: endDate
    };
    const state = filtersReducers(currentState, action);
    expect(state.endDate).toBe(endDate);
});
