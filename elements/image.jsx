/**
 * @summary Constructor for the image component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {String} props.src
 * @param  {Object} [props.imgProps] Optional.
 * @param  {String} [props.imgProps.$] Any property applicable to an &lt;img&gt; tag. If "className", "src" supplied, override "props.className", "props.src".
 * @return {Node}
 */
ReactSUI.Image = (props) => {
  let className = ReactSUI.utils.addClass("ui image", props.className);

  return <img className={className} src={props.src} {...props.imgProps} />;
};

ReactSUI.Image.propTypes = {
  className: React.PropTypes.string,
  src      : React.PropTypes.string.isRequired,
  imgProps : React.PropTypes.object
};
