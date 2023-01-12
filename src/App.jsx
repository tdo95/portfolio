import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar'
import Main from './components/Main'

import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [scroll, setScroll] = useState(0)

  useEffect(
    () => { 
      setTimeout(() =>{
        const loader = document.querySelector('#loader')
        loader.style.visibility = 'hidden';
        loader.style.opacity = '0'; 
        document.querySelector('#root').style.height = '100%'; 
        setIsLoading(false);
      }, 1000) 
    }
  ) 
  return (
     !isLoading && (<div className="App bg-primary-blue text-gray-300 relative flex flex-col h-full overflow-hidden">
      <NavBar scroll={scroll} />
      <Main setScroll={setScroll} />
    </div>) 
  )
}

export default App
