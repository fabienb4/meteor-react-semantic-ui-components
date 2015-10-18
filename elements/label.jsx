/**
 * @summary Constructor for the label component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.linkProps] Optional.
 * @param  {String} [props.linkProps.$] Any property applicable to an &lt;a&gt;. If "className" supplied, override "props.className".
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Label = (props) => {
  let className = ReactSUI.utils.addClass("ui label", props.className);

  if (props.linkProps) {
    return <a className={className} {...props.linkProps}>{props.children}</a>;
  } else {
    return <div className={className} {...props.divProps}>{props.children}</div>;
  }
};

ReactSUI.Label.propTypes = {
  className: React.PropTypes.string,
  linkProps: React.PropTypes.object,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};

/**
 * @summary Constructor for the label's detail component.
 * @locus Client
 * @memberOf ReactSUI.Label
 * @param  {Object} [props]
 * @param  {Object} [props.linkProps] Optional.
 * @param  {String} [props.linkProps.$] Any property applicable to an &lt;a&gt; tag, except "className".
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag, except "className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Label.Detail = (props) => {
  if (props.linkProps) {
    return <a {...props.linkProps} className="detail">{props.children}</a>;
  } else {
    return <div {...props.divProps} className="detail">{props.children}</div>;
  }
};

ReactSUI.Label.Detail.propTypes = {
  linkProps: React.PropTypes.object,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
