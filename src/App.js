import './App.css';
import Result from './components/Result';
import View from './components/View';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
     <Router>
      <View/>
       <Result/>
    </Router>
  );
}

export default App;
