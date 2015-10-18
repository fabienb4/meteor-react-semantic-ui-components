/**
 * @summary Constructor for the nag component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename nag
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Nag Settings](http://semantic-ui.com/modules/nag.html#/settings). Or for now: [Github file](https://github.com/Semantic-Org/Semantic-UI/blob/master/src/definitions/modules/nag.js#L429).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Nag = class Nag extends ReactSUI.Component {
  constructor(props) {
    super("ui nag", props);
  }
  componentDidMount() {
    let settings = this.props.settings || {};

    if (! $.cookie) {
      settings.storageMethod = "localstorage";
    }

    $(this.refs.nag).nag(settings);
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Nag Behavior](http://semantic-ui.com/modules/nag.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Nag
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.nag).nag(behavior, ...options);
  }
  render() {
    return (
      <div className={this.className} {...this.props.divProps} ref="nag">
        {this.props.children}
        <ReactSUI.Icon name="close" />
      </div>
    );
  }
};

ReactSUI.Nag.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  settings : React.PropTypes.object,
  children : React.PropTypes.node
};
