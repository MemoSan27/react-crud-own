import { useEffect } from "react";
import { useForm } from "react-hook-form"


const FormUser = ({ createUser, infoUpdate }) => {

  const { register, reset, handleSubmit } = useForm();

  useEffect( () => {
    reset(infoUpdate)
  },[infoUpdate])

  const submit = (data) => {
    createUser('/users', data);
    reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
      });
  }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <label>
                Email: <input {...register('email')} type="email" />
            </label>
            <label>
                Password: <input {...register('password')} type="password" />
            </label>
            <label>
                First Name: <input {...register('first_name')} type="text" />
            </label>
            <label>
                Last Name: <input {...register('last_name')} type="text" />
            </label>
            <label>
                Birthday: <input {...register('birthday')} type="date" />
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormUser
