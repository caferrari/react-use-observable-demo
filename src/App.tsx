import React, { useState, useCallback } from 'react';
import { Counter } from './components/counter';

const App: React.FC = () => {

  const [ start, setStart ] = useState<number>(0);
  const [ inputValue, setInputValue ] = useState(0);

  const updateCounter = () => setStart(Number(inputValue));
  const onInputChange = useCallback((event: any) => setInputValue(event.target.value), []);

  return (
    <div className="App">
      <fieldset>
        <input type="number" onChange={onInputChange} value={inputValue} />
        <button onClick={updateCounter}>Restart</button>
      </fieldset>
      
      <Counter start={start} />

    </div>
  );
}

export default App;
