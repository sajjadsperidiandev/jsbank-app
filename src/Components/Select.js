import React from 'react'

export const SelectComponent = (
    { dataList, value, label, handleChange ,isDisabled }) => {
    return (
        <select
            required
            className="form-control custom-select"
            value={value}
            onChange={(e) => handleChange(e,  Object.keys(value))}
        disabled={isDisabled}
        >
            <option value="" disabled="disabled">
                {label}
            </option>
            {dataList.map((item, index) => {
                return (
                    <option value={item} key={index}>
                        {item}
                    </option>
                );
            })}
        </select>
    )
}
