/**
 * @summary Constructor for the menu component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename menu
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Boolean} [props.nested] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Menu = class Menu extends ReactSUI.Component {
  constructor(props) {
    super("menu", props);
  }
  render() {
    let className = ReactSUI.utils.addClass(this.className, this.props.nested ? "" : "ui");

    return <div className={className} {...this.props.divProps}>{this.props.children}</div>;
  }
};

ReactSUI.Menu.propTypes = {
  className: React.PropTypes.string,
  nested   : React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};

/**
 * @summary Constructor for the menu's item component.
 * @locus Client
 * @memberOf ReactSUI.Menu
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.linkProps] Optional.
 * @param  {String} [props.linkProps.$] Any property applicable to an &lt;a&gt; tag. If "className" supplied, override "props.className".
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Menu.Item = (props) => {
  let className = ReactSUI.utils.addClass("item", props.className);

  if (props.linkProps) {
    return <a className={className} {...props.linkProps}>{props.children}</a>;
  } else {
    return <div className={className} {...props.divProps}>{props.children}</div>;
  }
};

ReactSUI.Menu.Item.propTypes = {
  className: React.PropTypes.string,
  linkProps: React.PropTypes.object,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
