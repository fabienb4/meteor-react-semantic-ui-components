/**
 * @summary Constructor for the labels component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object[]} [props.labels] Optional. See [ReactSUI.Label properties](#ReactSUI-Label).
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Labels = (props) => {
  let className = ReactSUI.utils.addClass("ui labels", props.className);
  let children  = _.map(props.labels, (label, i) => <ReactSUI.Label key={i} {...label} />);

  return <div className={className}>{children}{props.children}</div>;
};

ReactSUI.Labels.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      labels: React.PropTypes.arrayOf(React.PropTypes.object)
    }
  }
);
