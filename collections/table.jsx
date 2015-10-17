/**
 * @summary Constructor for the table component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String[][]} [props.thead] Optional.
 * @param  {String[][]} [props.tbody] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Table = (props) => {
  let className = ReactSUI.utils.addClass("ui table", props.className);
  let children  = [];

  if (props.thead) {
    let theadRows = _.map(props.thead, (row, i) => {
      let rowCells = _.map(row, (cell, j) => <th key={j}>{cell}</th>);

      return <tr key={i}>{rowCells}</tr>;
    });

    children.push(
      <thead key={children.length}>{theadRows}</thead>
    );
  }

  if (props.tbody) {
    let tbodyRows = _.map(props.tbody, (row, i) => {
      let rowCells = _.map(row, (cell, j) => <td key={j}>{cell}</td>);

      return <tr key={i}>{rowCells}</tr>;
    });

    children.push(
      <tbody key={children.length}>{tbodyRows}</tbody>
    );
  }

  return <table className={className}>{children}{props.children}</table>;
};

ReactSUI.Table.propTypes = ReactSUI.Component.propTypes;
