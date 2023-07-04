import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Route path="/" exact={true} component={Home} />
  );
}

export default App;
