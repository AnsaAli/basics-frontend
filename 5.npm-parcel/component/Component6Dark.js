import React, { useMemo, useState } from "react";
import { findNthPrime } from "../../helperFunctions/findPrime";

const Component6Dark = () => {
  const [num, setNum] = useState(0);
  const [darkMode, setDarkMod] = useState(false);

  //this will call unnecessarly
  //   const getPrime = findNthPrime(num);

  const getPrime = useMemo(() => {findNthPrime(num);
    console.log('calling findPrime')
  }, [num]);

  const handleDark = () => {
    {
      !darkMode ? setDarkMod(true) : setDarkMod(false);
    }
  };

  console.log("Rendering..");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button style={{ padding: "5px" }} onClick={handleDark}>
        Dark
      </button>
      {!darkMode ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid black",
            background: "yellow",
            height: "100px",
            width: "500px",
            margin: "auto",
          }}
        >
          <h3>Component4</h3>
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
          <p>Nth prime num is :{num} </p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid black",
            background: "black",
            height: "100px",
            width: "500px",
            margin: "auto",
            color: "white",
          }}
        >
          <h3>Component4</h3>
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
          <p>Nth prime num is :{getPrime} </p>
        </div>
      )}
    </div>
  );
};

export default Component6Dark;
