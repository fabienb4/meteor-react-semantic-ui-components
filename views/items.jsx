/**
 * @summary Constructor for the items component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Items = (props) => {
  let className = ReactSUI.utils.addClass("ui items", props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.Items.propTypes = ReactSUI.Component.propTypes;

/**
 * @summary Constructor for the items' item component.
 * @locus Client
 * @memberOf ReactSUI.Items
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.image] Optional.
 * @param  {Node|Node[]} [props.content] Optional.
 * @param  {Node|Node[]} [props.header] Optional.
 * @param  {Node|Node[]} [props.meta] Optional.
 * @param  {Node|Node[]} [props.description] Optional.
 * @param  {Node|Node[]} [props.extra] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Items.Item = (props) => {
  let className = ReactSUI.utils.addClass("item", props.className);
  let children  = [];

  if (props.image) {
    children.push(
      <div key={children.length} className="image">
        <img src={props.image} />
      </div>
    );
  }

  if (props.content) {
    children.push(
      <div key={children.length} className="content">
        {props.content}
      </div>
    );
  } else if (props.header || props.meta || props.description || props.extra) {
    let contentChildren = [];

    if (props.header) {
      contentChildren.push(
        <ReactSUI.Header
          key={contentChildren.length}
          text={props.header}
          nested="true" />
      );
    }

    if (props.meta) {
      contentChildren.push(
        <div key={contentChildren.length} className="meta">
          {props.meta}
        </div>
      );
    }

    if (props.description) {
      contentChildren.push(
        <div key={contentChildren.length} className="description">
          {props.description}
        </div>
      );
    }

    if (props.extra) {
      contentChildren.push(
        <div key={contentChildren.length} className="extra">
          {props.extra}
        </div>
      );
    }

    children.push(
      <div key={children.length} className="content">
        {contentChildren}
      </div>
    );
  }

  return <div className={className}>{children}{props.children}</div>;
};

ReactSUI.Items.Item.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      image       : React.PropTypes.string,
      content     : React.PropTypes.node,
      header      : React.PropTypes.node,
      meta        : React.PropTypes.node,
      description : React.PropTypes.node,
      extraContent: React.PropTypes.node
    }
  }
);
