import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirsComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import IntroCard from './components/IntroCard'
import TodoList from './TodoComponent/TodoList'
import Header from './Header/Header'

function App() {
  // const [count, setCount] = useState(0)
  const showPopup = () => {
    alert("Button submitted");
  }
  const helloDebug = 'debug';
  return (
    <>
    <Header/>
      <IntroCard />
      <TodoList />
      {/* <FirsComponent data={helloDebug} tahir="mansoor"/> */}
    </>
  )
}

export default App
