import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducer';
import ReduxCounter from './container/counterContainer';

const store = createStore(reducer);

export const Redux = () => {
    return <Provider store={store}>
        <ReduxCounter />
    </Provider>
}
