
import './App.scss';
import {Header} from "./components/header"
import { Footer } from './components/footer';
// import Products from './components/products'
import { Frontpage } from './components/frontpage';
function App() {
  return (
    <div className="App">
      <Header /> 

      <Frontpage />
      <Footer />
    </div>
  );
}

export default App;
