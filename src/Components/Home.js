import { CarOutlined } from "@ant-design/icons";
import { Result } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShops } from "../redux/actions";
import LoginPage from "./auth/LoginPage";
import Loader from "./Loader";
import ShopsList from "./ShopsList";
const Home = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) dispatch(getShops());
  }, [user]);
  const loading = useSelector((state) => state.loadingReducer.loading);
  if (loading && user) return <Loader />;
  return (
    <div>
      {user ? (
        <Result icon={<CarOutlined />} title="Welcome!" extra={<ShopsList />} />
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default Home;
