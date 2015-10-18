/**
 * @summary Constructor for the statistic component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Statistic = (props) => {
  let className = ReactSUI.utils.addClass("ui statistic", props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Statistic.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
