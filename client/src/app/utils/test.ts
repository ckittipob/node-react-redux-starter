import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/index';
import ReduxThunk from 'redux-thunk';
import { ShallowWrapper } from 'enzyme';

export const findByTestAttr = (component: ShallowWrapper, attr: string) => {
    const wrapper = component.find(`[data-test=${attr}]`);
    return wrapper
}

export const testStore =  (initialState : any) => {
    const middlewares = [ReduxThunk]
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState)
}