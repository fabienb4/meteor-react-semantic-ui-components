/**
 * @summary Constructor for the statistics component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Statistics = (props) => {
  let className = ReactSUI.utils.addClass("ui statistics", props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.Statistics.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      children: React.PropTypes.oneOfType([
        React.PropTypes.node,
        React.PropTypes.arrayOf(React.PropTypes.node)
      ])
    }
  }
);
