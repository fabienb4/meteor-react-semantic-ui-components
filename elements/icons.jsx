/**
 * @summary Constructor for the icons component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Icons = (props) => {
  let className = ReactSUI.utils.addClass("icons", props.className);

  return <i className={className}>{props.children}</i>;
};

ReactSUI.Icons.propTypes = {
  className: React.PropTypes.string,
  children : React.PropTypes.node
};
