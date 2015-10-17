/**
 * @summary Constructor for the image component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {String} props.src
 * @param  {Object} [props.imageProps] Optional.
 * @param  {String} [props.imageProps.$] Any property applicable to an &lt;img&gt; tag.
 * @return {Node}
 */
ReactSUI.Image = (props) => {
  let className = ReactSUI.utils.addClass("ui image", props.className);

  return <img className={className} src={props.src} {...props.imageProps} />;
};

ReactSUI.Image.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      src       : React.PropTypes.string.isRequired,
      imageProps: React.PropTypes.object
    }
  }
);
