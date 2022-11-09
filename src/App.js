import { useContext,useState } from 'react';
import './App.css';
import Heart from './component/Heart';
import SnowAnimation from './component/Snow';
// import Paragraph from './Paragraph.js';
import {ThemeContext} from './ThemeContext';
// import { useDispatch, useSelector } from 'react-redux';
// import setInput from './store/actions/setinput';
// import addJob from './store/actions/addjob';



function App() {

  const [girltext, setGirlText] = useState('Chúc Em Một Ngày Nhiều Niềm Zuiii :3')

  var checkSmile = false ;
  if(girltext === 'Cười thật nhìu nha em bé :333 '){
    checkSmile = true;
  }
  
  const setName = () => {
    if(checkSmile){
      setGirlText('Chúc Em Một Ngày Nhiều Niềm Zuiii :3')
    }
    else{

      setGirlText('Cười thật nhìu nha em bé :333 ')
    }
    
  }


  const themecontext = useContext(ThemeContext)

  // const todos = useSelector(state => state.todo.todos)
  // const todoinput = useSelector( state => state.todo.todoinput)

  // const dispatch = useDispatch() ;

  // const handleAddJob = () => {
  //   const action = addJob(todoinput)

  //   dispatch(action)
  //   console.log(todos)
  // }
  return (
    <div className={themecontext.theme}>
      {/* <button
      onClick = {themecontext.toggletheme}
      >Chuyển theme</button>
      <Paragraph />
      <input
      value={todoinput}
      placeholder='Type job'
      onChange={e => setInput(e.target.value) }
      >
      </input>
      <button onClick={handleAddJob}>Add Job</button>
      <ul>
        {todos.map(todo => (
          <h3>{todo}</h3>
        ))}
      </ul> */}
      <button
      className='btn_toggle'
      onClick = {themecontext.toggletheme}
      >Nhấn để đổi cái màu nền nè :333 </button>
      <Heart />
      <SnowAnimation />
      <div className='content'>
        <p>{girltext}</p>
      </div>
      <button className='btn_changeName' onClick={setName}></button>
    </div>
  )
    }
  
 

export default App;
