/**
 * @summary Constructor for the checkbox component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename checkbox
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.type] Optional. Default: "checkbox"
 * @param  {Object} [props.inputProps] Optional.
 * @param  {String} [props.inputProps.$] Any property applicable to an &lt;input&gt; tag, except "type".
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Checkbox Settings](http://semantic-ui.com/modules/checkbox.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Checkbox = class Checkbox extends ReactSUI.Component {
  constructor(props) {
    super("ui checkbox", props);
  }
  componentDidMount() {
    $(this.refs.checkbox).checkbox(this.props.settings);
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Checkbox Behavior](http://semantic-ui.com/modules/checkbox.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Checkbox
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.checkbox).checkbox(behavior, ...options);
  }
  render() {
    let className  = this.className;
    let inputType  = this.props.type === "radio" ? "radio" : "checkbox";

    if (this.props.type) {
      className = ReactSUI.utils.addClass(className, this.props.type);
    }

    return (
      <div className={className} {...this.props.divProps} ref="checkbox">
        <ReactSUI.Input inputProps={this.props.inputProps} simple="true" type={inputType} />
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Checkbox.propTypes = {
  className: React.PropTypes.string,
  type      : React.PropTypes.oneOf([
    "checkbox",
    "radio",
    "slider",
    "toggle"
  ]),
  inputProps: React.PropTypes.object,
  divProps : React.PropTypes.object,
  settings : React.PropTypes.object,
  children : React.PropTypes.node
};
