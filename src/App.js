
import './App.css';
import DemoPhoto from './component/DemoPolotno';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/LandingPage/Landing';
import Demo from './pages/DemoPolotno/Demo';
function App({ store, element }) {

  return (
    <div>
      <Routes >
        <Route path="/" exact element={<Demo store={store}/>}   />
        <Route path="landing" element={<Landing store={store}/>} />
      </Routes >


    </div>


  );
}

export default App;
