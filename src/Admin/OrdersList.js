import { Button, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getShopOrders,
  getStoreDrivers,
  setOrderToModify,
} from "../redux/actions";
import AssignDriverModal from "./AssignDriverModal";

const OrdersList = () => {
  const { storeId } = useParams();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.shopsReducer.orders);
  const assginedOrders = useSelector(
    (state) => state.shopsReducer.assginedOrders
  );
  const [driverModalVisible, setDriverModalVisible] = useState(false);
  const orderToModify = useSelector(
    (state) => state.shopsReducer.orderToModify
  );
  useEffect(() => {
    dispatch(getShopOrders(storeId, true));
    dispatch(getShopOrders(storeId, false));
    dispatch(getStoreDrivers(storeId));
  }, [storeId]);

  const handleAssignDriver = (record) => {
    dispatch(setOrderToModify(record));
    setDriverModalVisible(true);
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
      title: "Driver",
      key: "driver",
      dataIndex: "driver",
      sorter: true,
      render: (text, record) => (
        <Space size="middle">
          {record.driver ? record.driver.employee_id : "None"}
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "id",
      sorter: true,
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleAssignDriver(record.id)}>
            {record.driver ? "update driver" : "assign driver"}
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      {" "}
      <Table
        title={() => "unassigned orders"}
        columns={tableColumns}
        dataSource={orders}
      />
      <Table
        style={{ marginTop: 20 }}
        title={() => "assigned orders"}
        columns={tableColumns}
        dataSource={assginedOrders}
      />
      {orderToModify && (
        <AssignDriverModal
          isModalVisible={driverModalVisible}
          setIsModalVisible={setDriverModalVisible}
        />
      )}
    </div>
  );
};

export default OrdersList;
