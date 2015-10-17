/**
 * @summary Constructor for the tab component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename tab
 * @param  {Object} props
 * @param  {Object} props.menu
 * @param  {String} [props.menu.className] Optional.
 * @param  {String[]|Object[]} props.menu.items
 * @param  {String} [props.menu.items.dataTab] Optional.
 * @param  {String} props.menu.items.text
 * @param  {Object[]} props.tabs
 * @param  {String} [props.tabs.className] Optional.
 * @param  {Object[]} [props.tabs.dataTab] Optional.
 * @param  {Node|Node[]} [props.tabs.children] Optional.
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Tab Settings](http://semantic-ui.com/modules/tab.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Tab = class Tab extends ReactSUI.Component {
  constructor(props) {
    super("", props);
  }
  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.tab)).children().tab(this.props.settings);
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Tab Behavior](http://semantic-ui.com/modules/tab.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Tab
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(ReactDOM.findDOMNode(this.refs.tab)).children().tab(behavior, ...options);
  }
  render() {
    let children     = [];
    let menuChildren = this.props.menu && _.map(this.props.menu.items, (item, i) => {
      if (_.isString(item)) {
        return <a key={i} className="item">{item}</a>;
      } else {
        return (
          <a key={i} className="item" data-tab={item.dataTab}>
            {item.text}
          </a>
        );
      }
    });
    let tabs         = _.map(this.props.tabs, (tab, i) => {
      let className = ReactSUI.utils.addClass("ui tab", tab.className);

      return (
        <div key={i} className={className} data-tab={tab.dataTab}>
          {tab.children}
        </div>
      );
    });

    children.push(
      <ReactSUI.Menu
        key={children.length}
        className={this.props.menu && this.props.menu.className}
        ref="tab">
        {menuChildren}
      </ReactSUI.Menu>
    );

    children.push(tabs);

    return <span>{children}</span>;
  }
};

ReactSUI.Tab.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      menu    : React.PropTypes.shape({
        className: React.PropTypes.string,
        items    : React.PropTypes.oneOfType([
          React.PropTypes.arrayOf(React.PropTypes.string),
          React.PropTypes.arrayOf(
            React.PropTypes.shape({
              dataTab: React.PropTypes.string,
              text   : React.PropTypes.string.isRequired
            })
          )
        ]).isRequired
      }).isRequired,
      tabs    : React.PropTypes.arrayOf(
        React.PropTypes.shape({
          className: React.PropTypes.string,
          dataTab  : React.PropTypes.string,
          children : React.PropTypes.Node
        })
      ).isRequired,
      settings: React.PropTypes.object
    }
  }
);
