import './App.css';
import Category from './components/Category';
import HeadlineCards from './components/HeadlineCards';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Food from "./components/Food"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
