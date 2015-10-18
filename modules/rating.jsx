/**
 * @summary Constructor for the rating component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename rating
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
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

    return (
      <div className={this.className} {...this.props.divProps} ref="rating">
      </div>
    );
  }
};

ReactSUI.Rating.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  settings : React.PropTypes.object,
  children : React.PropTypes.node
};
