import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [ show, showDiv ] = useState([]);
  const [ hide, hideDiv ] = useState([]);
  const [ remove, removeDiv ] = useState([]);


  return (
    <div className="Main"
      onMouseOver={()=>showDiv(true)}
      onMouseOut={() => showDiv(false)}
      onClick={() => hideDiv(!hide)}
      onKeyPress={(event) => { if (event.key === 13) { removeDiv(remove) }}}
      style={{
        color: `${show ? '#5AA897' : '#F8A488'}`,
        fontFamily: `${show ?  'Monospace' : 'Sans-serif'}`,
        backgroundColor: `${show ? '#F5F5F5' : '#F0ECE3'}`,
        width:  '60%',
        height: `${hide ? '30%' : '130px'}`,
        marginTop: '20px',
        padding: '30px',
        borderRadius: '5px',
        cursor: 'pointer',
        display: `${remove ? 'block' : 'none' }`

      }}>
      {hide && <h1 style={{ opacity: `${hide ? '1' : '0'}` }}>Валиуллина Гульназ     Муниповна</h1>}
      {hide && <h2 style={{ opacity: `${hide ? '1' : '0'}` }}>Начинающий web-программист / Junior Frontend Developer</h2>}
    </div>
  )
};

export default Main;
