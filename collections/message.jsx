/**
 * @summary Constructor for the message component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename message
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Boolean} [props.dismissable] Optional.
 * @param  {String} [props.transition] Optional. Default: "fade down".
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Message = class Message extends ReactSUI.Component {
  constructor(props) {
    super("ui message", props);
  }
  handleDismiss() {
    $(this.refs.message).transition(this.props.transition || "fade down", function() {
      this.remove();
    });
  }
  render() {
    let closeIcon;

    if (this.props.dismissable) {
      closeIcon = <ReactSUI.Icon name="close" iProps={{ onClick: this.handleDismiss.bind(this) }} />
    }

    return (
      <div className={this.className} {...this.props.divProps} ref="message">
        {closeIcon}{this.props.children}
      </div>
    );
  }
};

ReactSUI.Message.propTypes = {
  className  : React.PropTypes.string,
  dismissable: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  transition : React.PropTypes.string,
  divProps   : React.PropTypes.object,
  children   : React.PropTypes.node
};
