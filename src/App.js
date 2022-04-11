
import './App.css';
import 'antd/dist/antd.css';
import { Button, Divider } from 'antd';
import Login from './components/Login';
import Content from './pages/Content';
import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom';
import PaymentPage from "./pages/PaymentPage"
import CustomResult from './components/CustomResult';



const App=()=> {
 


  
  return (
  
    <BrowserRouter>


<Routes>
<Route path="/" element={<Login/>}/>
<Route path="/content" element={<Content />}/>
<Route path="/payment" element={<PaymentPage />} />



</Routes>

  
   </BrowserRouter>
   
  

  )
}

export default App;
