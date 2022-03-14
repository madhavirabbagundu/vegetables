import React from "react";
// import './App.css';
export default function App() {
   var [counter,setcounter] = React.useState(10)
   var [counter1,setcounter1] = React.useState(7)
   var [counter2,setcounter2] = React.useState(13)
   var [counter3,setcounter3] = React.useState(4)



   const handleIncrement = (value)=>{
    
     setcounter(counter + value);
    
    
   };
   const handleIncrement1 = (value1)=>{
    
    setcounter1(counter1 + value1);
  
   
  };

  const handleIncrement2 = (value2)=>{
    
    setcounter2(counter2 + value2);
  
   
  };

  const handleIncrement3 = (value3)=>{
    
    setcounter3(counter3 + value3);
  
   
  };
   

  return (
    <div>
      <div>
     <h1>Tomatoes:</h1>
     <h2>{counter}</h2>
     <button onClick={()=> handleIncrement(1)}>+</button>
     <button onClick ={()=> handleIncrement(-1)}>-</button>
 </div>
 <div>
     <h1>potatoes:</h1>
     <h2>{counter1}</h2>
     <button onClick={()=> handleIncrement1(1)}>+</button>
     <button onClick ={()=> handleIncrement1(-1)}>-</button>
</div>
<div>
     <h1>carrots:</h1>
     <h2>{counter2}</h2>
     <button onClick={()=> handleIncrement2(1)}>+</button>
     <button onClick ={()=> handleIncrement2(-1)}>-</button>
</div> 
<div>
     <h1>onions:</h1>
     <h2>{counter3}</h2>
     <button onClick={()=> handleIncrement3(1)}>+</button>
     <button onClick ={()=> handleIncrement3(-1)}>-</button>
    </div>
    </div>
  );
}

