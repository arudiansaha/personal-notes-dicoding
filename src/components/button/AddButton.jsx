import PropTypes from 'prop-types';

export default function AddButton(props) {
  return (
    <button
      className={props.className}
      id={props.id}
      type="button"
      aria-label={props.ariaLabel}
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
      </svg>
      {props.innerText && <span>{props.innerText}</span>}
    </button>
  );
}

AddButton.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  innerText: PropTypes.string
};
