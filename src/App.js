import './App.css';
import mainBG from '../src/media/mainBG.mp4'

function App() {
  return(

    <div className='main-container'>
      <video className='main-video' src={mainBG} autoPlay loop muted/>

      <div className='welcome-container'>
        Welcome user!
      </div>
      <div className='question-container'>
        What is your question?
      </div>
      <div className='response-container'>
        Here is the answer.
      </div>

    </div>

  )
}

export default App;
