import './App.css';
import LogIn from './component/LogIn';
import DashBoard from './component/DashBoard';
import { useState } from 'react';

function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false)

  const changeStatus = ()=> setIsLoggedIn(!isLoggedIn)
  
   return (
    <div className="App">
     {isLoggedIn? <DashBoard/> : <LogIn swap= {changeStatus}/>}
    </div>
  );
}

export default App;
