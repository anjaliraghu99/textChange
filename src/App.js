import logo from './logo.svg';
import './App.css'
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import { useState } from 'react';
import Alert from './component/Alert';
import{
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter

} from "react-router-dom";



function App() {
  const[mode,setmode]=useState('light');
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(()=>{
      setAlert(null);

    },2000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("dark mode enabled","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode enabled","success")

      
    }
  }
  return (
    <>
    
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <div className="container" >
    
      <Routes>
        
      <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text" mode={mode}/>}/>
        <Route path="/about" element={<About/>}/>
        

          
        </Routes>
        </div>
      </Router>
  
    
    
    </>
  
    
  
  );
}

export default App;
  
    