import confirmed from '../images/confirmed.svg';
import refused from '../images/refused.svg';

function InfoTooltip({ isOpen, onClose }) {

   return (
      <div className={`popup ${isOpen ? 'popup_is-active' : ''}`}>
         <div className="popup__content">
            <button type="button" className="popup__close" onClick={onClose} />
            <img
               src={confirmed}
               alt={'Регистрация прошла успешно'}
               className="popup__icon"
            />
            <h3 className="popup__title-info"></h3>
         </div>
      </div>
   );
}

export default InfoTooltip;


