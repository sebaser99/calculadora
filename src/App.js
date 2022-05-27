import './App.css';

function App() {
  return (
    <div className="calculadora">
      <div className='calculadora__grid'>
        <div className='calculadora__display'>
          <div className='calculadora__operando'> 2 + 2</div>
          <div className='calculadora__resultado'>4</div>
        </div>
        <div className='calculadora__teclado'>
          <button class='calculadora__tecla calculadora__tecla--gray'>AC</button>
          <button class='calculadora__tecla calculadora__tecla--gray'>+ / -</button>
          <button class='calculadora__tecla calculadora__tecla--gray'>%</button>
          <button class='calculadora__tecla calculadora__tecla--yellow'>÷</button>
          <button class='calculadora__tecla'>7</button>
          <button class='calculadora__tecla'>8</button>
          <button class='calculadora__tecla'>9</button>
          <button class='calculadora__tecla calculadora__tecla--yellow'>X</button>
          <button class='calculadora__tecla'>4</button>
          <button class='calculadora__tecla'>5</button>
          <button class='calculadora__tecla'>6</button>
          <button class='calculadora__tecla calculadora__tecla--yellow'>-</button>
          <button class='calculadora__tecla'>1</button>
          <button class='calculadora__tecla'>2</button>
          <button class='calculadora__tecla'>3</button>
          <button class='calculadora__tecla calculadora__tecla--yellow'>+</button>
          <button class='calculadora__tecla'>0</button>
          <button class='calculadora__tecla'>,</button>
          <button class='calculadora__tecla calculadora__tecla--span calculadora__tecla--yellow'>=</button>
        </div>
      </div>

    </div>
  );
}

export default App;
