import React from 'react';

import { PickerProps } from './interfaces';

export const Picker = (props: PickerProps) => {
    const { value, onChange, options } = props;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    return (
        <span>
            <h1>{value}</h1>
            <select onChange={handleChange} value={value}>
                {options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </span>
    );
};
