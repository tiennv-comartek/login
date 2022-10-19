import { useState, } from "react";

export const useLocalStorage = (key: string, defaultValue: string) => {
    const initialValue = '';
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {     
            const item = window.localStorage.getItem(key); 
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {     
            console.log(error);
            return initialValue;
        }
    });
    return {
        setStoredValue,storedValue
    }
};

export default  useLocalStorage;