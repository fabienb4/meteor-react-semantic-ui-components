/**
 * @summary Constructor for the feed component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Feed = (props) => {
  let className = ReactSUI.utils.addClass("ui feed", props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Feed.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};

/**
 * @summary Constructor for the feed's event component.
 * @locus Client
 * @memberOf ReactSUI.Feed
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Feed.Event = (props) => {
  let className = ReactSUI.utils.addClass("event", props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Feed.Event.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
