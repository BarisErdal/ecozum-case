import { Button, Card, Divider, List, Row, Typography } from 'antd'
import React from 'react'

const ListPackages = ({title,data,totalAmount}) => {
  
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
<Divider/>
<Text>{`Toplam: ${totalAmount}`}</Text>

    </div>
  )
}

export default ListPackages