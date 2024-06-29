import { createContext, useContext, useState } from 'react';

const UserProfileContext = createContext();

export const useUserProfile = () => useContext(UserProfileContext);

export const UserProfileProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA',
    phone: '123-456-7890'
  });

  const updateUserProfile = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <UserProfileContext.Provider value={{ user, updateUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};
