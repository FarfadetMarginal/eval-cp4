import './styles/global.scss'
import { Routes, Route } from 'react-router-dom'
import Home  from './pages/home';
import Detail from './pages/details';
import NotFound from './pages/notfound';


function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/card" element={<Detail />}/>
        <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default App
