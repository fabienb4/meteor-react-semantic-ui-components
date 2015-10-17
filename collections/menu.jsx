/**
 * @summary Constructor for the menu component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename menu
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Boolean} [props.nested] Optional.
 * @param  {Object[]} [props.items] Optional. See [ReactSUI.Menu.Item properties](#ReactSUI-Menu-Item)
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Menu = class Menu extends ReactSUI.Component {
  constructor(props) {
    super("menu", props);
  }
  render() {
    let className = ReactSUI.utils.addClass(this.className, this.props.nested ? "" : "ui");
    let children  = _.map(
      this.props.items,
      (item, i) => <ReactSUI.Menu.Item key={i} {...item} />
    );

    return <div className={className}>{children}{this.props.children}</div>;
  }
};

ReactSUI.Menu.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      nested: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.bool
      ]),
      items: React.PropTypes.arrayOf(React.PropTypes.object)
    }
  }
);

/**
 * @summary Constructor for the menu's item component.
 * @locus Client
 * @memberOf ReactSUI.Menu
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.linkProps] Optional.
 * @param  {String} props.linkProps.text
 * @param  {String} [props.linkProps.$] Any property applicable to an &lt;a&gt; tag.
 * @param  {String} [props.header] Optional.
 * @param  {String} [props.text] Optional.
 * @param  {Object} [props.inputProps] Optional. See [ReactSUI.Input properties](#ReactSUI-Input)
 * @param  {Object} [props.buttonProps] Optional. See [ReactSUI.Button properties](#ReactSUI-Button)
 * @param  {Object} [props.dropdownProps] Optional. See [ReactSUI.Dropdown properties](#ReactSUI-Dropdown)
 * @param  {Object} [props.popupProps] Optional. See [ReactSUI.Popup properties](#ReactSUI-Popup)
 * @param  {Object} [props.searchProps] Optional. See [ReactSUI.Search properties](#ReactSUI-Search)
 * @param  {Object} [props.subMenuProps] Optional. See [ReactSUI.Menu properties](#ReactSUI-Menu)
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Menu.Item = (props) => {
  let className = ReactSUI.utils.addClass("item", props.className);

  if (props.linkProps) {
    let linkProps = _.omit(props.linkProps, "text");

    return <a className={className} {...linkProps}>{props.linkProps.text}{props.children}</a>;
  } else {
    let children;

    if (props.header) {
      children.push(
        <ReactSUI.Header
          key={children.length}
          text={props.header}
          nested="true" />
      );
    }

    if (props.text) {
      children.push(
        <p key={children.length}>{props.text}</p>
      );
    } else if (props.inputProps) {
      children.push(
        <ReactSUI.Input key={children.length} {...props.inputProps} />
      );
    } else if (props.buttonProps) {
      children.push(
        <ReactSUI.Button key={children.length} {...props.buttonProps} />
      );
    } else if (props.dropdownProps) {
      children.push(
        <ReactSUI.Dropdown key={children.length} {...props.dropdownProps} />
      );
    } else if (props.popupProps) {
      children.push(
        <ReactSUI.Popup key={children.length} {...props.popupProps} />
      );
    } else if (props.searchProps) {
      children.push(
        <ReactSUI.Search key={children.length} {...props.searchProps} />
      );
    } else if (props.subMenuProps) {
      children.push(
        <ReactSUI.Menu
          key={children.length}
          {...props.subMenuProps}
          nested="true" />
      );
    }

    return <div className={className}>{children}{props.children}</div>;
  }
};

ReactSUI.Menu.Item.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      linkProps    : React.PropTypes.shape({
        text: React.PropTypes.string.isRequired
      }),
      header       : React.PropTypes.string,
      text         : React.PropTypes.string,
      inputProps   : React.PropTypes.object,
      buttonProps  : React.PropTypes.object,
      dropdownProps: React.PropTypes.object,
      popupProps   : React.PropTypes.object,
      searchProps  : React.PropTypes.object,
      subMenuProps : React.PropTypes.object
    }
  }
);
