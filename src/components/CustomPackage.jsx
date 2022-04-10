import React, { useState } from "react";
import "antd/dist/antd.css";
import { List, Divider, Image, Row, Col, Typography, Tag, Card } from "antd";
import { useDispatch} from "react-redux";
import { pkgActions } from "../reducers/packages";

const CustomPackage = ({
  imagePath,
  name,
  id,
  details,
  tags,
  amount,
  currency,

}) => {
  const { Title } = Typography;

  const [isSelected, setIsSelected] = useState(false);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    // e.stopPropagation();
    let val = e.currentTarget.getAttribute("value")
    let amount = e.currentTarget.getAttribute("amount")
 

if (isSelected) {
  dispatch(pkgActions.discardPkg(val));
  dispatch(pkgActions.discardPrice(amount));
  setIsSelected(false)
}
if (!isSelected) {
  dispatch(pkgActions.addToSelected(val));
         dispatch(pkgActions.addPrice(amount));
         setIsSelected(true)

}

     
   };
  
  return (
    <List.Item
      key={id}
      id={id}
      name={name}
      value={id}
      amount={amount}
      onClick={handleClick}
      style={{
        backgroundColor: "lemonchiffon",
        borderStyle: "solid",
        borderColor: isSelected ? "green" : "gray",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <Row>
        <Col span={10}>
          <Image height="100%" src={imagePath} />
        </Col>

        <Col span={14}>
          <Row>
            <Col span={15}>
              <Title level={3}>{name}</Title>
            </Col>

            <Col span={9}>
              <Title
                level={3}
                style={{ marginRight: "5px", textAlign: "end" }}
              >{`${amount}${currency}`}</Title>
            </Col>
          </Row>

          <List
            grid={{ gutter: 0.2, column: 3 }}
            dataSource={details}
            renderItem={(list) => <List.Item>{list}</List.Item>}
          />

          <Divider />

          <List
            dataSource={tags}
            renderItem={(tag) => <Tag color="orange">{tag}</Tag>}
          />
        </Col>
      </Row>
    </List.Item>
  );
};

export default CustomPackage;
