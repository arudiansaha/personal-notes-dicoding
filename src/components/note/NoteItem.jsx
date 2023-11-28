import { useRef } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../button/DeleteButton';
import ArchiveButton from '../button/ArchiveButton';
import ExpandButton from '../button/ExpandButton';

export default function NoteItem(props) {
  const contentRef = useRef(null);
  const arrowRef = useRef(null);

  const handleExpandClick = (event) => {
    event.stopPropagation();

    const className = 'note__content--expanded';

    if (!contentRef.current.classList.contains(className)) {
      arrowRef.current.style.transform = 'rotate(180deg)';
      contentRef.current.classList.add(className);
    } else {
      arrowRef.current.style.transform = 'rotate(0)';
      contentRef.current.classList.remove(className);
    }
  };

  return (
    <li className="note__item" id={props.id}>
      <div className="note__header">
        <h3 className="note__title">{props.title}</h3>
        <ExpandButton
          arrowRef={arrowRef}
          className="button button--inline"
          id="noteExpandButton"
          ariaLabel="expand note"
          onClick={handleExpandClick}
        />
      </div>
      <div ref={contentRef} className="note__content">
        <div className="note__expandable">
          <p className="note__date">{props.date}</p>
          <p className="note__paragraph">{props.text}</p>
          <div className="note__action">
            <ArchiveButton
              className="button button--primary button--custom"
              id="noteArchiveButton"
              ariaLabel="archive the note"
              onClick={props.archiveOnClick}
              isArchived={props.isArchived}
            />
            <DeleteButton
              className="button button--secondary button--custom"
              id="noteDeleteButton"
              ariaLabel="remove button from list"
              onClick={props.deleteOnClick}
              innerText="Hapus"
            />
          </div>
        </div>
      </div>
    </li>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  archiveOnClick: PropTypes.func.isRequired,
  deleteOnClick: PropTypes.func.isRequired,
};
