import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {store} from "./store";
import {Provider} from "react-redux";
import TradePage from './components/TradePage';
import SignIn from './components/SignIn';
import MasterComp from './components/MasterComp';

function App() {

  return (
  <Provider store={store}>
      <div className="App">
      <MasterComp />
    </div>
  </Provider>
  );
}

export default App;
