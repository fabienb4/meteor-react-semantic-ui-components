/**
 * @summary Constructor for the dropdown component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename dropdown
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.iconProps] Optional. See [ReactSUI.Icon properties](#ReactSUI-Icon).
 * @param  {String} [props.iconSide] Optional. Default: "left".
 * @param  {String} [props.display] Optional.
 * @param  {Object} [props.selection] Optional.
 * @param  {Object} props.selection.inputProps
 * @param  {String} [props.selection.inputProps.$] Any property applicable to an &lt;input&gt; tag (except "type").
 * @param  {String} props.selection.placeholder
 * @param  {Object[]} [props.menuItems] Optional. See [ReactSUI.Dropdown.MenuItem properties](#ReactSUI-Dropdown-MenuItem).
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Dropdown Settings](http://semantic-ui.com/modules/dropdown.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Dropdown = class Dropdown extends ReactSUI.Component {
  constructor(props) {
    super("ui dropdown", props);
  }
  componentDidMount() {
    $(this.refs.dropdown).dropdown(this.props.settings);
  }
  componentDidUpdate() {
    $(this.refs.dropdown).dropdown("refresh");
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Dropdown Behavior](http://semantic-ui.com/modules/dropdown.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Dropdown
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.dropdown).dropdown(behavior, ...options);
  }
  render() {
    let input, display, before, after;
    let icon = <ReactSUI.Icon {...this.props.iconProps || { name: "dropdown" }} />;

    if (this.props.selection) {
      input   = <ReactSUI.Input {...this.props.selection.inputProps} type="hidden" />;
      display = <div className="default text">{this.props.selection.placeholder || "Select"}</div>;
    } else {
      display = <div className="text">{this.props.display || "Select"}</div>;
    }

    if (this.props.iconSide === "right") {
      before = display;
      after  = icon;
    } else {
      before = icon;
      after  = display;
    }

    let menuChildren = _.map(this.props.menuItems, (menuItem, i) => {
      return <ReactSUI.Dropdown.MenuItem key={i} {...menuItem} />;
    });

    return (
      <div className={this.className} ref="dropdown">
        {input}
        {before}
        {after}
        <ReactSUI.Menu nested="true">
          {menuChildren}
        </ReactSUI.Menu>
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Dropdown.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      iconProps: React.PropTypes.object,
      iconSide : React.PropTypes.oneOf([
        "left",
        "right"
      ]),
      display  : React.PropTypes.string,
      selection: React.PropTypes.shape({
        inputProps : React.PropTypes.object.isRequired,
        placeholder: React.PropTypes.string.isRequired
      }),
      menuItems: React.PropTypes.arrayOf(React.PropTypes.object),
      settings : React.PropTypes.object
    }
  }
);


/**
 * @summary Constructor for the dropdown's menuItem component.
 * @locus Client
 * @memberOf ReactSUI.Dropdown
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.linkProps] Optional.
 * @param  {String} props.linkProps.text
 * @param  {String} [props.linkProps.$] Any property applicable to an &lt;a&gt; tag.
 * @param  {String} [props.header] Optional.
 * @param  {Boolean} [props.divider] Optional.
 * @param  {Object} [props.iconProps] Optional. See [ReactSUI.Icon](#ReactSUI-Icon).
 * @param  {Object} [props.labelProps] Optional. See [ReactSUI.Label](#ReactSUI-Label).
 * @param  {Object} [props.imageProps] Optional. See [ReactSUI.Image](#ReactSUI-Image).
 * @param  {String} [props.description] Optional.
 * @param  {String} [props.text] Optional.
 * @param  {Object} [props.inputProps] Optional. See [ReactSUI.Input](#ReactSUI-Input).
 * @param  {Object} [props.messageProps] Optional. See [ReactSUI.Message](#ReactSUI-Message).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Dropdown.MenuItem = (props) => {
  let className = ReactSUI.utils.addClass("item", props.className);

  if (props.header) {
    return (
      <ReactSUI.Header text={props.header} nested="true" />
    );
  } else if (props.divider) {
    return <ReactSUI.Divider />;
  } else {
    let children = [];

    if (props.iconProps) {
      children.push(
        <ReactSUI.Icon key={children.length} {...props.iconProps} />
      );
    } else if (props.labelProps) {
      children.push(
        <ReactSUI.Label key={children.length} {...props.labelProps} />
      );
    }

    if (props.imageProps) {
      children.push(
        <ReactSUI.Image key={children.length} {...props.imageProps} />
      );
    }

    if (props.description) {
      children.push(
        <span key={children.length} className="description">
          {props.description}
        </span>
      );
    }

    if (props.text) {
      children.push(
        <span key={children.length} className="text">
          {props.text}
        </span>
      );
    }

    if (props.messageProps) {
      children.push(
        <ReactSUI.Message key={children.length} {...props.messageProps} />
      );
    }

    if (props.inputProps) {
      children.push(
        <ReactSUI.Input key={children.length} {...props.inputProps} />
      );
    }

    return <div className={className}>{children}{props.children}</div>;
  }
};

ReactSUI.Dropdown.MenuItem.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      header      : React.PropTypes.string,
      divider     : React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.bool
      ]),
      iconProps   : React.PropTypes.object,
      labelProps  : React.PropTypes.object,
      imageProps  : React.PropTypes.object,
      description : React.PropTypes.string,
      text        : React.PropTypes.string,
      inputProps  : React.PropTypes.object,
      messageProps: React.PropTypes.object
    }
  }
);
