/**
 * @summary Constructor for the message component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename message
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.header] Optional.
 * @param  {String} [props.text] Optional.
 * @param  {Boolean} [props.dismissable] Optional.
 * @param  {String} [props.transition] Optional. Default: "fade down".
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
    let closeIcon, children = [];

    if (this.props.dismissable) {
      closeIcon = <ReactSUI.Icon name="close" handleClick={this.handleDismiss.bind(this)} />
    }

    if (this.props.header) {
      children.push(
        <ReactSUI.Header
          key={children.length}
          text={this.props.header}
          nested="true" />
      );
    }

    if (this.props.text) {
      children.push(
        <p key={children.length}>{this.props.text}</p>
      );
    }

    return (
      <div className={this.className} ref="message">
        {closeIcon}{children}{this.props.children}
      </div>
    );
  }
};

ReactSUI.Message.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      header     : React.PropTypes.string,
      text       : React.PropTypes.string,
      dismissable: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.bool
      ]),
      transition : React.PropTypes.string,
    }
  }
)
