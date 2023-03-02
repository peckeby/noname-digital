import { LOG_IN } from 'components/routes/routes';
import ShopContext from 'context/ShopContext';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignOut = props => {
  const context = useContext(ShopContext);
  const navigate = useNavigate();

  const handleButton = e => {
    if (e.target.id === 'no') props.history.push('/');
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
    <div>
      <div>
        <p>Logout?</p>
      </div>

      <div>
        <button type="button" id="no" onClick={handleButton}>
          No
        </button>
        <button type="button" id="yes" onClick={handleButton}>
          Yes
        </button>
      </div>
    </div>
  );
};
