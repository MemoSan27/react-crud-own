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
    }else{
      createUser('/users', data);
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
        <h1 className="form__title"> { infoUpdate ? 'Editar Usuario' : 'Nuevo Usuario' }</h1>
        <form onSubmit={handleSubmit(submit)}>
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
            <button> { infoUpdate ? 'Editar Usuario' : 'Agregar Usuario' } </button>
        </form>
    </div>
  )
}

export default FormUser
