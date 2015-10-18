/**
 * @summary Constructor for the shape component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename shape
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
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
    return (
      <div className={this.className} {...this.props.divProps} ref="shape">
        <div className="sides">
          {this.props.children}
        </div>
      </div>
    );
  }
};

ReactSUI.Shape.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  settings : React.PropTypes.object,
  children : React.PropTypes.node
};

/**
 * @summary Constructor for the Shape's Side component.
 * @memberOf ReactSUI.Shape
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Shape.Side = (props) => {
  let className = ReactSUI.utils.addClass("side", props.className);

  return (
    <div className={className} {...props.divProps}>
      {props.children}
    </div>
  );
};

ReactSUI.Shape.Side.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
