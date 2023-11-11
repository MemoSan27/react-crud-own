import '../css/UserCard.css'

const UserCard = ({ user, deleteUser, setInfoUpdate, setIsModalOpen2, setIsModalOpen, setUserToDel }) => {

 const handleDelete = () => {
    setIsModalOpen2(true);
    setUserToDel(user);
    /* deleteUser('/users', user.id) */
 }

 const handleEdit = () => {
    setIsModalOpen(true);
    setInfoUpdate(user);
 }

  return (
    <article className="card">
        <h3 className="card__name"> {user.first_name} {user.last_name} </h3>
        <ul>
            <li>
              <span className="card__li-desc">Email: </span><span className="card__li-cont"> { user.email } </span> 
            </li>
            <li>
              <span className="card__li-desc">Birthday: </span><span className="bd card__li-cont"> { user.birthday } </span> &nbsp; &nbsp; &nbsp; &nbsp; 
              <i className="pt fi fi-rr-party-horn" ></i>  
            </li>
        </ul>
        <div className='card__btns'>
          <button 
          className="card__btn-trash" 
          onClick={handleDelete}>
          <i className='bx bx-trash'></i>
          </button>
          <button className="card__btn-edit" onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
        </div>
    </article>
  )
}

export default UserCard
