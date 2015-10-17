/**
 * @summary Constructor for the divider component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Divider = (props) => {
  let className = ReactSUI.utils.addClass("ui divider", props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.Divider.propTypes = ReactSUI.Component.propTypes;
