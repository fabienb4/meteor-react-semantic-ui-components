/**
 * @summary Constructor for the rail component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {String} props.side
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Rail = (props) => {
  let className = ReactSUI.utils.addClass("ui rail", props.side, props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Rail.propTypes = {
  className: React.PropTypes.string,
  side     : React.PropTypes.oneOf([
    "left",
    "right"
  ]).isRequired,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
