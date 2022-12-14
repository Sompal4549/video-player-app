import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState(null);
  return (
    <>
      <main>
        <style>
          {`
          *{
            text-align:center;
          font-family:font-family: Verdana, Geneva, Tahoma, sans-serif;
          box-sizing:border-box;
          margin:0;
          padding:0;
          }
          main{
            margin-top:50px;
            padding:20px;

          }
          p{
            font-size:20px;
            font-weight:400;
            line-height:35px;
            margin-top:20px;
          }

          .color-panel-container{
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            margin-top:30px;
          }
          label{
            font-size:16px;
            font-weight:500;
            margin-bottom:15px;
            line-height:30px;
          }
          h1{
            font-size:50px;
          text-align:center;

          }
          input{
            display:block;
            width:150px;
            height:40px;
          }
          h2{
            font-size:30px;
            margin-top:20px;
            line-height:20px;
            font-weight:700;
          }
          `}
        </style>
        <h1>HEX COLOR GENERATOR</h1>
        <p>
          Choose color from the color panel and get the hex code of that color
          in a second.
        </p>
        <form>
          <div className="color-panel-container">
            <label htmlFor="color">Choose Color In Color Panel</label>
            <input
              name="color"
              id="color"
              type="color"
              onChange={(e) => {
                setColor(e.target.value);
              }}
              value={color}
            />
            <div className="color-value">
              <h2>HEX Code: {color}</h2>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default App;
