import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bogeydex from './pages/Bogeydex';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bogeydex" element={<Bogeydex />} />
      </Routes>
    </BrowserRouter>
  );
}
