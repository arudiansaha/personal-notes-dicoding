import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import CloseButton from '../button/CloseButton';

export default function SearchBar(props) {
  const className = (props.isEnabled)
    ? 'header__search header__search--enabled'
    : 'header__search';

  return (
    <div className={className}>
      <SearchInput value={props.searchValue} onChange={props.onChange} />
      <CloseButton
        className="button button--primary button--custom"
        id="searchCloseButton"
        ariaLabel="close search bar"
        onClick={props.onClick}
      />
    </div>
  );
}

SearchBar.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
