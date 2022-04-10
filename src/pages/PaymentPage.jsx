import { Row, Col } from "antd";
import React from "react";
import Payment from "../components/Payment";
import ListPackages from "../components/ListPackages";
import { Layout } from 'antd';


const selectedPkgArr = [
  { name: "paket1", amount: 30, currency: "try" },
  { name: "paket2", amount: 60, currency: "try" },
  { name: "paket3", amount: 70, currency: "try" },
];
const PaymentPage = () => {
  const { Header, Footer, Content } = Layout;

  const handleClick = () => {
    console.log("ödeme butona tıklandı");
    //endpointe istek atılacak
  };
  return (
<div>
   
        <Layout>
      <Header> <div style={{color:"white"}}>ecozum </div></Header>
      <Content> <Row gutter={10}>
          <Col span={16}>
             <Payment /> 
          </Col>
          <Col span={8}>
             <ListPackages
              title="Sepetteki Paketler"
              onClick={handleClick}
              btnName="Ödeme Yap"
              data={selectedPkgArr}
            />
          </Col>
        </Row></Content>
      <Footer>Footer</Footer>
    </Layout>
     
       
        </div>
    
  );
};

export default PaymentPage;
