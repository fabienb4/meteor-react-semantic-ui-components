/**
 * @summary Constructor for the list component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.List = (props) => {
  let className = ReactSUI.utils.addClass("ui list", props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.List.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};

/**
 * @summary Constructor for the list's item component.
 * @locus Client
 * @memberOf ReactSUI.List
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.linkProps] Optional.
 * @param  {String} [props.linkProps.$] Any property applicable to an &lt;a&gt; tag. If "className" supplied, override "props.className".
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.List.Item = (props) => {
  let className = ReactSUI.utils.addClass("item", props.className);

  if (props.linkProps) {
    return <a className={className} {...props.linkProps}>{props.children}</a>
  } else {
    return (
      <div className={className} {...props.divProps}>
        {props.children}
      </div>
    );
  }
};

ReactSUI.List.Item.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
