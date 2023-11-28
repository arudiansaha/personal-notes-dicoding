import PropTypes from 'prop-types';

export default function NoteList(props) {
  return (
    <section className="note__section">
      <h2 className="note__title">{props.title}</h2>
      <ul className="note__list">{props.children}</ul>
    </section>
  );
}

NoteList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
