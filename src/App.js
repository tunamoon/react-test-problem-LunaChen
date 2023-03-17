import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  //handler goes here
  onst App = () => {
  const [buttonText, setButtonText] = useState('click me');

  function handleClick() {
    setButtonText('thanks');
  }
    
    onst App = () => {
  const [buttonText, setButtonText] = useState('thanks');

  function handleClick() {
    setButtonText('click me');
  }
      

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};




  render() {
    return (
      <div>
        <p>Greetings!</p>
        <button type="button">click me</button>
      </div>
    );
  }
}
