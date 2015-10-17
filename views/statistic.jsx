/**
 * @summary Constructor for the statistic component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.value] Optional.
 * @param  {String} [props.label] Optional.
 * @param  {String|Boolean} [props.labelFirst] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Statistic = (props) => {
  let className = ReactSUI.utils.addClass("ui statistic", props.className);
  let children  = [];

  if (props.value) {
    children.push(
      <div key={children.length} className="value">
        {props.value}
      </div>
    );
  }

  if (props.label) {
    children.push(
      <div key={children.length} className="label">
        {props.label}
      </div>
    );
  }

  if (props.labelFirst) {
    children.reverse();
  }

  return <div className={className}>{children}{props.children}</div>;
};

ReactSUI.Statistic.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      value     : React.PropTypes.string,
      label     : React.PropTypes.string,
      labelFirst: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.string
      ])
    }
  }
);
