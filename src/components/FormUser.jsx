import { useEffect } from "react";
import { useForm } from "react-hook-form"
import '../css/FormUser.css'


const FormUser = ({ createUser, infoUpdate, setIsModalOpen, updateUser, setInfoUpdate }) => {

  const { register, reset, handleSubmit } = useForm();

  useEffect( () => {
    reset(infoUpdate)
  },[infoUpdate])

  const submit = (data) => {
    if(infoUpdate){
      updateUser('/users', infoUpdate.id, data);
      setInfoUpdate();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Update success`,
        showConfirmButton: true,
      });
      
    }else{
      createUser('/users', data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `New user joined to our database`,
        showConfirmButton: true,
      });
    }
    reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
      });
      setIsModalOpen(false);
  }

  return (
    <div className="form">
        <h1 className="form__title"> { infoUpdate ? 'Edit User' : 'New User' }</h1>
        <form className="form__box" onSubmit={handleSubmit(submit)}>
            <label>
                Email: <input {...register('email')} type="email" required/>
            </label>
            <label>
                Password: <input {...register('password')} type="password" required/>
            </label>
            <label>
                First Name: <input {...register('first_name')} type="text" required/>
            </label>
            <label>
                Last Name: <input {...register('last_name')} type="text" required/>
            </label>
            <label>
                Birthday: <input {...register('birthday')} type="date" required/>
            </label>
            <button className="form__btn"> 
            { 
              infoUpdate 
              ? <i className='bx bx-edit' > <span className="aus"> Edit User </span></i>   
              : <i className='bx bx-message-square-add'> <span className="aus"> Add New User </span></i>  
              } 
            </button>
        </form>
    </div>
  )
}

export default FormUser
