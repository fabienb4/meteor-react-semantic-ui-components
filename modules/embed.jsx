/**
 * @summary Constructor for the embed component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename embed
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Embed Settings](http://semantic-ui.com/modules/embed.html#/settings).
 */
ReactSUI.Embed = class Embed extends ReactSUI.Component {
  constructor(props) {
    super("ui embed", props);
  }
  componentDidMount() {
    $(this.refs.embed).embed(this.props.settings);
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Embed Behavior](http://semantic-ui.com/modules/embed.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Embed
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.embed).embed(behavior, ...options);
  }
  render() {
    return (
      <div className={this.className} {...this.props.divProps} ref="embed">
      </div>
    );
  }
};

ReactSUI.Embed.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  settings : React.PropTypes.object
};
