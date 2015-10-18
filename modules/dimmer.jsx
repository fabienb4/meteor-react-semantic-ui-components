/**
 * @summary Constructor for the dimmer component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename dimmer
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Dimmer Settings](http://semantic-ui.com/modules/dimmer.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Dimmer = class Dimmer extends ReactSUI.Component {
  constructor(props) {
    super("ui dimmer", props);
  }
  componentDidMount() {
    $(this.refs.dimmer).dimmer(this.props.settings);
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Dimmer Behavior](http://semantic-ui.com/modules/dimmer.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Dimmer
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.dimmer).dimmer(behavior, ...options);
  }
  render() {
    return (
      <div className={this.className} {...this.props.divProps} ref="dimmer">
        <div className="content">
          <div className="center">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
};

ReactSUI.Dimmer.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  settings : React.PropTypes.object,
  children : React.PropTypes.node
};
