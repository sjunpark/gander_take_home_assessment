import React, { useState } from 'react'
import { addingNumbers } from '../api/CalculateApi';


export const fetchData: (firstNumber:number, secondNumber:number) => Promise<string | number> = async (firstNumber, secondNumber) => {
  return await addingNumbers(firstNumber, secondNumber);
}

export default function AddingNumbers() {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [sumNumbers, setSumNumbers] = useState<number>(NaN);

  const onNumberChangeHandler = (event:React.ChangeEvent<HTMLInputElement>, setter: (value:string) => void) => {
    setter(event.target.value);
  }

  const onButtonHandler = async () => {
    fetchData(Number(firstNumber), Number(secondNumber))
      .then(res => {
        if (typeof res === 'number') setSumNumbers(res);
        else console.log(res);
      })
      .catch(error => {
        console.log(error);
      }) 
  }

  return (
    <div className="adding-numbers-container">
      <h1>Adding Two Numbers</h1>
      <div className="input-container" >
        <input 
          className="number-input" 
          type='number' 
          placeholder='First Number' 
          value={firstNumber} 
          onChange={(e)=>onNumberChangeHandler(e,setFirstNumber)} 
        />
        <input 
          className="number-input" 
          type='number' 
          placeholder='Second Number' 
          value={secondNumber} 
          onChange={(e)=>onNumberChangeHandler(e,setSecondNumber)} 
        />
        <button className="add-button" onClick={onButtonHandler} >Add Two Numbers</button>
      </div>
      <p>Result: {isNaN(sumNumbers) ? '' : sumNumbers}</p>
    </div>
  )
}