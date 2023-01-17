
import { Header } from './components/header/Header';
import { Homepage } from './pages/Homepage/Homepage';

import './App.scss';
import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider} from 'antd';

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorTextBase: 'white',
            // colorPrimary: '#00b96b',
          },
        }}
      >
        <div className="App">
          <Header />
          <Homepage />
          {/* <Footer /> */}
        </div>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
