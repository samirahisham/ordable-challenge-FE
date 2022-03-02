import "./App.css";

import { Provider } from "react-redux";
import store from "./redux";
import Routes from "./Router";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { Content, Footer, Header } from "antd/lib/layout/layout";

function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout>
          <Header></Header>
          <Content style={{ minHeight: 900 }}>
            <Routes />
          </Content>
          <Footer></Footer>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
