/**
 * @summary Constructor for the imageContainer component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node} props.children
 * @return {Node}
 */
ReactSUI.ImageContainer = (props) => {
  let className = ReactSUI.utils.addClass("ui image", props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.ImageContainer.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};

/**
 * @summary Constructor for the imageContainer's img component.
 * @locus Client
 * @memberOf ReactSUI.ImageContainer
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {String} props.src
 * @param  {Object} [props.imgProps] Optional.
 * @param  {String} [props.imgProps.$] Any property applicable to an &lt;img&gt; tag. If "className", "src" supplied, override "props.className", "props.src".
 * @return {Node}
 */
ReactSUI.ImageContainer.Img = (props) => {
  return <img className={props.className} src={props.src} {...props.imgProps} />;
};

ReactSUI.ImageContainer.Img.propTypes = {
  className: React.PropTypes.string,
  src      : React.PropTypes.string.isRequired,
  imgProps : React.PropTypes.object
};

/**
 * @summary Constructor for the imageContainer's svg component.
 * @locus Client
 * @memberOf ReactSUI.ImageContainer
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.svgProps] Optional.
 * @param  {String} [props.svgProps.$] Any property applicable to a &lt;svg&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.ImageContainer.Svg = (props) => {
  return (
    <svg className={props.className} {...props.svgProps}>
      {props.children}
    </svg>
  );
};

ReactSUI.ImageContainer.Svg.propTypes = {
  className: React.PropTypes.string,
  svgProps : React.PropTypes.object,
  children : React.PropTypes.node
};
