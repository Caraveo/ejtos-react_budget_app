import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const budgetLimit = budget;

    const [budgetState, setBudgetState] = useState(budgetLimit);
    //check the budgetState value is within the budgetLimit

    useEffect(() => {
            if(budgetState > budgetLimit)
            {
                console.log('Budget cannot be greater than 20000');
                alert('The budget cannot be greater than 20000');
                setBudgetState(budget);
            }
            if(budgetState > expenses)
            {
                console.log('You cannot reduce the budget value lower than expenses');
                alert('You cannot reduce the budget value lower than expenses');
                setBudgetState(budget);
            }
        }
    );

    return (
        <form> 
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budgetState}
                    style={{ size: 10}}
                    onChange={budgetState => setBudgetState(budgetState.target.value)}> 
                </input></span>
        </div>
        </form>
    );
};
export default Budget;