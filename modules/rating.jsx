/**
 * @summary Constructor for the rating component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename rating
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.type] Optional. Default "".
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Rating Settings](http://semantic-ui.com/modules/rating.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Rating = class Rating extends ReactSUI.Component {
  constructor(props) {
    super("ui rating", props);
  }
  componentDidMount() {
    $(this.refs.rating).rating(this.props.settings);
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Rating Behavior](http://semantic-ui.com/modules/rating.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Rating
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.rating).rating(behavior, ...options);
  }
  render() {
    let className = ReactSUI.utils.addClass(this.className, this.props.type ? this.props.type : "");

    return <div className={className} ref="rating"></div>;
  }
};

ReactSUI.Rating.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      type    : React.PropTypes.oneOf([
        "star",
        "heart"
      ]),
      settings: React.PropTypes.object
    }
  }
);
