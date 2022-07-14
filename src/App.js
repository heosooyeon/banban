import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Main } from './components/main';
import { MainPage } from './pages/main';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route  path='/' 
        element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
