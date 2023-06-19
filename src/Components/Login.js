import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [user, setUser] = useState('');
  const refInput = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    refInput.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('naaame', JSON.stringify(user));
    navigate('/quiz');
  };

  return (
    <div className='l-container'>
      <div className='l-wrapper'>
        <form className='l-form' onSubmit={handleSubmit}>
          <input className='l-input' placeholder='Type your name ' ref={refInput} type='text' onChange={(e) => { setUser(e.target.value) }} />
          <div  className='l-button'><button  type='submit'>Start quiz</button></div>
        </form>
      </div>
    </div>
  );
}

export default Login;