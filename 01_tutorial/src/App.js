import logo from './logo.svg';
import './App.css';

function App() {
  //variable definition
  const name = "Joao";
  //function definition
  const handleNameChange = () => {
    const names = ['Joao','Henrique', 'Pimenta', 'Giudice']
    const int = Math.floor(Math.random() * 4)
    return names[int];
  }
  //loading variable and functions to 'html' code:
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name} 
          {handleNameChange()}
        </p>
        
      </header>
    </div>
  );
}

export default App;
