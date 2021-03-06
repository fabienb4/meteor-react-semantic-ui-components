/**
 * @summary Constructor for the loader component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Loader = (props) => {
  let className = ReactSUI.utils.addClass("ui loader", props.className);

  if (props.children) {
    className = ReactSUI.utils.addClass(className, "text");
  }

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Loader.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
