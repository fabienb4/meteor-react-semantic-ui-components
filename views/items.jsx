/**
 * @summary Constructor for the items component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Items = (props) => {
  let className = ReactSUI.utils.addClass("ui items", props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Items.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};

/**
 * @summary Constructor for the items' item component.
 * @locus Client
 * @memberOf ReactSUI.Items
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Items.Item = (props) => {
  let className = ReactSUI.utils.addClass("item", props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Items.Item.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
