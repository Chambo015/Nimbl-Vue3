import { shallowRef, watch } from 'vue';

export const useLocalStorage = <T> (key: string, initialValue: T | null = null ) => {

    const jsonLS = localStorage.getItem(key)
    const storedValue = shallowRef<T | null>(jsonLS ? JSON.parse(jsonLS) : initialValue)

    const setStoredValue = (newValue: T ) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        storedValue.value = newValue
    }

    const removeStoredValue = () => {
        localStorage.removeItem(key)
        storedValue.value = null
    }

    watch(storedValue , (newValue) => {
        if(newValue) localStorage.setItem(key, JSON.stringify(newValue));
    })

    return {storedValue, setStoredValue, removeStoredValue}
};
