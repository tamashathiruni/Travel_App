import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeHotelR from './screens/Home_hotelR';
import PostProperty from './screens/PostProperty';
import Login from './screens/Login';
import HotelList from './screens/HotelList';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeHotelR />} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path='/postproperty' element={<PostProperty />} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<PostProperty />} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path='/hotels' element={<HotelList />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;