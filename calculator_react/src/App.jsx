
import InputBar from './components/InputBar';
import Numbers from './components/Numbers';
import Operators from './components/Operators';
import Result from './components/Result';
import ClearDel from './components/ClearDel';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';

function App() {

  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");

  //enter text
  const handleClick = (n) => {
    setInputText(inputText.toString() + n.toString());
  }

  //calculate result
  const handleEqual = () => {
    let expression = inputText;

    try {

      //count number of * and replace
      for (let i = 0; i < expression.length; i++) {
        if (expression[i] === "×") {
          expression = expression.slice(0, i).toString() + "*" + expression.slice(i+1);
        }
      }

      //count number of / and replace
      for (let i = 0; i < expression.length; i++) {
        if (expression[i] === "÷") {
          expression = expression.slice(0, i).toString() + "/" + expression.slice(i+1);
        }
      }

      //calculate result
      setResultText(eval(expression));
    } catch (e) {
      setResultText("Invalid Expression");
    }
  }

  //clear entry (backspace)
  const handleBack = () => {
    setInputText(inputText.slice(0, -1));
  }

  //all clear
  const handleClear = () => {
    setInputText("");
  }

  return (
    <>
      <div className='main'>

        <h1
        className='text-center bg-dark text-light m-0 p-3'>
        Calculator React</h1>

        <InputBar text={inputText} />
        <Result text={resultText} />

        <ClearDel onAC={handleClear} onCE={handleBack}/>

        <article>
          <Numbers onClick={handleClick} onEqual={handleEqual}/>
          <Operators onClick={handleClick}/>
        </article>

      </div>

      <footer className='text-center bg-dark text-light p-2 h4 m-0 border-top border-white'>Developed By Yamin</footer>
    </>);
}

export default App
