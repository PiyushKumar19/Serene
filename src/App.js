import logo from './logo.svg';
import './App.css';

function App() {
  function apple() 
  {
    return alert("apple function called");
  }
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/* While calling function with onclick use it as a variable like this or with arrow function */}
      <button onClick={apple}>Click Me!</button>
      <button onClick={()=>apple()}>Another Click Me!</button>
    </div>
  );
}

export default App;
