import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1> Form in React</h1>
      <label htmlFor='firstname'>First Name*</label>
      <input type='text' placeholder='Enter your Firstname' name='firstname'/>

      <label htmlFor='lastname'>Last Name*</label>
      <input type='text' placeholder='Enter your Lasttname' name='lastname'/>

      <label htmlFor='email'>Email*</label>
      <input type='email' placeholder='Enter your Email' name='email'/>

      <label htmlFor='contact'>Contact*</label>
      <input type='text' placeholder='Enter your Phonenumber' name='contact'/>

      <label htmlFor='gender'>Gender*</label>
      <input type='radio'  name='gender'/> Male
      <input type='radio'  name='gender'/> Female
      <input type='radio'  name='gender'/> Other

      <label htmlFor='subject'>Subject</label>
      <select name ='subject' id='subject'>
        <option value='maths'> Maths </option>
        <option value='physics'> Physics </option>
        <option value='computer'> Computer </option>
        <option value='chemistry'> Chemistry </option>
        </select> 

        <label htmlFor='resume'>Resume*</label>
      <input type='file' placeholder='Select Resume' name='resume'/>
    </div>
  );
}

export default App;
