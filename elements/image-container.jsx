/**
 * @summary Constructor for the imageContainer component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {Node} props.children
 * @return {Node}
 */
ReactSUI.ImageContainer = (props) => {
  let className = ReactSUI.utils.addClass("ui image", props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.ImageContainer.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  { $merge: { children: React.PropTypes.node.isRequired } }
);

/**
 * @summary Constructor for the imageContainer's img component.
 * @locus Client
 * @memberOf ReactSUI.ImageContainer
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {String} props.src
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.ImageContainer.Img = (props) => {
  return <img className={props.className} src={props.src} />;
};

ReactSUI.ImageContainer.Img.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      src: React.PropTypes.string.isRequired
    }
  }
);

/**
 * @summary Constructor for the imageContainer's svg component.
 * @locus Client
 * @memberOf ReactSUI.ImageContainer
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.width] Optional.
 * @param  {String} [props.height] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.ImageContainer.Svg = (props) => {
  return (
    <svg className={props.className} width={props.width} height={props.height}>
      {props.children}
    </svg>
  );
};

ReactSUI.ImageContainer.Svg.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      width : React.PropTypes.string,
      height: React.PropTypes.string
    }
  }
);
