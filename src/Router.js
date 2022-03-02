/* eslint eqeqeq: "off"*/

import { Button } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate } from "react-router-dom";

//redux
import { Route, Routes } from "react-router-dom";
import OrdersList from "./Admin/OrdersList";
import Home from "./Components/Home";
import MapObj from "./Components/Map";
import AssignedOrdersList from "./Driver/AssignedOrdersList";
import { logout } from "./redux/actions";

const RoutesObj = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  return (
    <>
      <Header>
        {user && <Button onClick={() => dispatch(logout())}>Logout</Button>}
      </Header>
      <Content style={{ minHeight: 900 }}>
        <BrowserRouter>
          <Routes>
            {!!user && (
              <>
                {user.user_type === "merchant" ? (
                  <>
                    <Route path="stores/:storeId" element={<OrdersList />} />
                  </>
                ) : user.user_type === "driver" ? (
                  <>
                    <Route
                      exact
                      path="orders/:storeId"
                      element={<AssignedOrdersList />}
                    />
                    <Route exact path="map/:lng/:lat" element={<MapObj />} />
                  </>
                ) : (
                  <>invalid user</>
                )}
              </>
            )}
            <>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          </Routes>
        </BrowserRouter>
      </Content>
      <Footer></Footer>
    </>
  );
};

export default RoutesObj;
