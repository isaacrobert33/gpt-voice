import { useSpeechRecognition } from 'react-speech-recognition';
import SpeechRecognition from 'react-speech-recognition';
import openai from 'openai';
import './App.css';
import mic from './mic.svg';
import AI from './AI.gif';
import { useState } from 'react';

function App() {

  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleSpeechStart = () => {
    console.log('Speech recognition started');
  };

  const handleSpeechEnd = () => {
    console.log('Speech recognition ended');
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(SpeechRecognition.browserSupportsSpeechRecognition())
    return (
      <div className="App-header">
        Browser does not Support Speech Recognition.
      </div>
    );
  }

  var micState = false;
  const toggleMic = (e) => {
    let micBtn = document.getElementById("btn");
    if (micState) {
      micBtn.innerHTML = "Click to speak";
      SpeechRecognition.stopListening()
      micState = false;
    } else {
      SpeechRecognition.startListening({
        onstart: handleSpeechStart,
        onend: handleSpeechEnd,
      });
      micBtn.style.left = "50%";
      micBtn.innerHTML = "Send";
      micState = true;
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        <div>
          <span
            onClick={toggleMic}
          >
            <img src={AI} alt="AI" width="360px" height="280px" />
            <span className='btn' id='btn'>
              Click to speak
            </span>
          </span>
        </div>
        <p>Speech: {transcript}</p>
      </header>
    </div>
  );
}

export default App;
