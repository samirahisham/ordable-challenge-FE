/* eslint eqeqeq: "off"*/

import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate } from "react-router-dom";

//redux
import { Route, Routes } from "react-router-dom";
import OrdersList from "./Admin/OrdersList";
import Home from "./Components/Home";
import MapObj from "./Components/Map";
import AssignedOrdersList from "./Driver/AssignedOrdersList";

const RoutesObj = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
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
  );
};

export default RoutesObj;
