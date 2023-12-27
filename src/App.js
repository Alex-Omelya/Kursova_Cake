import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CakePage from './pages/CakePage';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />}></Route>
                    <Route path='/CakePage' element={<CakePage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
