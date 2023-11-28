import PropTypes from 'prop-types';

export default function ExpandButton(props) {
  return (
    <button
      className={props.className}
      id={props.id}
      type="button"
      aria-label={props.ariaLabel}
      onClick={props.onClick}
    >
      <svg
        ref={props.arrowRef}
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
        />
      </svg>
    </button>
  );
}

ExpandButton.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  arrowRef: PropTypes.object.isRequired,
};
