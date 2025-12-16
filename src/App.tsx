import './App.css'
import { ModeToggle } from './components/mode-toggle'
import { Button } from './components/ui/button'

function App() {

  return (
    <div className='flex h-screen justify-center items-center'>
      <Button >
        Hey 🎊
      </Button>
      <ModeToggle />
    </div>
  )
}

export default App
