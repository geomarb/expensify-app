import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ***** BEGIN *****
// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = {},
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date',
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount',
});
// SET_START_DATE
const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate,
});
// SET_END_DATE
const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate,
});
// ***** END *****
// ***** BEGIN ***** Expenses Reducer *****
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense,
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } 
                    return expense
                
            });
    default:
      return state;
  }
};
// ***** END ***** Expenses Reducer *****
// ***** BEGIN ***** Filter Reducer *****
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
// ***** END ***** Filter Reducer *****
// Get visible expenses
const getVisibleExpenses = (expenses, {
 text, sortBy, startDate, endDate 
}) => expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) // true // !text //|| expense.text === text

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    });
// ***** BEGIN ***** Store creating *****
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
}),);
// ***** END ***** Store creating *****
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: 2000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('ffe'))
// //store.dispatch(setTextFilter())

store.dispatch(sortByAmount());
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))

const demoState = {
  expenses: [{
    id: 'asdfasfdasf',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
