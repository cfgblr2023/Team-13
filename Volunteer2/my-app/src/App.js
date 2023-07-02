import logo from './logo.svg';
import './App.css';
import Type from './Type';
import Location from './Location';
import Category from './Category';
function App() {
  return (
    <div className="Container">
      <h3>Volunteer Entry</h3>
      <Location/>
      <Type/>
      <Category/>
    </div>
  );
}

export default App;
