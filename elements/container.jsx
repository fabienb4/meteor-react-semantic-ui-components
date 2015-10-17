/**
 * @summary Constructor for the container component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Container = (props) => {
  let className = ReactSUI.utils.addClass("ui container", props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.Container.propTypes = ReactSUI.Component.propTypes;
