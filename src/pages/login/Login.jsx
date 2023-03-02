import ShopContext from 'context/ShopContext';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import localStorage from 'redux-persist/es/storage';

export const Login = props => {
  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();
  const [message, setMessage] = useState();
  const context = useContext(ShopContext);

  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    context
      .logIn(email, password)
      .then(response => {
        context.updateUserStatus(response.user);
        localStorage.setItem('user', JSON.stringify(response.user));
        navigate('/');
      })
      .catch(error => {
        console.log('error:', error.message);
        setMessage({ success: false, text: error.message });
      });
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handlePassWordChange = e => {
    setPassWord(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email" onChange={handleChange} />
        <input
          type="password"
          placeholder="password"
          onChange={handlePassWordChange}
        />
        <button type="submit">Log in</button>
        {message === true && <p>Wrong email or password!</p>}
        <p>
          Create an account
          <Link to={'/register'}>
            <button type="button">Sign up</button>
          </Link>
        </p>
      </form>
    </>
  );
};
