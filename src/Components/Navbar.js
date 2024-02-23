import React from 'react'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode1} bg-${props.mode1}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode1==='white' ? 'black' : 'white'} `} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode1==='white' ? 'black' : 'white'} `} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode1==='white' ? 'black' : 'white'} `} href="/">Link</a>
        </li>
      </ul>
      {/* text-${props.mode1==='white' ? 'black' : 'white'}`} */}
      <div className={`form-check form-switch  text-${props.mode1==='white' ? 'black' : 'white'}`}>
  <input className="form-check-input" onClick={props.toggal} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Mode</label>
</div>

    </div>
  </div>
</nav>
    </>
  )
}
