import { useState } from 'react';
import './calculadora.css';

export const Calculadora = () => {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacion, setOperacion] = useState("")
  const [resultado, setResultado] = useState("");
  const [f, setF] = useState("");

  const getNumber = (number)=> {
  
    if(resultado === ""){
      return operacion === '' ? setNumero1(numero1 + number): setNumero2(numero2 + number) 
    } else if(operacion){
       setNumero1(resultado) 
       setNumero2(numero2 + number)
    }
  }
  const getOperator = (operador)=> {
    setOperacion(operador)
  }
  const allClear = () => {
    setNumero1("");
    setNumero2("");
    setOperacion("");
    setResultado("");
  }
  const getResult = () => {
    if(numero1  === "" || numero2  === ""){
      return;
    } else {
      calcular(operacion)
    }
    setF(`${numero1} ${operacion} ${numero2}`)
    setOperacion("")
    setNumero2("")
      
  }

  const calcular = (operador) => {
    switch(operador){
      case "+":
        setResultado(Number(numero1) + Number(numero2))
      break;
      case "-":
      setResultado(Number(numero1) - Number(numero2))
      break;
      case "x":
        
      setResultado(Number(numero1) * Number(numero2))
      break;
      case "/":
      setResultado(Number(numero1) / Number(numero2))
      break;
      case "%":
        setResultado(Number(numero1) * (Number(numero2 / 100)))
      break;

      default :
        return;
   
    }
  }
  const cambiarSigno = ()=> {
    
  }
  return (
    <div className="calculadora">
      <div className='calculadora__grid'>
        <div className='calculadora__display'>
          <div className='calculadora__operando'> {!resultado ? (operacion ? `${numero1} ${operacion}` : "") : (!operacion ? f : `${resultado} ${operacion}`)}</div>
          <div className='calculadora__resultado'>{!resultado ? (!operacion ? numero1 : numero2) : (!operacion ? resultado : numero2) }</div>
        </div>
        <div className='calculadora__teclado'>
          <button onClick={allClear} className='calculadora__tecla calculadora__tecla--vine'>AC</button>
          <button onClick={cambiarSigno} className='calculadora__tecla calculadora__tecla--vine'>+ / -</button>
          <button onClick={()=>{getOperator('%')}} className='calculadora__tecla calculadora__tecla--vine'>%</button>
          <button onClick={()=>{getOperator('/')}} className='calculadora__tecla calculadora__tecla--red'>÷</button>
          <button onClick={()=> {getNumber('7')}} className='calculadora__tecla'>7</button>
          <button onClick={()=> {getNumber('8')}} className='calculadora__tecla'>8</button>
          <button onClick={()=> {getNumber('9')}} className='calculadora__tecla'>9</button>
          <button onClick={()=>{getOperator('x')}} className='calculadora__tecla calculadora__tecla--red'>X</button>
          <button onClick={()=> {getNumber('4')}} className='calculadora__tecla'>4</button>
          <button onClick={()=> {getNumber('5')}} className='calculadora__tecla'>5</button>
          <button onClick={()=> {getNumber('6')}} className='calculadora__tecla'>6</button>
          <button onClick={()=>{getOperator('-')}} className='calculadora__tecla calculadora__tecla--red'>-</button>
          <button onClick={()=> {getNumber('1')}} className='calculadora__tecla'>1</button>
          <button onClick={()=> {getNumber('2')}} className='calculadora__tecla'>2</button>
          <button onClick={()=> {getNumber('3')}} className='calculadora__tecla'>3</button>
          <button onClick={()=>{getOperator('+')}} className='calculadora__tecla calculadora__tecla--red'>+</button>
          <button onClick={()=> {getNumber('0')}} className='calculadora__tecla'>0</button>
          <button onClick={()=>{}} className='calculadora__tecla'>,</button>
          <button onClick={getResult} className='calculadora__tecla calculadora__tecla--span calculadora__tecla--red'>=</button>
        </div>
      </div>

    </div>
  )
}
    