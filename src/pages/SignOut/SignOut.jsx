import { Button } from '@mui/material';
import { LOG_IN } from 'components/routes/routes';
import ShopContext from 'context/ShopContext';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './SingOut.module.scss';

export const SignOut = props => {
  const context = useContext(ShopContext);
  const navigate = useNavigate();

  const handleButton = e => {
    if (e.target.id === 'no') navigate('/');
    else if (e.target.id === 'yes') {
      context
        .logOut()
        .then(() => {
          context.updateUserStatus();
          localStorage.removeItem('user');
          navigate(LOG_IN);
        })
        .catch(error => {
          console.log('error:', error.message);
          navigate('/');
        });
    }
  };

  return (
    <div className={s.logOutContainer}>
      <p className={s.logOutDisclamer}>Sing out?</p>
      <div className={s.buttonsLogOut}>
        <Button
          variant="contained"
          type="button"
          id="no"
          onClick={handleButton}
        >
          No
        </Button>
        <Button
          variant="contained"
          type="button"
          id="yes"
          onClick={handleButton}
        >
          Yes
        </Button>
      </div>
    </div>
  );
};
