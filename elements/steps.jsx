/**
 * @summary Constructor for the steps component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Steps = (props) => {
  let className = ReactSUI.utils.addClass("ui steps", props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Steps.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};

/**
 * @summary Constructor for the steps' step component.
 * @locus Client
 * @memberOf ReactSUI.Steps
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Steps.Step = (props) => {
  let className = ReactSUI.utils.addClass("step", props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Steps.Step.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
