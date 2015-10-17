/**
 * @summary Constructor for the modal component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename modal
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.header] Optional.
 * @param  {String|Object} [props.content] Optional.
 * @param  {String|Object} [props.content.image] Optional. See [ReactSUI.Image properties](#ReactSUI-Image) or [ReactSUI.ImageContainer properties](#ReactSUI-ImageContainer).
 * @param  {String} [props.content.description] Optional.
 * @param  {Object} [props.actions] Optional. See [ReactSUI.Button properties](#ReactSUI-Button).
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
    let children  = [];

    if (this.props.header) {
      children.push(
        <ReactSUI.Header
          key={children.length}
          text={this.props.header}
          nested="true" />
      );
    }

    if (this.props.content) {
      if (this.props.content.image || this.props.content.description) {
        let contentChildren = [];

        if (this.props.content.image) {
          if (_.isString(this.props.content.image)) {
            contentChildren.push(
              <ReactSUI.Image
                key={contentChildren.length}
                src={this.props.content.image} />
            );
          } else {
            contentChildren.push(
              <ReactSUI.ImageContainer
                key={contentChildren.length}
                className={this.props.content.image.className}>
                <ReactSUI.ImageContainer.Img src={this.props.content.image.src} />
              </ReactSUI.ImageContainer>
            );
          }
        }

        if (this.props.content.description) {
          contentChildren.push(
            <div key={contentChildren.length} className="description">
              {this.props.content.description}
            </div>
          )
        }

        let contentClassName = this.props.content.image ? "image content" : "content";

        children.push(
          <div key={children.length} className={contentClassName}>
            {contentChildren}
          </div>
        );
      } else {
        children.push(
          <div key={children.length} className="content">
            {this.props.content}
          </div>
        );
      }
    }

    if (this.props.actions) {
      let actionsChildren = _.map(this.props.actions, (action, i) => {
        let className   = ReactSUI.utils.addClass(action.className, action.type);
        let buttonProps = _.omit(action, "className", "type");

        return (
          <ReactSUI.Button key={i} className={className} {...buttonProps} />
        );
      });

      children.push(
        <div key={children.length} className="actions">
          {actionsChildren}
        </div>
      );
    }

    return (
      <div className={this.className} ref="modal">
        <ReactSUI.Icon name="close" />
        {children}
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Modal.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      header  : React.PropTypes.string,
      content : React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.shape({
          description: React.PropTypes.string
        })
      ]),
      actions : React.PropTypes.arrayOf(
        React.PropTypes.shape({
          type     : React.PropTypes.oneOf([
            "positive",
            "approve",
            "ok",
            "negative",
            "deny",
            "cancel"
          ])
        })
      ),
      settings: React.PropTypes.object
    }
  }
);
