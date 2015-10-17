/**
 * @summary Constructor for the icons component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object[]} [props.icons] Optional. See [ReactSUI.Icon properties](#ReactSUI-Icon).
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Icons = (props) => {
  let className = ReactSUI.utils.addClass("icons", props.className);
  let children  = _.map(props.icons, (icon, i) => <ReactSUI.Icon key={i} {...icon} />);

  return <i className={className}>{children}{props.children}</i>;
};

ReactSUI.Icons.propTypes = ReactSUI.Component.propTypes;
