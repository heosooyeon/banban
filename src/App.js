import './App.css';
import { Scanfood } from './components/scanfood';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Header } from './components/header';
import { Main } from './components/main';
import { Newcarbon } from './components/newcarbon';
import { Guid } from './components/guidpage';
import { My } from './components/mypage';

function App() {
  return (
   <BrowserRouter>
      <Routes>
      <Route path='/scanfood' element={<>
        <Header/>
        <Scanfood/>
      </>} />
      <Route path='/' element={<>
        <Header/>
        <Main/>
      </>} />
      <Route path='/nowcarbon' element={<>
        <Header/>
        <Newcarbon/>
      </>} />
      <Route path='/guidpage' element={<>
        <Header/>
        <Guid/>
      </>} />
      <Route path='/mypage' element={<>
        <Header/>
        <My/>
      </>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
