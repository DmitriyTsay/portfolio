
import { Header } from './components/header/Header';
import { Homepage } from './pages/Homepage/Homepage';
import { Footer } from './components/footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
