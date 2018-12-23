import React, { Component } from 'react';
import './App.css';

export default class App extends Component{
  constructor(props){
      super(props);

      this.state = {
          result: "",
      };

      this.calculate = this.calculate.bind(this);
      this.reset = this.reset.bind(this);
      this.backSpace = this.backSpace.bind(this);
      this.onClick = this.onClick.bind(this);
  }

  calculate(){
      console.log('calculator executed');
      const { result } = this.state;
      try {
          this.setState({
              result: (eval(result) || "")+"",
          });
      } catch (e) {
          this.setState({
              result: "error",
          });
      }
  }
  
  reset(){
      console.log('reset executed');
      this.setState({
          result: "",
      });
  }

  backSpace(){
      console.log('backspace executed');
      const { result } = this.state;
      this.setState({
          result: result.slice(0, -1),
      });
  }

  onClick(button){
      const { result } = this.state;
      console.log(button+' executed');
      if(button === "="){
          this.calculate();
      } else if (button === "C"){
          this.reset();
      }else if(button === "DEL"){
          this.backSpace();
      }else{
          this.setState({
              result: result+button,
          });
      }
  }

  render(){
      const { result } = this.state;
      return(
          <div className="calculator-body">
              <h1>Calculator</h1>
              <Result result={result}/>
              <KeyArea onClick={this.onClick} />
          </div>
      );
  }
}
const Result = ({ result }) =>{
  return (
      <div className="result">
          <p>{(result === "")?0:result}</p>
      </div>
  );
};

const KeyArea = ({ onClick }) => {
  return (
      <div className="button">
          <button name="DEL" onClick={e => onClick(e.target.name)}>DEL</button>
          <button name="(" onClick={e => onClick(e.target.name)}>(</button>
          <button name=")" onClick={e => onClick(e.target.name)}>)</button>
          <button name="C" onClick={e => onClick(e.target.name)}>C</button><br/>

          <button name="7" onClick={e => onClick(e.target.name)}>7</button>
          <button name="8" onClick={e => onClick(e.target.name)}>8</button>
          <button name="9" onClick={e => onClick(e.target.name)}>9</button>
          <button name="/" onClick={e => onClick(e.target.name)}>÷</button><br/>

          <button name="4" onClick={e => onClick(e.target.name)}>4</button>
          <button name="5" onClick={e => onClick(e.target.name)}>5</button>
          <button name="6" onClick={e => onClick(e.target.name)}>6</button>
          <button name="*" onClick={e => onClick(e.target.name)}>*</button><br/>

          <button name="1" onClick={e => onClick(e.target.name)}>1</button>
          <button name="2" onClick={e => onClick(e.target.name)}>2</button>
          <button name="3" onClick={e => onClick(e.target.name)}>3</button>
          <button name="-" onClick={e => onClick(e.target.name)}>-</button><br/>

          <button name="0" onClick={e => onClick(e.target.name)}>0</button>
          <button name="." onClick={e => onClick(e.target.name)}>.</button>
          <button name="=" onClick={e => onClick(e.target.name)}>=</button>
          <button name="+" onClick={e => onClick(e.target.name)}>+</button><br/>
      </div>
  );
};


//components to be tested
export{
  Result,
  KeyArea
}