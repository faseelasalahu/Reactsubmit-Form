import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [values, setValues] = useState({
    firstname :'',
    lastname:'',
    email:'',
    contact:'',
    gender:'',
    subject:'',
    resume:'',
    url:'',
    about:''
  })

  const handleChanges = (e) =>{
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
    console.log(values)
  }

  const ResetFun = () => {
    setValues({firstname:'' , lastname:'', email:''})
  }
  return (
    <div className='container'>
      <h1> Form in React</h1>
      <form onSubmit={handleSubmit}>
          <label htmlFor='firstname'>First Name*</label>
          <input type='text' placeholder='Enter your Firstname' name='firstname'
          onChange={(e) => handleChanges(e)} required values = {values.firstname}/>

          <label htmlFor='lastname'>Last Name*</label>
          <input type='text' placeholder='Enter your Lasttname' name='lastname'
          onChange={(e) => handleChanges(e)} required values = {values.lastname}/>

          <label htmlFor='email'>Email*</label>
          <input type='email' placeholder='Enter your Email' name='email'
          onChange={(e) => handleChanges(e)} required values = {values.email}/>

          <label htmlFor='contact'>Contact*</label>
          <input type='text' placeholder='Enter your Phonenumber' name='contact'
          onChange={(e) => handleChanges(e)} required />

          <label htmlFor='gender'>Gender*</label>
          <input type='radio'  name='gender'
         onChange={(e) => handleChanges(e)}/> Male
          <input type='radio'  name='gender'
          onChange={(e) => handleChanges(e)}/> Female
          <input type='radio'  name='gender'
           onChange={(e) => handleChanges(e)}/> Other

          <label htmlFor='subject'>Subject</label>
          <select name ='subject' id='subject' onchange={(e) => handleChanges(e)}>
          <option value='maths'> Maths </option>
          <option value='physics'> Physics </option>
          <option value='computer'> Computer </option>
          <option value='chemistry'> Chemistry </option>
          </select> 

         <label htmlFor='resume'>Resume*</label>
         <input type='file' placeholder='Select Resume' name='resume'
         onChange={(e) => handleChanges(e)} required/>

         <label htmlFor='url'>URL</label>
         <input type='text' name='url' placeholder='Enter image URL'
         onChange={(e) => handleChanges(e)} required/>

         <label htmlFor='about'>About</label>
         <textarea name='about' id='about' cols='30' rows='10' placeholder='Enter Description'
         onChange={(e) => handleChanges(e)}> 

         </textarea>
         <button  >Submit</button>
         <button onClick={ResetFun}>Reset</button>
         </form>
        </div>
  );
}

export default App;
