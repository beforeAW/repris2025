import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import MainContent from './components/content';
import HomePage from './components/pages/home';
import WeatherPage from './components/pages/weather';
import SchedulePage from './components/pages/schedule';
import MenuPage from './components/pages/menu';
import MapPage from './components/pages/map';

function App() {

  return (
    <>
    <Router>
      <div>
      <Header/>
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/schedule" element={<SchedulePage/>}/>
          <Route path="/menu" element={<MenuPage/>}/>
          <Route path="/map" element={<MapPage/>}/>
          {/* Add more routes here */}
        </Routes>
      </MainContent>
      <Footer/>
      </div>
      </Router>
    </>
  )
}

export default App
