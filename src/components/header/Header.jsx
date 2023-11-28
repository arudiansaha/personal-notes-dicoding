import PropTypes from 'prop-types';
import SearchButton from '../button/SearchButton';
import WriteButton from '../button/WriteButton';
import ModalInitiator from '../../utils/modalInitiator';

export default function Header(props) {
  const handleOpenClick = (event) => {
    event.stopPropagation();

    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';

    const noteFormElement = document.querySelector('.note__form');
    const noteFormClassName = 'note__form--enabled';

    const modalInitiator = new ModalInitiator(
      noteFormElement, noteFormClassName,
    );

    modalInitiator.open();
  };

  return (
    <header className="header">
      <h1 className="header__title">Notes</h1>
      {props.children}
      <SearchButton
        className="button button--primary button--custom"
        id="searchOpenButton"
        ariaLabel="open search bar"
        onClick={props.enableOnClick}
      />
      <WriteButton
        className="button button--primary button--custom button--flex"
        id="noteWriteButton"
        ariaLabel="write a note"
        onClick={handleOpenClick}
        innerText="Tulis"
      />
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  enableOnClick: PropTypes.func.isRequired,
};
