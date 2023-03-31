import JsxExamples from '../JsxExamples';
import MyButton from '../MyButton';
// import MyButton from '../MyButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <h1>
          Hello world!
        </h1> 
        
        <JsxExamples />
        <MyButton
        textButton={'Button text'} />
      </header>
    </div>
  );
}

export default App;
