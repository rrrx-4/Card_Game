export const addUserToLocalStorage = (initialState) => {
    localStorage.setItem('initialState', JSON.stringify(initialState));
}

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('initialState');
}

export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem('initialState');

    const oldS = result ? JSON.parse(result) : null;

    return oldS;
}