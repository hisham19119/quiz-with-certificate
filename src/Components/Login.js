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
        <form onSubmit={handleSubmit}>
          <input ref={refInput} type='text' onChange={(e) => { setUser(e.target.value) }} />
          <button type='submit'>start quiz</button>
        </form>
      </div>
    </div>
  );
}

export default Login;