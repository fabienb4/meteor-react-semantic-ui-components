/**
 * @summary Constructor for the loader component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.text] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Loader = (props) => {
  let className = ReactSUI.utils.addClass("ui loader", props.className);

  if (props.text) {
    className = ReactSUI.utils.addClass(className, "text");
  }

  return <div className={className}>{props.text}{props.children}</div>;
};

ReactSUI.Loader.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      text: React.PropTypes.string
    }
  }
);
