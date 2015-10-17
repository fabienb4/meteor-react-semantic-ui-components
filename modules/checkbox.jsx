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
 * @param  {String} props.name
 * @param  {Object} [props.inputProps] Optional.
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
    let inputProps = this.props.inputProps || {};
    let inputType  = this.props.type === "radio" ? "radio" : "checkbox";

    if (this.props.type) {
      className = ReactSUI.utils.addClass(className, this.props.type);
    }

    return (
      <div className={className} ref="checkbox">
        <ReactSUI.Input
          {...inputProps}
          simple="true"
          name={this.props.name}
          type={inputType} />
        <label>{this.props.label}</label>
      </div>
    );
  }
};

ReactSUI.Checkbox.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      type      : React.PropTypes.oneOf([
        "checkbox",
        "radio",
        "slider",
        "toggle"
      ]),
      name      : React.PropTypes.string.isRequired,
      inputProps: React.PropTypes.object,
      settings: React.PropTypes.object
    }
  }
);
