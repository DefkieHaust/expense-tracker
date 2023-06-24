import './App.css'
import Footer from './components/templates/Footer'
import Header from './components/templates/Header'
import Main from './components/templates/Main'
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <div className='container px-4'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
