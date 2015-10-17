/**
 * @summary Constructor for the icon component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {String} props.name
 * @param  {Function} [props.handleClick] Optional.
 * @return {Node}
 */
ReactSUI.Icon = (props) => {
  let className = ReactSUI.utils.addClass("icon", props.name, props.className);

  return <i className={className} onClick={props.handleClick}></i>;
};

ReactSUI.Icon.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      name       : React.PropTypes.string.isRequired,
      handleClick: React.PropTypes.func
    }
  }
);
