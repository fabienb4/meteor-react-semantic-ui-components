/**
 * @summary Constructor for the popup component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename popup
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Popup Settings](http://semantic-ui.com/modules/popup.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Popup = class Popup extends ReactSUI.Component {
  constructor(props) {
    super("ui popup", props);
  }
  componentDidMount() {
    $(this.refs.popup).prev().popup(this.props.settings);
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Popup Behavior](http://semantic-ui.com/modules/popup.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Popup
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.popup).prev().popup(behavior, ...options);
  }
  render() {
    let children = [];

    if (this.props.header) {
      children.push(
        <ReactSUI.Header
          key={children.length}
          text={this.props.header}
          nested="true" />
      );
    }

    if (this.props.content) {
      children.push(
        <div key={children.length} className="content">{this.props.content}</div>
      );
    }

    return (
      <div className={this.className} ref="popup">
        {children}
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Popup.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      header  : React.PropTypes.string,
      content : React.PropTypes.string,
      settings: React.PropTypes.object
    }
  }
);
