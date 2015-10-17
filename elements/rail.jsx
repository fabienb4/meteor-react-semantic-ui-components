/**
 * @summary Constructor for the rail component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {String} props.side
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Rail = (props) => {
  let className = ReactSUI.utils.addClass("ui rail", props.side, props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.Rail.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      side: React.PropTypes.oneOf([
        "left",
        "right"
      ]).isRequired
    }
  }
);
