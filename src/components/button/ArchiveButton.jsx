import PropTypes from 'prop-types';

export default function ArchiveButton(props) {
  const archiveIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="m21.706 5.292-2.999-2.999A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.292A.994.994 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM4 19V7h16l.002 12H4z"
      />
      <path d="M14 9h-4v3H7l5 5 5-5h-3z" />
    </svg>
  );

  const unarchiveIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="m21.706 5.292-2.999-2.999A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.292A.994.994 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM4 19V7h16l.002 12H4z"
      />
      <path d="M7 14h3v3h4v-3h3l-5-5z" />
    </svg>
  );

  return (
    <button
      className={props.className}
      id={props.id}
      type="button"
      aria-label={props.ariaLabel}
      onClick={props.onClick}
    >
      {(!props.isArchived) ? archiveIcon : unarchiveIcon}
      <span>{(!props.isArchived) ? 'Arsipkan' : 'Pindahkan'}</span>
    </button>
  );
}

ArchiveButton.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};
