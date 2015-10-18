/**
 * @summary Constructor for the modal component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename modal
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Modal Settings](http://semantic-ui.com/modules/modal.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Modal = class Modal extends ReactSUI.Component {
  constructor(props) {
    super("ui modal", props);
  }
  componentDidMount() {
    $(this.refs.modal).modal(this.props.settings);
  }
  componentDidUpdate() {
    $(this.refs.modal).modal("refresh");
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Modal Behavior](http://semantic-ui.com/modules/modal.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Modal
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.modal).modal(behavior, ...options);
  }
  render() {
    return (
      <div className={this.className} {...this.props.divProps} ref="modal">
        <ReactSUI.Icon name="close" />
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Modal.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  settings : React.PropTypes.object,
  children : React.PropTypes.node
};
