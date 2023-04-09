import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
let adjustintervel = undefined;
function App() {
  const [watch, setWatch] = useState(0);
  const [started, setStarted] = useState(false);

  function startWatch() {
    adjustintervel = setInterval(
      () => {
        setWatch((x) => x + 1)
      }, 1000
    )
    setStarted(true)
  }

  function stopWatch() {
    setStarted(false)
    console.log(adjustintervel)
    clearInterval(adjustintervel)
  }


  function ResetWatch() {
    setWatch(0)
    clearInterval(adjustintervel)
  }


  return (
    <div className="App">
      <h1>Start Stop Watch </h1>
      <div className='watch'>
        <h2>{watch}</h2>
        <div className='button'>
          <ButtonGroup size="lg" className="mb-2">
            <Button disabled={started} onClick={startWatch}>Start</Button>
            <Button onClick={stopWatch}>Stop</Button>
            <Button onClick={ResetWatch}>Reset</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
