import PropTypes from 'prop-types';
import NoteForm from './NoteForm';
import NoteModal from './NoteModal';

export default function Note(props) {
  return (
    <main className="note" id="content">
      <NoteModal
        title="Buat Catatan"
        text={`Sisa Karakter: ${50 - props.titleLength}`}
      >
        <NoteForm
          titleValue={props.titleValue}
          textValue={props.textValue}
          titleOnChange={props.titleOnChange}
          textOnChange={props.textOnChange}
          addOnClick={props.addOnClick}
        />
      </NoteModal>
      <article className="note__record">{props.children}</article>
    </main>
  );
}

Note.propTypes = {
  notes: PropTypes.array.isRequired,
  titleLength: PropTypes.number.isRequired,
  titleValue: PropTypes.string.isRequired,
  textValue: PropTypes.string.isRequired,
  titleOnChange: PropTypes.func.isRequired,
  textOnChange: PropTypes.func.isRequired,
  addOnClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
