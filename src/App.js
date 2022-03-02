import "./App.css";

import { Provider } from "react-redux";
import store from "./redux";
import Routes from "./Router";
import { Layout } from "antd";
import "antd/dist/antd.css";

function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout>
          <Routes />
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
