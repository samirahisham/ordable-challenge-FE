import { Button, Card, Col, Modal, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignDriver } from "../redux/actions";

const AssignDriverModal = ({ isModalVisible, setIsModalVisible }) => {
  const drivers = useSelector((state) => state.shopsReducer.drivers);
  const orderToModify = useSelector(
    (state) => state.shopsReducer.orderToModify
  );
  const dispatch = useDispatch();
  const handleAssignDriver = (driver) => {
    dispatch(assignDriver(orderToModify, driver));
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  const renderDriversCards = drivers.map((driver, idx) => {
    return (
      <Card key={idx}>
        <Row justify="center">
          <Col span={12}>{driver.employee_id}</Col>
          <Col span={12}>
            <Button onClick={() => handleAssignDriver(driver.employee_id)}>
              Asssign to order
            </Button>
          </Col>
        </Row>
      </Card>
    );
  });
  return (
    <Modal
      title="Drivers List"
      visible={isModalVisible}
      onCancel={handleCloseModal}
      //   destroyOnClose
      footer={null}
    >
      {renderDriversCards}
    </Modal>
  );
};

export default AssignDriverModal;
