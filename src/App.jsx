import { useEffect, useState } from 'react';
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser';
import UserCard from './components/UserCard';
import Modal from './components/Modal';
import Modal2 from './components/Modal2';

function App() {
  
  const [ usertoDel, setUserToDel ] = useState({});
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ isModalOpen2, setIsModalOpen2 ] = useState(false);
  const [ infoUpdate, setInfoUpdate ] = useState();
  const url = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useCrud(url);

  useEffect( () => {
    getUsers('/users');
  }, []);

  const handleDelete = () => {
    deleteUser('/users', usertoDel.id)
    setIsModalOpen2(false);
    setUserToDel({})
  }

  const handleNotDelete = () =>{
    setIsModalOpen2(false);
    setUserToDel({});
  }

  


  return (
    <div>
      <header className='header'>
        <h2 className='header__title'> Users </h2>
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
        setIsModalOpen={setIsModalOpen}
        showHeader={false}>
        
          <FormUser 
            createUser={createUser}
            infoUpdate={infoUpdate}
            updateUser={updateUser}
            setIsModalOpen={setIsModalOpen}
            setInfoUpdate={setInfoUpdate}
          />
          
      </Modal>

      <Modal2
        isModalOpen2={isModalOpen2}
        setIsModalOpen2={setIsModalOpen2}
        showHeader={false}
        > 
          <div className='question'>
            <h3 className='question__title'> ¿Are you sure on delete user <span className='question__span'> {usertoDel?.first_name} { usertoDel?.last_name } </span>  ?</h3>
            <div className='question__btns'>
              <button onClick={handleDelete} className='question__btn header__btn'> Yes </button>
              <button onClick={handleNotDelete} className='question__btn-2 header__btn'> No </button>
            </div>
          </div> 
          
      </Modal2>

      
      <div className='cards-container'>
        {
          users?.map( user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              setIsModalOpen={setIsModalOpen}
              setIsModalOpen2={setIsModalOpen2}
              setUserToDel={setUserToDel}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
