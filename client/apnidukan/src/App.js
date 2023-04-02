import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//components/files
import AllRoutes from './routes/AllRoutes';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
