import React, { useState } from "react";

export default function Buttons() {
  const [displayText, setDisplayText] = useState("");

  function Compute(buttonText) {
    if (buttonText === "AC") {
      setDisplayText("");
    } else if (buttonText === "+/-") {
      setDisplayText((prevText) => (parseFloat(prevText) * -1).toString());
    } else if (buttonText === "%") {
      setDisplayText((prevText) => (parseFloat(prevText) / 100).toString());
    } else if (buttonText === "=") {
      try {
        const result = eval(displayText);
        setDisplayText(result.toString());
      } catch (error) {
        setDisplayText("Error");
      }
    } else if (buttonText === "+") {
      setDisplayText((prevText) => prevText + buttonText);
    } else if (buttonText === "-") {
      setDisplayText((prevText) => prevText + buttonText);
    } else {
      setDisplayText((prevText) => prevText + buttonText);
    }
  }

  return (
      <section className="flex justify-center items-center h-screen"  >
  <div className="grid grid-cols-4 grid-rows-5  font-bold text-4xl w-96 ">
    <p className="bg-slate-500 col-span-4  w-96 h-12" >{displayText}</p>
    <span className="border-black border-2 items-center text-center" onClick={() => Compute('AC')}  >AC</span>
    <span className="border-black border-2 text-center" onClick={() => Compute('+/-')}  >+/-</span>
    <span className=" border-black border-2 text-center"  onClick={() => Compute('%')}>%</span>
    <span className=" border-black border-2 text-center  bg-orange-500" onClick={() => Compute('/')}>/</span>
    <span className=" border-black border-2 text-center" onClick={() => Compute('7')} id="7">7</span>
    <span className=" border-black border-2 text-center" onClick={() => Compute('8')} id="8">8</span>
    <span className=" border-black border-2 text-center" onClick={() => Compute('9')} id="9">9</span>
    <span className="border-black border-2 text-center  bg-orange-500" onClick={() => Compute('*')} >*</span>
    <span className=" border-black border-2 text-center" onClick={() => Compute('4')} id="4">4</span>
    <span className="border-black border-2 text-center" onClick={() => Compute('5')} id="5">5</span>
    <span className=" border-black border-2 text-center" onClick={() => Compute('5')} id="6">6</span>
    <span className="border-black border-2 text-center  bg-orange-500" onClick={() => Compute('-')}>-</span>
    <span className="border-black border-2 text-center" onClick={() => Compute('1')}id="1">1</span>
    <span className="border-black border-2 text-center" onClick={() => Compute('2')} id="2">2</span>
    <span className="border-black border-2 text-center" onClick={() => Compute('3')} id="3">3</span>
    <span className="border-black border-2 text-center  bg-orange-500" onClick={() => Compute('+')} >+</span>
    <span className="border-black border-2 col-span-2 text-center" onClick={() => Compute('0')} id="0">0</span>
    <span className="border-black border-2 text-center " onClick={() => Compute('.')} >.</span>
    <span className="border-black border-2 text-center  bg-orange-500" onClick={() => Compute('=')}>=</span>
</div>

      </section>
    );
}