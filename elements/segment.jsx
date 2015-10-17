/**
 * @summary Constructor for the segment component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Segment = (props) => {
  let className = ReactSUI.utils.addClass("ui segment", props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.Segment.propTypes = ReactSUI.Component.propTypes;
