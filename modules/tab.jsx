/**
 * @summary Constructor for the tab component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename tab
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} props.menuItems See [ReactSUI.Menu.Item](#ReactSUI-Menu-Item).
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
    let menu = (
      <ReactSUI.Menu key={children.length} ref="tab">
        {this.props.menuItems}
      </ReactSUI.Menu>
    );

    return <span>{menu}{this.props.children}</span>;
  }
};

ReactSUI.Tab.propTypes = {
  className: React.PropTypes.string,
  menuItems: React.PropTypes.node.isRequired,
  tabs     : React.PropTypes.node.isRequired,
  settings : React.PropTypes.object,
  children : React.PropTypes.node
};
