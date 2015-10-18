/**
 * @summary Constructor for the flag component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {String} props.country
 * @return {Node}
 */
ReactSUI.Flag = (props) => {
  let className = ReactSUI.utils.addClass("flag", props.country, props.className);

  return <i className={className}></i>;
};

ReactSUI.Flag.propTypes = {
  className: React.PropTypes.string,
  country  : React.PropTypes.string.isRequired
};
