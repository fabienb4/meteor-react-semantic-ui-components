/**
 * @summary Constructor for the segments component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object[]} [props.segments] Optional. See [ReactSUI.Segment properties](#ReactSUI-Segment).
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Segments = (props) => {
  let className = ReactSUI.utils.addClass("ui segments", props.className);
  let children  = _.map(props.segments, (segment, i) => <ReactSUI.Segment key={i} {...segment} />);

  return <div className={className}>{children}{props.children}</div>;
};

ReactSUI.Segments.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      segments: React.PropTypes.arrayOf(React.PropTypes.object)
    }
  }
);
