/**
 * @summary Constructor for the icon component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {String} props.name
 * @param  {Object} [props.iProps] Optional.
 * @param  {String} [props.iProps.$] Any property applicable to an &lt;i&gt; tag. If "className" supplied, override "props.className".
 * @return {Node}
 */
ReactSUI.Icon = (props) => {
  let className = ReactSUI.utils.addClass("icon", props.name, props.className);

  return <i className={className} {...props.iProps}></i>;
};

ReactSUI.Icon.propTypes = {
  className  : React.PropTypes.string,
  name       : React.PropTypes.string.isRequired,
  iProps     : React.PropTypes.object
};
