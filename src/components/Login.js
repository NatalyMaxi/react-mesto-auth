import { useState } from 'react';

function Login() {

   const [loginDataUser, setLoginDataUser] = useState({});

   function handleChange(evt) {
      const { name, value } = evt.target;
      setLoginDataUser({
         [name]: value
      });
   }

   function handleSubmit(evt) {
      evt.preventDefault();
   }

   return (
      <div className="capabilities">
         <h3 className="capabilities__title">Вход</h3>
         <form className="form" onSubmit={handleSubmit}>

            <input
               id="email"
               required
               type="email"
               className="form__item form__item_type_white"
               name="email"
               placeholder="Email"
               value={loginDataUser.email || ''}
               onChange={handleChange}
            />
            <span className="form__error"></span>

            <input
               id="password"
               minLength="6"
               maxLength="20"
               required
               type="password"
               className="form__item form__item_type_white"
               name="password"
               placeholder="Пароль"
               value={loginDataUser.password || ''}
               onChange={handleChange}
            />
            <span className="form__error"></span>

            <button
               className="form__button form__button_type_white"
               type="submit">Войти</button>
         </form>
      </div>
   )
};

export default Login;