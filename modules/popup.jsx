/**
 * @summary Constructor for the popup component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename popup
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
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
    return (
      <div className={this.className} {...this.props.divProps} ref="popup">
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Popup.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  settings : React.PropTypes.object,
  children : React.PropTypes.node
};
