/**
 * @summary Constructor for the dropdown component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename dropdown
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Dropdown Settings](http://semantic-ui.com/modules/dropdown.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Dropdown = class Dropdown extends ReactSUI.Component {
  constructor(props) {
    super("ui dropdown", props);
  }
  componentDidMount() {
    $(this.refs.dropdown).dropdown(this.props.settings);
  }
  componentDidUpdate() {
    $(this.refs.dropdown).dropdown("refresh");
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Dropdown Behavior](http://semantic-ui.com/modules/dropdown.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Dropdown
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.dropdown).dropdown(behavior, ...options);
  }
  render() {

    return (
      <div className={this.className} {...this.props.divProps} ref="dropdown">
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Dropdown.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  settings : React.PropTypes.object,
  children : React.PropTypes.node
};
