/**
 * @summary Constructor for the sidebar component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename sidebar
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.menu] Optional.
 * @param  {String} [props.menu.className] Optional.
 * @param  {Object[]} [props.menu.items] Optional. See [ReactSUI.Menu.Item properties](#ReactSUI-Menu-Item).
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
    let className = this.className;
    let menuChildren;

    if (this.props.menu) {
      className    = ReactSUI.utils.addClass(className, "menu", this.props.menu.className);
      menuChildren = _.map(
        this.props.menu.items,
        (item, i) => <ReactSUI.Menu.Item key={i} {...item} />
      );
    }

    return (
      <div className={className} ref="sidebar">
        {menuChildren}
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Sidebar.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      menu    : React.PropTypes.shape({
        className: React.PropTypes.string,
        items    : React.PropTypes.arrayOf(React.PropTypes.object)
      }),
      settings: React.PropTypes.object
    }
  }
);
