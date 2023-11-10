import '../css/UserCard.css'

const UserCard = ({ user, deleteUser, setInfoUpdate }) => {

 const handleDelete = () => {
    deleteUser('/users', user.id)
 }

 const handleEdit = () => {
    setInfoUpdate(user);
 }

  return (
    <article className="card">
        <h3 className="card__name"> {user.first_name} {user.last_name} </h3>
        <ul>
            <li><span className="card__li-desc">Email: </span><span className="card__li-cont"> { user.email } </span></li>
            <li><span className="card__li-desc">Birthday: </span><span className="card__li-cont"> { user.birthday } </span></li>
        </ul>
        <div className='card__btns'>
          <button className="card__btn-trash" onClick={handleDelete}><i className='bx bx-trash'></i></button>
          <button className="card__btn-edit" onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
        </div>
    </article>
  )
}

export default UserCard
