import PopupWithForm from './PopupWithForm.js'

function PopupWithConfirmation({ isOpen, onClose, card, onSubmit }) {

   function handleConfirmiation(evt) {
      evt.preventDefault();
      onSubmit(card);
   };

   return (
      <PopupWithForm
         popup="delete-card"
         name="delete-card"
         title="Вы уверены?"
         text="Да"
         onClose={onClose}
         isOpen={isOpen}
         onSubmit={handleConfirmiation}
      >
      </PopupWithForm>
   )
}

export default PopupWithConfirmation;