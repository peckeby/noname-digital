import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEmail, setError, setPassWord } from 'redux/user/userSlice';
import { auth } from '../../firebase/firebaseConfig';

export const Login = () => {
  const { password, email, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    console.log(email);

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        navigate('/');
      })
      .catch(error => {
        dispatch(setError(true));
        console.log(error);
      });
  };

  const handleChange = e => {
    dispatch(setEmail(e.target.value));
  };

  const handlePassWordChange = e => {
    dispatch(setPassWord(e.target.value));
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
        <button type="submit">Login</button>
        {error === true && <p>Wrong email or password!</p>}
      </form>
    </>
  );
};
