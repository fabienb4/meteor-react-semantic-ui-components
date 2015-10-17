/**
 * @summary Constructor for the feed component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Feed = (props) => {
  let className = ReactSUI.utils.addClass("ui feed", props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.Feed.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      children: React.PropTypes.oneOfType([
        React.PropTypes.node,
        React.PropTypes.arrayOf(React.PropTypes.node)
      ])
    }
  }
);

/**
 * @summary Constructor for the feed's event component.
 * @locus Client
 * @memberOf ReactSUI.Feed
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} [props.label] Optional.
 * @param  {Node|Node[]} [props.content] Optional.
 * @param  {Node|Node[]} [props.summary] Optional.
 * @param  {Node|Node[]} [props.date] Optional.
 * @param  {Boolean} [props.dateFirst] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Feed.Event = (props) => {
  let className = ReactSUI.utils.addClass("event", props.className);
  let children  = [];

  if (props.label) {
    children.push(
      <div key={children.length} className="label">
        {props.label}
      </div>
    );
  }

  if (props.content) {
    children.push(
      <div key={children.length} className="content">
        {props.content}
      </div>
    );
  } else if (props.summary || props.date) {
    let contentChildren = [];

    if (props.summary) {
      contentChildren.push(
        <div key={contentChildren.length} className="summary">
          {props.summary}
        </div>
      );
    }

    if (props.date) {
      contentChildren.push(
        <div key={contentChildren.length} className="date">
          {props.date}
        </div>
      );
    }

    children.push(
      <div key={children.length} className="content">
        {props.dateFirst ? contentChildren.reverse() : contentChildren}
      </div>
    );
  }

  return <div className={className}>{children}{props.children}</div>;
};

ReactSUI.Feed.Event.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      label       : React.PropTypes.node,
      content     : React.PropTypes.node,
      summary     : React.PropTypes.node,
      date        : React.PropTypes.node,
      dateFirst   : React.PropTypes.bool
    }
  }
);
