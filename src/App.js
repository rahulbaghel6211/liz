// index.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MarketResearch from './component/MarketResearch';
import Planning from './component/Planning';
import Design from './component/Design';
import Manufacturing from './component/Manufacturing';
import Sales from './component/Sales';
import './App.css';

function App() {
  
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10%' }}>
        <div>
          <div style={{ marginTop: 10, marginBottom:20, marginLeft: 20,width:150 ,backgroundColor: '#38509b',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 15,
              paddingBottom: 15,
              textAlign:'center'
              }} >
            <Link style={{
              textDecorationLine: 'none',
              color:'white'
            }} to="/">Market Research</Link>
          </div>
          <div style={{ marginTop: 60, marginBottom: 20, marginLeft: 20,width:150 , backgroundColor: '#82b3e8',
            paddingRight:40,
            paddingLeft: 40,
            paddingTop: 15,
            paddingBottom: 15,
              textAlign:'center'
              }}  >
            <Link style={{ textDecorationLine: 'none', 
               color:'white',
                }} to="/Planning">Planning</Link>
          </div>
          <div style={{ marginTop: 60, marginBottom: 20, marginLeft: 20,width:150 ,
            backgroundColor: '#e96343', 
             paddingRight:40,
              paddingLeft: 40,
              paddingTop: 15,
              paddingBottom:15,
              textAlign:'center'
              }} >
            <Link style={{ textDecorationLine: 'none',
             color:'white'
              }} to="/Design">Design</Link>
          </div>
          <div style={{ marginTop: 60, marginBottom: 20, marginLeft: 20,width:150 ,paddingRight:40,
              paddingLeft: 40,
              paddingTop: 15,
              paddingBottom: 15,
              textAlign:'center',backgroundColor: '#e8919d', 
              }}  >
            <Link style={{ textDecorationLine: 'none', 
            color:'white'
             }} to="/Manufacturing">Manufacturing</Link>
          </div>
          <div style={{ marginTop: 60, marginBottom: 20, marginLeft: 20,width:150  , backgroundColor: '#a684eb',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 15,
              paddingBottom: 15,
              textAlign:'center'
              }} >
            <Link style={{ textDecorationLine: 'none', 
            color:'white'
             }} to="/Sales">Sales/Marketing</Link>
          </div>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<MarketResearch />} />
            <Route path="/Planning" element={<Planning />} />
            <Route path="/Design" element={<Design />} />
            <Route path="/Manufacturing" element={<Manufacturing />} />
            <Route path="/Sales" element={<Sales />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
