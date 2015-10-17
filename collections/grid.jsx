/**
 * @summary Constructor for the grid component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Grid = (props) => {
  let className = ReactSUI.utils.addClass("ui grid", props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.Grid.propTypes = ReactSUI.Component.propTypes;

/**
 * @summary Constructor for the grid's row component.
 * @locus Client
 * @memberOf ReactSUI.Grid
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Grid.Row = (props) => {
  let className = ReactSUI.utils.addClass("row", props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.Grid.Row.propTypes = ReactSUI.Component.propTypes;

/**
 * @summary Constructor for the grid's column component.
 * @locus Client
 * @memberOf ReactSUI.Grid
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Grid.Column = (props) => {
  let className = ReactSUI.utils.addClass("column", props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.Grid.Column.propTypes = ReactSUI.Component.propTypes;
