import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export default AuthContext; 