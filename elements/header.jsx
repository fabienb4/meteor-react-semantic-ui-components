/**
 * @summary Constructor for the header component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.nested] Optional.
 * @param  {String} [props.hSize] Optional.
 * @param  {String} [props.text] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Header = (props) => {
  let className = ReactSUI.utils.addClass(props.nested ? "header" : "ui header", props.className);

  if (props.hSize) {
    switch(props.hSize) {
      case "1":
        return <h1 className={className}>{props.text}{props.children}</h1>;
      case "2":
        return <h2 className={className}>{props.text}{props.children}</h2>;
      case "3":
        return <h3 className={className}>{props.text}{props.children}</h3>;
      case "4":
        return <h4 className={className}>{props.text}{props.children}</h4>;
      case "5":
        return <h5 className={className}>{props.text}{props.children}</h5>;
      case "6":
        return <h6 className={className}>{props.text}{props.children}</h6>;
    }
  } else {
    return <div className={className}>{props.text}{props.children}</div>;
  }
};

ReactSUI.Header.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      nested: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.bool
      ]),
      hSize : React.PropTypes.oneOf([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
      ]),
      text  : React.PropTypes.string
    }
  }
);
