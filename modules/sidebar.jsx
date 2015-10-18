/**
 * @summary Constructor for the sidebar component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename sidebar
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Sidebar Settings](http://semantic-ui.com/modules/sidebar.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Sidebar = class Sidebar extends ReactSUI.Component {
  constructor(props) {
    super("ui sidebar", props);
  }
  componentDidMount() {
    $(this.refs.sidebar).sidebar(this.props.settings);
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Sidebar Behavior](http://semantic-ui.com/modules/sidebar.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Sidebar
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.sidebar).sidebar(behavior, ...options);
  }
  render() {
    return (
      <div className={className} {...this.props.divProps} ref="sidebar">
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Sidebar.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  settings : React.PropTypes.object,
  children : React.PropTypes.node
};
