import React, {useState} from 'react';
import Heading from './components/Heading';
import Form from './components/Form';
import Answer from './components/Answer';

function App() {
  const [toggle, setToggle] = useState(false);
  const [answer, setAnswer] = useState("");

  return (
    <div className="App">
      <Heading />
      <Form setToggle={setToggle} setAnswer={setAnswer} />
      <Answer toggle={toggle} setToggle={setToggle} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}

export default App;
