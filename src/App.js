import React, { useState, useEffect } from 'react';
import './index.css'



function App() {
  const d = new Date().getHours()
  //var txt = " "
  const [gt, setgt] = useState("Good Evening")
  const [gc, setgc] = useState({})
  useEffect(() => {
    console.log("I am legend");
    if (d > 0 && d < 12) {
      setgt("Good Morning")
      setgc({ color: "tomato" })
    }
    else if (d > 12 && d < 17) {
      setgt("Good Afternoon")
      setgc({ color: "green" })
    }
    else if (d > 17) {
      setgt("Have A Good Night")
      setgc({ color: "blue" })
    }
  }

    , [])


  console.log(d);

  return (
    <>
      <div className="con">
        <h1 className="salutation" >Hello Sir, </h1>
        <h1 className="greeting" style={gc} >{gt}</h1>
      </div>
    </>
  );
}
export default App;
