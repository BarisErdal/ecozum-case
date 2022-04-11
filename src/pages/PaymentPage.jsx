import { Row, Col, Button, Divider, Result } from "antd";
import React, { useEffect, useState } from "react";
import Payment from "../components/Payment";
import ListPackages from "../components/ListPackages";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import { getAgreement, postPayment } from "../service/payment";

const PaymentPage = () => {
  const { Header, Content } = Layout;


  const totalAmount = useSelector((state) => state.packages.amount);
  const selectedIds = useSelector((state) => state.packages.selectedPkgArr);
  const allPackages = useSelector((state) => state.packages.packageArr);

  const [allInfos, setAllInfos] = useState({});
  const [agreement, setAgreement] = useState();

  const [requestSent, setRequestSent] = useState(false);
  const [resultInfo, setResultInfo] = useState();

  useEffect(() => {
    getAgreement().then((resp) => {
      setAgreement(resp.data.content);
    });
  }, []);



  const selectedPkgArr= allPackages.filter(pac=> selectedIds.includes(pac.id))


  const handleClick = () => {
    postPayment(allInfos).then((resp) => {
      setRequestSent(true);
      if (resp.status === 200) {
        setResultInfo({ status: "success", title: "Başarıyla Tamalandı" });
      }
    });
  };

  const handlePayInfo = (values) => {
    const allValues = {
      ...values,
      packageIds: selectedIds,
      totalAmount: totalAmount,
    };

    setAllInfos(allValues);
  };

  return (
    <div>
      {requestSent ? (
        <Result status={resultInfo.status} title={resultInfo.title} />
      ) : (
        <Layout>
          <Header>
            <div style={{ color: "white" }}>ecozum </div>
          </Header>
          <Content>
            <Row gutter={10}>
              <Col span={16}>
                <Payment onPaymentInfo={handlePayInfo} />
              </Col>
              <Col span={8}>
                <ListPackages
                  title="Sepetteki Paketler"
                  onClick={handleClick}
                  btnName="Ödeme Yap"
                  data={selectedPkgArr}
                  totalAmount={totalAmount}
                />
                <Button onClick={handleClick} type="primary">
                  Ödeme Yap
                </Button>
              </Col>
            </Row>
          </Content>
          <Divider />
          <div dangerouslySetInnerHTML={agreement} />;
        </Layout>
      )}
    </div>
  );
};

export default PaymentPage;
