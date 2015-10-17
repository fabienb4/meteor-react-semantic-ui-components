/**
 * @summary Constructor for the shape component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename shape
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.type] Optional. Default "".
 * @param  {Node[]} [props.sides] Optional. See [ReactSUI.Shape.Side properties](#ReactSUI-Shape-Side).
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Shape Settings](http://semantic-ui.com/modules/shape.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Shape = class Shape extends ReactSUI.Component {
  constructor(props) {
    super("ui shape", props);
  }
  componentDidMount() {
    $(this.refs.shape).shape(this.props.settings);
  }
  componentDidUpdate() {
    $(this.refs.shape).shape("refresh");
    $(this.refs.shape).shape("repaint");
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Shape Behavior](http://semantic-ui.com/modules/shape.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Shape
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.shape).shape(behavior, ...options);
  }
  render() {
    let className = ReactSUI.utils.addClass(this.className, this.props.type);
    let children  = _.map(this.props.sides, (side, i) => {
      return (
        <ReactSUI.Shape.Side key={i} className={i === 0 ? "active" : ""}>
          {side}
        </ReactSUI.Shape.Side>
      );
    });

    return (
      <div className={className} ref="shape">
        <div className="sides">
          {children}
          {this.props.children}
        </div>
      </div>
    );
  }
};

ReactSUI.Shape.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      type    : React.PropTypes.oneOf([
        "cube",
        "text"
      ]),
      side    : React.PropTypes.arrayOf(React.PropTypes.node),
      settings: React.PropTypes.object
    }
  }
);

/**
 * @summary Constructor for the Shape's Side component.
 * @memberOf ReactSUI.Shape
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Shape.Side = (props) => {
  let className = ReactSUI.utils.addClass("side", props.className);

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

ReactSUI.Shape.Side.propTypes = ReactSUI.Component.propTypes;
