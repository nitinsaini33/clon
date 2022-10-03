
import './App.css';
import Home from './Pages/Home'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Postside from './Components/Postside/Postside';
import Myprofile from './Pages/Myprofile';
import Singup from './Components/Singup/Singup';
import Login from './Components/Singup/Login';
import Youfill from './Components/YourInfo/youfill/Youfill';
import InstaNav from './Components/InstaNav/InstaNav';

const App=()=> {


  const user="login"

  return (
    <>

<BrowserRouter>

<Routes>
<Route path="/" element={user==="login"?<Home/>:<Singup/>}/>
<Route path='/InstaNav' element={<InstaNav/>}/>
<Route path="/Youfill" element={<Youfill/>}/>
<Route path="/myprofile" element={<Myprofile/>}/>
<Route path="/Postside" element={<Postside/>}/>
<Route path="/signup" element={<Singup />}/>
<Route path="/login" element={<Login />}/>


</Routes>
</BrowserRouter>
     
    </>
  );
}

export default App;
