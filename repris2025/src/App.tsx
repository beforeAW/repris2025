import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import MainContent from './components/content';

function App() {

  return (
    <>
    <Router>
      <div>
      <Header/>
      <MainContent/>
      <Footer/>
      </div>
      </Router>
    </>
  )
}

export default App
