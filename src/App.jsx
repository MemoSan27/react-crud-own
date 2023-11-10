import { useEffect, useState } from 'react';
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser';
import UserCard from './components/UserCard';

function App() {
 
  const [ infoUpdate, setInfoUpdate ] = useState();
  const url = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useCrud(url);

  useEffect( () => {
    getUsers('/users');
  }, []);

  console.log(users);

  return (
    <div>
      <h2> Users </h2>
      <FormUser 
        createUser={createUser}
        infoUpdate={infoUpdate}
      />
      <div>
        {
          users?.map( user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
