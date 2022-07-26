function Login() {
   return (
      <div className="capabilities">
         <h2 className="capabilities__title">Вход</h2>
         <form className="form">

            <input
               id="email"
               required
               type="email"
               className="form__item form__item_type_white"
               name="email"
               placeholder="Email"
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
            />
            <span className="form__error"></span>

            <button
               className="form__button form__button_type_white"
               type="submit">Войти</button>
         </form>
      </div>
   );
};

export default Login;