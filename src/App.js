import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./components/firstPage"
import SecondPage from "./components/secondPage"
import NotFound from './components/notFound';
function App() {
  return    <BrowserRouter>
  <Routes>
  <Route path="/">
  <Route index element={<SecondPage/>} />
  <Route path="second" element={<FirstPage />} />  
  <Route path="*" element={<NotFound />} />  
  </Route>
  </Routes>
  </BrowserRouter>
}

export default App;
