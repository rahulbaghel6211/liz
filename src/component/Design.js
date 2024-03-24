// // components/About.js
// import React from 'react';

// function Design() {
//   return <h2 >Design</h2>;
// }

// export default Design;
// components/Home.js
import React,{useState} from 'react';
import { GoTriangleRight } from "react-icons/go";
import './MarketResearch.css'

function Design() {
  const [showExternalData, setShowExternalData] = useState(false);
  const [showInternalData, setShowInternalData] = useState(false);
  const [showb2cData,setshowb2cData]=useState(false)
  const [showdata,setshowdata]=useState(false)

  const toggleB2BInternalData=()=>{
       setshowdata(!showdata)
       setshowb2cData(false)
  }

  const toggleB2CData=()=>{
      setshowdata(false)
      setshowb2cData(!showb2cData)
  }

  const toggleExternalData = () => {
    setShowExternalData(!showExternalData);
    setShowInternalData(false); // Close internal data if open
  };

  const toggleInternalData = () => {
    setShowInternalData(!showInternalData);
    setShowExternalData(false); // Close external data if open
  };
 
  return(
    <>
    <div style={{display:'flex',flexDirection:'row'}}>
      <div style={{borderWidth:1,borderColor:'red',marginTop:9,fontWeight:'bold'}}>_________</div>
      <div style={{marginTop:18,marginLeft:-8}}>
      <GoTriangleRight />
      </div>
      <div style={{marginLeft:-10,display:'flex',flexDirection:'row'}}>
      <svg style={{marginTop:-20}} width="80" height="65">
      <line x1="-110" y1="120" x2="40" y2="20" stroke="black" strokeWidth="2" />
    </svg>
      </div>
      <div>
     <svg style={{marginLeft:-100,marginTop:4}}  width="65" height="65">
      <line x1="20" y1="20" x2="220" y2="120" stroke="black" strokeWidth="2" />
    </svg>
      </div>
      <div>
        <div style={{display:'flex',flexDirection:'row',marginLeft:-40,marginTop:-18}}>
        <div>_________</div>
        <div style={{marginTop:10,marginLeft:-9}}>
        <GoTriangleRight />
        </div>
      <div style={{width:150 ,backgroundColor: '#38509b',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign:'center',
              color:'white',
              cursor: 'pointer' 
              }}
              onClick={toggleExternalData}
              >
       External
      </div>
        </div>
       <div style={{display:'flex',flexDirection:'row',marginLeft:-36,marginTop:8}}>
       <div>________</div>
       <div style={{marginTop:10,marginLeft:-5}}>
       <GoTriangleRight />
       </div>
     
      <div style={{ marginTop: 10, marginBottom: 20,width:150 ,backgroundColor: '#38509b',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign:'center',
              color:'white',
              cursor: 'pointer' 
              }}
              onClick={toggleInternalData}
              >
     Internal
      </div>   
       </div>
    
      </div>
      {showInternalData && (
          <div style={{display:'flex',flexDirection:'row',marginTop:30}}>
          <div style={{borderWidth:1,borderColor:'red',marginTop:9,fontWeight:'bold'}}>_________</div>
          <div style={{marginTop:18,marginLeft:-8}}>
          <GoTriangleRight />
          </div>
          <div style={{marginLeft:-10,display:'flex',flexDirection:'row'}}>
          <svg style={{marginTop:-20}} width="80" height="65">
          <line x1="-110" y1="120" x2="40" y2="20" stroke="black" strokeWidth="2" />
        </svg>
          </div>
          <div>

         <svg style={{marginLeft:-100,marginTop:4}}  width="65" height="65">
          <line x1="20" y1="20" x2="220" y2="120" stroke="black" strokeWidth="2" />
        </svg>
          </div>
          <div>
            <div style={{display:'flex',flexDirection:'row',marginLeft:-40,marginTop:-18}}>
            <div>_________</div>
            <div style={{marginTop:10,marginLeft:-9}}>
            <GoTriangleRight />
            </div>
          <div style={{width:100 ,backgroundColor: '#38509b',paddingRight:40,
                  paddingLeft: 40,
                  paddingTop: 10,
                  paddingBottom: 10,
                  textAlign:'center',
                  color:'white',
                  cursor: 'pointer' 
                  }}
                  onClick={toggleExternalData}
                  >
           B2E
          </div>
            </div>
           <div style={{display:'flex',flexDirection:'row',marginLeft:-36,marginTop:8}}>
           <div>________</div>
           <div style={{marginTop:10,marginLeft:-5}}>
           <GoTriangleRight />
           </div>
         
          <div style={{ marginTop: 10, marginBottom: 20,width:100 ,backgroundColor: '#38509b',paddingRight:40,
                  paddingLeft: 40,
                  paddingTop: 10,
                  paddingBottom: 10,
                  textAlign:'center',
                  color:'white',
                  cursor: 'pointer' 
                  }}
                  onClick={toggleInternalData}
                  >
         B2E
          </div>   
           </div>
        
          </div>
          
        </div>
    
        )}
          {showExternalData && (
           <div style={{display:'flex',flexDirection:'row',marginTop:-25}}>
           <div style={{borderWidth:1,borderColor:'red',marginTop:9,fontWeight:'bold'}}>_________</div>
           <div style={{marginTop:18,marginLeft:-8}}>
           <GoTriangleRight />
           </div>
           <div style={{marginLeft:-10,display:'flex',flexDirection:'row'}}>
           <svg style={{marginTop:-20}} width="80" height="65">
           <line x1="-110" y1="120" x2="40" y2="20" stroke="black" strokeWidth="2" />
         </svg>
           </div>
           <div>
          <svg style={{marginLeft:-100,marginTop:4}}  width="65" height="65">
           <line x1="20" y1="20" x2="220" y2="120" stroke="black" strokeWidth="2" />
         </svg>
           </div>
           <div>
             <div style={{display:'flex',flexDirection:'row',marginLeft:-40,marginTop:-18}}>
             <div>_________</div>
             <div style={{marginTop:10,marginLeft:-9}}>
             <GoTriangleRight />
             </div>
           <div style={{width:100 ,backgroundColor: '#38509b',paddingRight:40,
                   paddingLeft: 40,
                   paddingTop: 10,
                   paddingBottom: 10,
                   textAlign:'center',
                   color:'white',
                   cursor: 'pointer' 
                   }}
                   onClick={toggleB2CData}
                   >
            B2C
           </div>
             </div>
            <div style={{display:'flex',flexDirection:'row',marginLeft:-36,marginTop:8}}>
            <div>________</div>
            <div style={{marginTop:10,marginLeft:-5}}>
            <GoTriangleRight />
            </div>
          
           <div style={{ marginTop: 10, marginBottom: 20,width:100 ,backgroundColor: '#38509b',paddingRight:40,
                   paddingLeft: 40,
                   paddingTop: 10,
                   paddingBottom: 10,
                   textAlign:'center',
                   color:'white',
                   cursor: 'pointer' 
                   }}
                   onClick={toggleB2BInternalData}
                   >
          B2C
           </div>   
            </div>
         
           </div>
           
         </div>
        )}
        {showdata && (
          <div style={{display:'flex',flexDirection:'row',marginTop:30}}>
          <div style={{borderWidth:1,borderColor:'red',marginTop:9,fontWeight:'bold'}}>_________</div>
          <div style={{marginTop:18,marginLeft:-8}}>
          <GoTriangleRight />
          </div>
          <div style={{marginLeft:-10,display:'flex',flexDirection:'row'}}>
          <svg style={{marginTop:-20}} width="80" height="65">
          <line x1="-110" y1="120" x2="40" y2="20" stroke="black" strokeWidth="2" />
        </svg>
          </div>
          <div>
            
         <svg style={{marginLeft:-100,marginTop:4}}  width="65" height="65">
          <line x1="20" y1="20" x2="220" y2="120" stroke="black" strokeWidth="2" />
        </svg>
          </div>
          <div>
            <div style={{display:'flex',flexDirection:'row',marginLeft:-40,marginTop:-18}}>
            <div>_________</div>
            <div style={{marginTop:10,marginLeft:-9}}>
            <GoTriangleRight />
            </div>
          <div style={{width:100 ,backgroundColor: '#38509b',paddingRight:40,
                  paddingLeft: 40,
                  paddingTop: 10,
                  paddingBottom: 10,
                  textAlign:'center',
                  color:'white',
                  cursor: 'pointer' 
                  }}
                  onClick={toggleExternalData}
                  >
           B2E
          </div>
            </div>
           <div style={{display:'flex',flexDirection:'row',marginLeft:-36,marginTop:8}}>
           <div>________</div>
           <div style={{marginTop:10,marginLeft:-5}}>
           <GoTriangleRight />
           </div>
         
          <div style={{ marginTop: 10, marginBottom: 20,width:100 ,backgroundColor: '#38509b',paddingRight:40,
                  paddingLeft: 40,
                  paddingTop: 10,
                  paddingBottom: 10,
                  textAlign:'center',
                  color:'white',
                  cursor: 'pointer' 
                  }}
                  onClick={toggleInternalData}
                  >
         B2E
          </div>   
           </div>
        
          </div>
          
        </div>
    
        )}
         {showb2cData && (
           <div style={{display:'flex',flexDirection:'row',marginTop:-50}}>
           <div style={{borderWidth:1,borderColor:'red',marginTop:9,fontWeight:'bold'}}>_________</div>
           <div style={{marginTop:18,marginLeft:-8}}>
           <GoTriangleRight />
           </div>
           <div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{ width: '150px', height: '2px', transform: 'rotate(-40deg)',backgroundColor:'black' ,marginTop:-22,marginLeft:-25}}></div>
            <div style={{ width: '80px', height: '2px', transform: 'rotate(-20deg)',backgroundColor:'black' ,marginTop:10,marginLeft:-130}}></div>
              
            <div style={{marginTop:-88,marginLeft:32}}>_____________</div>
            <div style={{marginTop:-78,marginLeft:-10}}><GoTriangleRight /></div>
            <div style={{marginTop:-20,marginLeft:-145}}>_____________</div>
            <div style={{marginTop:-10,marginLeft:-10}}><GoTriangleRight /></div>
            <div style={{marginTop:-92,marginLeft:35}}>
              <div style={{width:150 ,backgroundColor: '#38509b',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign:'center',
              color:'white',
              marginBottom:15,
              cursor:'pointer'
              }}
              onMouseEnter={() => {document.getElementById('healthText').style.display = 'block';}}
              onMouseLeave={() => {document.getElementById('healthText').style.display = 'none';}}
              >
       Online 
      </div>
      <div style={{width:150 ,backgroundColor: '#38509b',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign:'center',
              color:'white',
              marginBottom:15
              }}
              onMouseEnter={() => {document.getElementById('healthText').style.display = 'block';}}
              onMouseLeave={() => {document.getElementById('healthText').style.display = 'none';}}
              >
       Interview
      </div>
                </div>
          
              </div>
          
           <div style={{ width: '150px', height: '2px', transform: 'rotate(35deg)',backgroundColor:'black' ,marginTop:55,marginLeft:-20}}></div>
           <div style={{ width: '80px', height: '2px', transform: 'rotate(20deg)',backgroundColor:'black' ,marginTop:-32,marginLeft:-7}}></div>
           <div style={{marginTop:54,marginLeft:113}}>_____________</div>
            <div style={{marginLeft:210,marginTop:-8}}>
            <GoTriangleRight />
              </div>
           <div style={{marginTop:-89,marginLeft:70}}>_____________</div>
            <div style={{marginLeft:168,marginTop:-8}}>
            <GoTriangleRight />
              </div>
              <div style={{marginLeft:220,marginTop:-30}}>
              <div style={{width:150 ,backgroundColor: '#38509b',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign:'center',
              color:'white',
              marginBottom:15
              }}
              onMouseEnter={() => {document.getElementById('healthText').style.display = 'block';}}
              onMouseLeave={() => {document.getElementById('healthText').style.display = 'none';}}
              >
       Public Data
</div>
<div style={{width: 150,
             backgroundColor: '#38509b',
             paddingRight: 40,
             paddingLeft: 40,
             paddingTop: 10,
             paddingBottom: 10,
             textAlign: 'center',
             color: 'white',
             marginBottom: 15,
             position: 'relative'}}
     onMouseEnter={() => {document.getElementById('healthText').style.display = 'block';}}
     onMouseLeave={() => {document.getElementById('healthText').style.display = 'none';}}>
  Health
 
</div>

                </div>
           
           </div>
         </div>

        )}
 <div id="healthText" style={{display: 'none',
                                backgroundColor: '#efebe5',
                                color: 'white',
                                padding: 10,
                                // position: 'absolute',
                                bottom: -30,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width:210,
                                textAlign: 'center',
                                marginLeft:120,
                                height:220,
                                marginTop:-150
                                }}>
   <div style={{ width:180,height:30,backgroundColor:'#00cadc',marginTop:10}}></div>
   <div style={{ width:170,height:30,backgroundColor:'#00cadc',marginTop:10}}></div>
   <div style={{ width:190,height:30,backgroundColor:'#00cadc',marginTop:10}}></div>
   <div>
    <div>Total Reviews</div>
    <div>Positive Reviews</div>
    <div>Negative Reviews</div>
    <div>Comments</div>
   </div>
  </div>
    </div>

    <div style={{display:'flex',flexDirection:'row',marginTop:20}}>
      <div style={{borderWidth:1,borderColor:'red',marginTop:9,fontWeight:'bold'}}>_________</div>
      <div style={{marginTop:18,marginLeft:-8}}>
      <GoTriangleRight />
      </div>
      <div style={{marginLeft:-10,display:'flex',flexDirection:'row'}}>
      <svg style={{marginTop:-20}} width="80" height="65">
      <line x1="-110" y1="120" x2="40" y2="20" stroke="black" strokeWidth="2" />
    </svg>
      </div>
      <div>
     <svg style={{marginLeft:-100,marginTop:4}}  width="65" height="65">
      <line x1="20" y1="20" x2="220" y2="120" stroke="black" strokeWidth="2" />
    </svg>
      </div>
      <div>
        <div style={{display:'flex',flexDirection:'row',marginLeft:-40,marginTop:-18}}>
        <div>_________</div>
        <div style={{marginTop:10,marginLeft:-9}}>
        <GoTriangleRight />
        </div>
      <div style={{width:150 ,backgroundColor: '#82b3e8',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign:'center',
              color:'white'
              }}>
       PRD
      </div>
        </div>
       <div style={{display:'flex',flexDirection:'row',marginLeft:-36,marginTop:8}}>
       <div>________</div>
       <div style={{marginTop:10,marginLeft:-5}}>
       <GoTriangleRight />
       </div>
     
      <div style={{ marginTop: 10, marginBottom: 20,width:150 ,backgroundColor: '#82b3e8',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign:'center',
              color:'white'
              }}>
     Specs
      </div>   
       </div>
    
      </div>
    </div>

    <div style={{display:'flex',flexDirection:'row',marginTop:16}}>
      <div style={{borderWidth:1,borderColor:'red',marginTop:9,fontWeight:'bold'}}>_________</div>
      <div style={{marginTop:18,marginLeft:-8}}>
      <GoTriangleRight />
      </div>
      <div style={{marginLeft:-10,display:'flex',flexDirection:'row'}}>
      <svg style={{marginTop:-20}} width="80" height="65">
      <line x1="-110" y1="120" x2="40" y2="20" stroke="black" strokeWidth="2" />
    </svg>
      </div>
      <div>
     <svg style={{marginLeft:-100,marginTop:4}}  width="65" height="65">
      <line x1="20" y1="20" x2="220" y2="120" stroke="black" strokeWidth="2" />
    </svg>
      </div>
      <div>
        <div style={{display:'flex',flexDirection:'row',marginLeft:-40,marginTop:-18}}>
        <div>_________</div>
        <div style={{marginTop:10,marginLeft:-9}}>
        <GoTriangleRight />
        </div>
      <div style={{width:150 ,backgroundColor: '#e96343',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign:'center',
              color:'white'
              }}>
       Hardware
      </div>
        </div>
       <div style={{display:'flex',flexDirection:'row',marginLeft:-36,marginTop:8}}>
       <div>________</div>
       <div style={{marginTop:10,marginLeft:-5}}>
       <GoTriangleRight />
       </div>
     
      <div style={{ marginTop: 10, marginBottom: 20,width:150 ,backgroundColor: '#e96343',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign:'center',
              color:'white'
              }}>
     Software
      </div>   
       </div>
    
      </div>
    </div>
    <div style={{display:'flex',flexDirection:'row',marginTop:10}}>
      <div style={{borderWidth:1,borderColor:'red',marginTop:9,fontWeight:'bold'}}>_________</div>
      <div style={{marginTop:18,marginLeft:-8}}>
      <GoTriangleRight />
      </div>
      <div style={{marginLeft:-10,display:'flex',flexDirection:'row'}}>
      <svg style={{marginTop:-20}} width="80" height="65">
      <line x1="-110" y1="120" x2="40" y2="20" stroke="black" strokeWidth="2" />
    </svg>
      </div>
      <div>
     <svg style={{marginLeft:-100,marginTop:4}}  width="65" height="65">
      <line x1="20" y1="20" x2="220" y2="120" stroke="black" strokeWidth="2" />
    </svg>
      </div>
      <div>
        <div style={{display:'flex',flexDirection:'row',marginLeft:-40,marginTop:-18}}>
        <div>_________</div>
        <div style={{marginTop:10,marginLeft:-9}}>
        <GoTriangleRight />
        </div>
      <div style={{width:150 ,backgroundColor: '#e8919d',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign:'center',
              color:'white'
              }}>
       Material
      </div>
        </div>
       <div style={{display:'flex',flexDirection:'row',marginLeft:-36,marginTop:8}}>
       <div>________</div>
       <div style={{marginTop:10,marginLeft:-5}}>
       <GoTriangleRight />
       </div>
     
      <div style={{ marginTop: 10, marginBottom: 20,width:150 ,backgroundColor: '#e8919d',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign:'center',
              color:'white'
              }}>
     Production
      </div>   
       </div>
    
      </div>
    </div>
    <div style={{display:'flex',flexDirection:'row',marginTop:12}}>
      <div style={{borderWidth:1,borderColor:'red',marginTop:9,fontWeight:'bold'}}>_________</div>
      <div style={{marginTop:18,marginLeft:-8}}>
      <GoTriangleRight />
      </div>
      <div style={{marginLeft:-10,display:'flex',flexDirection:'row'}}>
      <svg style={{marginTop:-20}} width="80" height="65">
      <line x1="-110" y1="120" x2="40" y2="20" stroke="black" strokeWidth="2" />
    </svg>
      </div>
      <div>
     <svg style={{marginLeft:-100,marginTop:4}}  width="65" height="65">
      <line x1="20" y1="20" x2="220" y2="120" stroke="black" strokeWidth="2" />
    </svg>
      </div>
      <div>
        <div style={{display:'flex',flexDirection:'row',marginLeft:-40,marginTop:-18}}>
        <div>_________</div>
        <div style={{marginTop:10,marginLeft:-9}}>
        <GoTriangleRight />
        </div>
      <div style={{width:150 ,backgroundColor: '#a684eb',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign:'center',
              color:'white'
              }}>
       Online 
      </div>
        </div>
       <div style={{display:'flex',flexDirection:'row',marginLeft:-36,marginTop:8}}>
       <div>________</div>
       <div style={{marginTop:10,marginLeft:-5}}>
       <GoTriangleRight />
       </div>
     
      <div style={{ marginTop: 10, marginBottom: 20,width:150 ,backgroundColor: '#a684eb',paddingRight:40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign:'center',
              color:'white'
              }}>
     Deale
      </div>   
       </div>
    
      </div>
    </div>
   
    </>
  );
}

export default Design;

