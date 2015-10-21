/**
 * @summary Constructor for the comments component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Boolean} [props.nested] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Comments = (props) => {
  let className = ReactSUI.utils.addClass(props.nested ? "comments" : "ui comments", props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Comments.propTypes = {
  className: React.PropTypes.string,
  nested   : React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};

/**
 * @summary Constructor for the comments' comment component.
 * @locus Client
 * @memberOf ReactSUI.Comments
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Comments.Comment = (props) => {
  let className = ReactSUI.utils.addClass("comment", props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Comments.Comment.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
