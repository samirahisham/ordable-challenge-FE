import { Button, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Components/Loader";

import { getDriverOrders } from "../redux/actions";

const AssignedOrdersList = () => {
  const { storeId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const driverOrders = useSelector((state) => state.driverReducer.orders);

  useEffect(() => {
    dispatch(getDriverOrders(storeId));
  }, [storeId]);

  const handleViewMap = (record) => {
    navigate(`/map/${record.destination_long}/${record.destination_lat}`);
  };
  const tableColumns = [
    {
      title: "Order ID",
      key: "order_id",
      dataIndex: "id",
      sorter: true,
      render: (text, record) => <Space size="middle">{text}</Space>,
    },

    {
      title: "Action",
      key: "action",
      dataIndex: "id",
      sorter: true,
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleViewMap(record)}>view directions</Button>
        </Space>
      ),
    },
  ];

  const loading = useSelector((state) => state.loadingReducer.loading);
  if (loading) return <Loader />;
  return (
    <div>
      {" "}
      <Table
        title={() => " orders"}
        columns={tableColumns}
        dataSource={driverOrders}
      />
    </div>
  );
};

export default AssignedOrdersList;
