import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import ShopContext from 'context/ShopContext';
import { Button } from '@material-ui/core';

export const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();
  const [message, setMessage] = useState();
  const context = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    context
      .register(email, password)
      .then(response => {
        navigate('/');
        console.log('success:', response);
        setMessage({
          success: true,
          text: 'User registered successfully',
        });
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
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" onChange={handleChange} />
        <input
          type="password"
          placeholder="password"
          onChange={handlePassWordChange}
        />
        <Button type="submit">Create Account</Button>
        {message === true && <p>Oooops, something went wrong!</p>}
      </form>
    </>
  );
};
