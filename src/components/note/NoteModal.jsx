import PropTypes from 'prop-types';

export default function NoteModal(props) {
  return (
    <dialog className="note__form">
      <header className="note__header">
        <h2 className="note__title">{props.title}</h2>
        <p className="note__paragraph">{props.text}</p>
      </header>
      {props.children}
    </dialog>
  );
}

NoteModal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
