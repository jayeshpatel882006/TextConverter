import React , {useState} from 'react'

export default function Textbox(props) {

const [text,newtext] = useState("");

const handalon = (ave) => {
 newtext(ave.target.value);
}

const handalup = () => {
    // let data = text.to.uppercase;
    newtext(text.toUpperCase());
    props.showalert("Converted to uppercase","success")
  }

const handallo = () => {
    // let data = text.to.uppercase;
    newtext(text.toLowerCase());
    props.showalert("Converted to lower case","success")
}

const clear = () => {
    // let data = ("");
    newtext("");
    props.showalert("text cleard","success")
  }
  
  const copy = () => {
    let text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
     props.showalert("Text copied","success")
  }



  return (
    <>

 <div className={`container my-3  text-${props.mode==='white' ? 'black' : 'white'}`}>
  <h1 >Enter text below</h1>
  <label htmlFor="box" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={handalon} id="box" rows="6"></textarea>
<div className="container  my-3">

  <button className='btn btn-btn-pbtn btn-primary mx-3 my-3' onClick={handalup}>Convert to uppercase</button>
  <button className='btn btn-btn-pbtn btn-primary mx-3 my-3' onClick={handallo}>Convert to Lowercase</button>
  {/* <button className='btn btn-btn-pbtn btn-primary mx-3' onClick={uplo}>Convert to Capitalize text</button> */}
  <button className='btn btn-btn-pbtn btn-primary mx-3 my-3' onClick={copy}>Copy text</button>
  <button className='btn btn-btn-pbtn btn-primary mx-3 my-3' onClick={clear}>Clear</button>
</div>

<div className="container">
    <h2>Text Summary</h2>
    <p> {text.split(' ').length} words and {text.length} charecters in your sentence</p>
    <h3>perview</h3>
    <p>{text}</p>
</div>
</div>
</>
  )
}
