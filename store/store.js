
import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const initial = {
    user: null,
}

// create your reducer
const reducer = (state = initial, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

// create a make store function
const makeStore = context => createStore(reducer);
// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
