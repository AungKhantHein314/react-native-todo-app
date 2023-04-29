import { Provider } from 'react-redux';

import Navigator from './app/Navigator';
import { store } from './app/L0-redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}
