import  React,{useState} from 'react';
import './App.css';

function App()  {
  const[isToggled,setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };


  return(
    <div>
      <h1>Toggle to diplay content</h1>
      <button onClick={handleToggle}>
        {isToggled ? 'Hide Text' : 'Show Text'}
      </button>
      {isToggled && <p>Hello , Toggle</p>}
  </div>
  );
}

export default App;
