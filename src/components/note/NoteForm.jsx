import PropTypes from 'prop-types';
import AddButton from '../button/AddButton';
import CloseButton from '../button/CloseButton';
import ModalInitiator from '../../utils/modalInitiator';

export default function NoteForm(props) {
  const handleCloseClick = (event) => {
    event.stopPropagation();

    const element = document.querySelector('.note__form');
    const className = 'note__form--enabled';

    const modalInitiator = new ModalInitiator(element, className);
    modalInitiator.close();
  };

  return (
    <form className="form" method="dialog">
      <fieldset className="form__field">
        <input
          className="form__input"
          type="text"
          name="noteTitle"
          id="noteTitle"
          maxLength={50}
          placeholder="Judul"
          value={props.titleValue}
          required
          onChange={props.titleOnChange}
        />
        <textarea
          className="form__textarea"
          name="noteContent"
          id="noteContent"
          rows={10}
          placeholder="Catatan"
          value={props.textValue}
          required
          onChange={props.textOnChange}
        />
      </fieldset>
      <fieldset className="form__field form__field--row">
        <AddButton
          className="button button--primary button--inline"
          id="noteSubmitButton"
          ariaLabel="create a note"
          onClick={props.addOnClick}
          innerText="Buat"
        />
        <CloseButton
          className="button button--secondary button--inline"
          id="noteCloseButton"
          onClick={handleCloseClick}
          ariaLabel="cancel create note"
          innerText="Batal"
        />
      </fieldset>
    </form>
  );
}

NoteForm.propTypes = {
  titleValue: PropTypes.string.isRequired,
  textValue: PropTypes.string.isRequired,
  titleOnChange: PropTypes.func.isRequired,
  textOnChange: PropTypes.func.isRequired,
  addOnClick: PropTypes.func.isRequired,
};
