import Body from "./components/Body";
import "./App.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);


function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
