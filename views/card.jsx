/**
 * @summary Constructor for the card component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.image] Optional.
 * @param  {String} [props.header] Optional.
 * @param  {Node|Node[]} [props.meta] Optional.
 * @param  {Node|Node[]} [props.description] Optional.
 * @param  {Node|Node[]} [props.extraContent] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Card = (props) => {
  let className = ReactSUI.utils.addClass("ui card", props.className);
  let children  = [];

  if (props.image) {
    children.push(
      <div key={children.length} className="image">
        <img src={props.image} />
      </div>
    );
  }

  if (props.header || props.meta || props.description) {
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

    children.push(
      <div key={children.length} className="content">
        {contentChildren}
      </div>
    );
  }

  if (props.extraContent) {
    children.push(
      <div key={children.length} className="extra content">
        {props.extraContent}
      </div>
    );
  }

  return <div className={className}>{children}{props.children}</div>;
};

ReactSUI.Card.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      image       : React.PropTypes.string,
      header      : React.PropTypes.string,
      meta        : React.PropTypes.node,
      description : React.PropTypes.node,
      extraContent: React.PropTypes.node
    }
  }
);
