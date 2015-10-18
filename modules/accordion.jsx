/**
 * @summary Constructor for the accordion component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename accordion
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Boolean} [props.nested] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Accordion Settings](http://semantic-ui.com/modules/accordion.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Accordion = class Accordion extends ReactSUI.Component {
  constructor(props) {
    super("accordion", props);
  }
  componentDidMount() {
    $(this.refs.accordion).accordion(this.props.settings);
  }
  componentDidUpdate() {
    $(this.refs.accordion).accordion("refresh");
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Accordion Behavior](http://semantic-ui.com/modules/accordion.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Accordion
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.accordion).accordion(behavior, ...options);
  }
  render() {
    let className = ReactSUI.utils.addClass(this.className, this.props.nested ? "" : "ui");

    return (
      <div className={className} {...this.props.divProps} ref="accordion">
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Accordion.propTypes = {
  className: React.PropTypes.string,
  nested   : React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  divProps : React.PropTypes.object,
  settings : React.PropTypes.object,
  children : React.PropTypes.node
};
