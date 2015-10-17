/**
 * @summary Constructor for the label component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.text] Optional.
 * @param  {Object} [props.linkProps] Optional.
 * @param  {String} [props.linkProps.$] Any property applicable to an &lt;a&gt;.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Label = (props) => {
  let className = ReactSUI.utils.addClass("ui label", props.className);

  if (props.linkProps) {
    return <a className={className} {...props.linkProps}>{props.children}</a>;
  } else {
    return <div className={className}>{props.text}{props.children}</div>;
  }
};

ReactSUI.Label.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      text: React.PropTypes.string
    }
  }
);

/**
 * @summary Constructor for the label's detail component.
 * @locus Client
 * @memberOf ReactSUI.Label
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.linkProps] Optional.
 * @param  {String} [props.linkProps.$] Any property applicable to an &lt;a&gt; tag.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Label.Detail = (props) => {
  if (props.linkProps) {
    return <a className="detail" {...props.linkProps}>{props.children}</a>;
  } else {
    return <div className="detail">{props.children}</div>;
  }
};

ReactSUI.Label.Detail.propTypes = ReactSUI.Component.propTypes;
