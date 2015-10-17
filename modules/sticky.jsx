/**
 * @summary Constructor for the sticky component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename sticky
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Sticky Settings](http://semantic-ui.com/modules/sticky.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Sticky = class Sticky extends ReactSUI.Component {
  constructor(props) {
    super("ui sticky", props);
  }
  componentDidMount() {
    $(this.refs.sticky).sticky(this.props.settings);
  }
  componentDidUpdate() {
    $(this.refs.sticky).sticky("refresh");
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Sticky Behavior](http://semantic-ui.com/modules/sticky.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Sticky
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.sticky).sticky(behavior, ...options);
  }
  render() {
    return (
      <div className={this.className} ref="sticky">
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Sticky.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      settings: React.PropTypes.object
    }
  }
);
