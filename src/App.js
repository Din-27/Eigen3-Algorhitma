import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState(false)
  const [x, setX] = useState()
  const [a, setA] = useState()
  let textLong = 'Saya sangat senang mengerjakan soal algoritma'

  let data = 'EIGEN3'
  let data1 = data.split([])
  let data2 = data1.reverse()
  const result = () => {
    setX(data2.join(""))
    setState(true)
  }

  const first = () => {
    setX(data)
    setState(false)
  }

  function longer(champ, contender) {
    return (contender.length > champ.length) ? contender : champ;
  }
  
  function longestWord(str) {
    var words = str.split(' ');
    return words.reduce(longer);
  }

 let INPUTS = ['xc', 'dz', 'bbb', 'dz']
 let QUERY = ['bbb', 'ac', 'dz']  

  function checkAge(age) {
    if(age < QUERY){
      return age
    }
  }

  let Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

  function matrixs(x, y){
    return Array.from({
      length: x
    }, ()=> new Array(y).fill(Matrix))
  }

  return (
    <div style={{display : 'flex', justifyContent : 'center', textAlign : 'center'}}>
      <div className="row">
        <div className="col-12">
          {state ? (
          <div>
            <h1>{x}</h1>
            <button onClick={first}>click untuk mengubah</button>
          </div>): (<div>
            <h1>{data}</h1>
            <button onClick={result}>click untuk mengubah</button>
          </div>)}
        </div>
        <div className="col-12">
          <div>
            <h1>{longestWord(textLong)}</h1>
          </div>
        </div>
        <div className="col-12">
          <div>
            <h1>{INPUTS.find(checkAge)}</h1>
          </div>
        </div>
        <div className="col-12">
          <div>
            <h1>{matrixs(15 - 12)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
