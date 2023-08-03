import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import './Login.css'
import { ILoginPage, IOnSubmitForm } from "./types/loginForm.types";
import { login } from "../../api/login";
import { useEffect } from "react";

function Login(props: ILoginPage) {
  const { setUser } = props;

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user))
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
  });

  let onSubmit = async ({email, password}: IOnSubmitForm) => {
    const user = await login({email, password});
    setUser(user);
  };

  return (
    <div className='login-wrapper'>
      <form id="c-form" className="c-form" onSubmit={handleSubmit((data: any) => onSubmit({email: data.Email, password: data.Senha}))} autoComplete="off">
        <div className='t-text-wrapper a-font'><p>Ponto <span className='p-span'>Teste</span></p></div>
        <div className='a-input-wrapper'>
          <Input errors={errors} register={register} value='johndoe@gmail.com' label='Email' />
          <Input errors={errors} register={register} value='Teste1234@'  type='password' label='Senha' />
        </div>
        <Button type='submit' text='Confirmar' />
      </form>
    </div>
  )
}

export default Login;