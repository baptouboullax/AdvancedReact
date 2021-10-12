import { useState } from 'react';

import { Paragraphe } from './Paragraphe';
import { ParagrapheClass } from './ParagrapheClass';
import './styles/main.scss';

function App(props) {
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    // alert('onClickHandler');
    setCount(count + 1);
  }  

  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.text}</h1>
        <Paragraphe {...props} onClickHandler={onClickHandler} />
        <ParagrapheClass {...props} />

        {count}
      </header>
    </div>
  );
}

export default App;
