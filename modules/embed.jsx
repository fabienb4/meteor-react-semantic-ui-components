/**
 * @summary Constructor for the embed component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename embed
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.source] Optional.
 * @param  {String} [props.id] Optional.
 * @param  {String} [props.placeholder] Optional.
 * @param  {String} [props.icon] Optional.
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
      <div
        className={this.className}
        ref="embed"
        data-source={this.props.source}
        data-id={this.props.id}
        data-placeholder={this.props.placeholder}
        data-icon={this.props.icon}
        ></div>
    );
  }
};

ReactSUI.Embed.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      source     : React.PropTypes.string,
      id         : React.PropTypes.string,
      placeholder: React.PropTypes.string,
      icon       : React.PropTypes.string,
      settings   : React.PropTypes.object
    }
  }
);
