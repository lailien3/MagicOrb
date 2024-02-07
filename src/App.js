import './App.css';
import mainBG from '../src/media/mainBG.mp4';
import React, { useState } from 'react';
import generateMagicResponse from './QuestionAndAnswer';

function App() {
  const [userName, setUserName] = useState("aseel");
  const [userQuestion, setUserQuestion] = useState("");
  const [magicResponse, setMagicResponse] = useState("");

  const handleQuestionSubmit = () => {
    const response = generateMagicResponse(userName, userQuestion);
    setMagicResponse(response);
  };

  return(

    <div className='main-container'>
      <video className='main-video' src={mainBG} autoPlay loop muted/>

      <div className='welcome-container'>
        {userName ? `Welcome ${userName}!` : `Welcome!`}
      </div>

      <div className='question-container'>
        <input
          type = 'text'
          placeholder = 'What is your question?'
          value = {userQuestion}
          onChange = {(e) => setUserQuestion(e.target.value)}
        />
        <button onClick={handleQuestionSubmit}>Ask</button>
      </div>

      <div className='response-container'>
        {magicResponse && `Magic Orb says ... ${magicResponse}.`}
      </div>

    </div>

  )
}

export default App;
