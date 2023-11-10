import { useEffect, useState } from 'react';
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser';
import UserCard from './components/UserCard';
import Modal from './components/Modal';

function App() {
  
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ infoUpdate, setInfoUpdate ] = useState();
  const url = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useCrud(url);

  useEffect( () => {
    getUsers('/users');
  }, []);

  console.log(users);

  return (
    <div>
      <header className='header'>
        <h2> Users </h2>
        <button 
            onClick={ () => { setIsModalOpen(!isModalOpen); setInfoUpdate(undefined) } } className='header__btn'> 
            <i className='add bx bxs-message-square-add'></i> 
            &nbsp; &nbsp; &nbsp; 
            <span className='header__btn-desc'> 
            Crear un nuevo usuario 
            </span> 
          </button>
      </header>
    
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}>
          <FormUser 
            createUser={createUser}
            infoUpdate={infoUpdate}
            setIsModalOpen={setIsModalOpen}
          />
          
      </Modal>


      <div className='cards-container'>
        {
          users?.map( user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              setIsModalOpen={setIsModalOpen}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
