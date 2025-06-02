import './App.css';

import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './components/HomePage/index';
import AllRestaurantsPage from './components/AllRestaurantsPage/RestaurantPage';
import HotelPage from './components/HotelPage/HotelPage';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AllRestaurantsPage' element={<AllRestaurantsPage />} />
       
       <Route path='/HotelPage' element={<HotelPage/> }/>
    
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
