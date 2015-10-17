/**
 * @summary Constructor for the comments component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Boolean} [props.nested] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Comments = (props) => {
  let className = ReactSUI.utils.addClass(props.nested ? "comments" : "ui comments", props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.Comments.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      nested  : React.PropTypes.bool,
      children: React.PropTypes.oneOfType([
        React.PropTypes.node,
        React.PropTypes.arrayOf(React.PropTypes.node)
      ])
    }
  }
);

/**
 * @summary Constructor for the comments' comment component.
 * @locus Client
 * @memberOf ReactSUI.Comments
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.avatar] Optional.
 * @param  {String} [props.author] Optional.
 * @param  {Node|Node[]} [props.metadata] Optional.
 * @param  {Node|Node[]} [props.text] Optional.
 * @param  {Node|Node[]} [props.actions] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Comments.Comment = (props) => {
  let className = ReactSUI.utils.addClass("comment", props.className);
  let children  = [];

  if (props.avatar) {
    children.push(
      <a key={children.length} className="avatar">
        <img src={props.avatar} />
      </a>
    );
  }

  if (props.author || props.metadata || props.text || props.actions) {
    let contentChildren = [];

    if (props.author) {
      contentChildren.push(
        <a key={contentChildren.length} className="author">{props.author}</a>
      );
    }

    if (props.metadata) {
      contentChildren.push(
        <div key={contentChildren.length} className="metadata">{props.metadata}</div>
      );
    }

    if (props.text) {
      contentChildren.push(
        <div key={contentChildren.length} className="text">{props.text}</div>
      );
    }

    if (props.actions) {
      contentChildren.push(
        <div key={contentChildren.length} className="actions">{props.actions}</div>
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

ReactSUI.Comments.Comment.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      avatar  : React.PropTypes.string,
      author  : React.PropTypes.string,
      metadata: React.PropTypes.node,
      text    : React.PropTypes.node,
      actions : React.PropTypes.node
    }
  }
);
