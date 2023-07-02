import logo from './logo.svg';
import './App.css';
import Location from './Location';
import ImageUploadButton from './ImageUploadButton';

function App() {
  return (
    <div className="Container">
      <h3>User Entry</h3>
      <Location/>
      <ImageUploadButton/>
    </div>
  );
}

export default App;
