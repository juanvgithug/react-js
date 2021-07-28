//R34c7
import React from "react";

//Custom Components
import "./FlickerTitle.scss";

function generateRandomInteger(nMax) {
  return Math.floor(Math.random() * nMax);
}

function splitString(sParam) {
  let retVal = [];

  let nRandomChar = generateRandomInteger(sParam.length);
  let myChar = sParam[nRandomChar];
  let str1 = sParam.substring(0, nRandomChar);
  let str2 = myChar;
  let str3 = sParam.substring(nRandomChar + 1);

  console.log("char=", myChar, str1, str2, str3);

  retVal.push(str1);
  retVal.push(str2);
  retVal.push(str3);

  return retVal;
}

const FlickerTitle = (props) => {
  var random_boolean = Math.random() < 0.5; //50% probability of getting true
  let myStr = splitString(props.greeting);
  let myStr1 = myStr[0];
  let myStr2 = myStr[1];
  let myStr3 = myStr[2];

  return (
    <>
      {random_boolean ? (
        <div className="Title">
          <code className="flicker sign" style={{ fontSize: "2.6em" }}>
            {myStr1.length ? myStr1 : ""}
            <span className="fast-flicker">{myStr2.length ? myStr2 : ""}</span>
            {myStr3.length ? myStr3 : ""}{" "}
          </code>
        </div>
      ) : (
        <div className="Title">
          <code className="flicker sign" style={{ fontSize: "2.6em" }}>
            {props.greeting}
          </code>
        </div>
      )}
    </>
  );
};

export default FlickerTitle;
