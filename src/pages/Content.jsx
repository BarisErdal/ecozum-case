import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import {
  Layout,
  List,
  Button,
  Col,
  Row,
  Avatar,
  Image,
  Space,
  Typography,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getPackages } from "../service/packages";
import CustomPackage from "../components/CustomPackage";
import { useDispatch, useSelector } from "react-redux";
import { pkgActions } from "../reducers/packages";
import { useNavigate } from "react-router-dom";

const Content = () => {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const pacs = useSelector((state) => state.packages.packageArr);
  const nameSurname = useSelector((state) => state.auth.name);
  const totalAmount = useSelector((state) => state.packages.amount);

  useEffect(() => {
    getPackages().then((resp) => {
      dispatch(pkgActions.setPackageArr(resp.data));
     
    });
  }, []);

  const { Header, Content } = Layout;

  return (
    <div>
      <Layout>
        <Header>
          <Space>
            <Avatar icon={<UserOutlined />} />
            <Typography.Title level={5}>{nameSurname}</Typography.Title>
          </Space>
        </Header>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 2,
            xxl: 2,
          }}
          dataSource={pacs}
          renderItem={(pac) => (
            <CustomPackage
              id={pac.id}
              name={pac.name}
              imagePath={pac.imagePath}
              details={pac.details}
              tags={pac.tags}
              amount={pac.amount}
              currency={pac.currency}
            />
          )}
        />
        <br />
   

        <Row>
          <Col span={16}>
            <h4>{`total fiyat: ${totalAmount}`}</h4>
          </Col>
          <Col span={8}>
            <Button
              onClick={() => {
                navigate("/payment");
              }}
              type="primary"
              block
            >
              Devam et
            </Button>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Content;
