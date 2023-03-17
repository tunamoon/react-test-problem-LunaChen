import React, { useState } from 'react';

export default function App() {
  const [buttonText, setButtonText] = useState('click me');

  function handleClick() {
    if (buttonText === 'click me') {
      setButtonText('thanks');
    } else {
      setButtonText('click me');
    }
  }

  return (
    <div>
      <p>Greetings!</p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

