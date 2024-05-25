// src/redux/reducers/hitungReducer.js
const initialState = 0;

const hitungReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TAMBAH':
            return state + 1;
        case 'KURANG':
            return state - 1;
        default:
            return state;
    }
};

export default hitungReducer;
