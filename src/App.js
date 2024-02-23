import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './components/About';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';

function App() {
  
const [mode,setmode] = useState('white');
const [alert,setalert] = useState(null);

const showalert = (msg,type) =>{
  setalert({
    msg: msg,
    type: type
  })
  setTimeout(()=>{
   setalert(null);
  },1300);
}

const changemode = () => {

   if(mode === 'white'){
    setmode('black');
    document.body.style.backgroundColor = '	#202020 ';
    document.body.style.Color = '	#202020 ';
    showalert("dark mode","success");
  }
  else{
    setmode('white');
    document.body.style.backgroundColor = 'white';
    showalert("Light mode","success");
   }
}
  return (
   <>
    <Navbar title="Patel's website"  mode1={mode} toggal={changemode} />
    <Alert alert={alert}/>
    <Textbox mode = {mode} showalert={showalert}/>
    
   
   </>
  );
}

export default App;
