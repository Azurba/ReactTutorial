import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  //variable definition
  const name = "Joao";
  
  //loading variable and functions to 'html' code:
  //Custom tags are defined in different files.
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
