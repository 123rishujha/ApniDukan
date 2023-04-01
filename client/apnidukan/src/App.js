import './App.css';
import Navbar from './components/Navbar';


//components/files
import AllRoutes from './routes/AllRoutes';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
         <Navbar/>
         {/* <Home/> */}
         
     
      <AllRoutes />
   
    </div>
  );
}

export default App;
