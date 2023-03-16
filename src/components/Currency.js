import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);

        const [currencyState, setCurrencyState] = useState(currency);

        useEffect(() => {
            
        });

        return (
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Currency Type</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={(currency) => setCurrencyState(currency.target.value)}>
                    <option defaultValue value="$" name="Dollar">$ Dollar</option>
                    <option value="£" name="Pound">£ Pound</option>
                    <option value="€" name="Euro">€ Euro</option>
                    <option value="₹" name="Ruppee">₹ Ruppee</option>
                </select>
            </div>
        );
}   
export default Currency;    