import { Button, Space, Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ShopsList = () => {
  const shops = useSelector((state) => state.shopsReducer.shops);
  const user = useSelector((state) => state.authReducer.user);

  const navigate = useNavigate();
  const tableColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "id",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() =>
              navigate(
                user.user_type == "merchant"
                  ? `/stores/${record.id}/`
                  : `/orders/${record.id}/`
              )
            }
          >
            view store orders
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={tableColumns} dataSource={shops} />
    </div>
  );
};

export default ShopsList;
