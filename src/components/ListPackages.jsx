import { Button, List, Row, Typography } from 'antd'
import React from 'react'

const ListPackages = ({title, onClick,btnName,data}) => {
  
    const { Text } = Typography;
  
  
    return (
    <div>
<h4>{title}</h4>

<List

dataSource={data}
renderItem={(pkg)=> <List.Item>

<Text>{`${pkg.name}: ${pkg.amount}${pkg.currency}`}</Text>
</List.Item>}
/>


<Button onClick={onClick} type="primary">{btnName}</Button>
    </div>
  )
}

export default ListPackages