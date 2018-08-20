import moment from 'moment';

export default [{
    id: '1',
    description: 'Electricity',
    note: 'Last month',
    amount: 25000,
    createdAt: 0
}, {
    id: '2',
    description: 'Wifi',
    note: '',
    amount: 10000,
    createdAt: moment(0).subtract(1, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card bill',
    note: '',
    amount: 15000,
    createdAt: moment(0).add(4, 'days').valueOf()
}];
