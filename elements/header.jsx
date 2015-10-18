/**
 * @summary Constructor for the header component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.nested] Optional.
 * @param  {String} [props.hSize] Optional.
 * @param  {Object} [props.hProps] Optional.
 * @param  {String} [props.hProps.$] Any property applicable to an &lt;h&gt; tag. If "className" supplied, override "props.className".
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Header = (props) => {
  let className = ReactSUI.utils.addClass(props.nested ? "header" : "ui header", props.className);

  if (props.hSize) {
    switch(props.hSize) {
      case "1":
        return <h1 className={className} {...props.hProps}>{props.children}</h1>;
      case "2":
        return <h2 className={className} {...props.hProps}>{props.children}</h2>;
      case "3":
        return <h3 className={className} {...props.hProps}>{props.children}</h3>;
      case "4":
        return <h4 className={className} {...props.hProps}>{props.children}</h4>;
      case "5":
        return <h5 className={className} {...props.hProps}>{props.children}</h5>;
      case "6":
        return <h6 className={className} {...props.hProps}>{props.children}</h6>;
    }
  } else {
    return <div className={className} {...props.divProps}>{props.children}</div>;
  }
};

ReactSUI.Header.propTypes = {
  className: React.PropTypes.string,
  nested   : React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  hSize    : React.PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]),
  hProps   : React.PropTypes.object,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
