import React, { createContext, useState } from 'react';

export const ActiveContext = createContext();

export function ActiveProvider(props) {

    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(isActive => !isActive);
    }

    return (
        <ActiveContext.Provider value={{ isActive, toggleActive }}>
            {props.children}
        </ActiveContext.Provider>
    );
}