/**
 * @summary Constructor for the list component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object[]} [props.items] Optional. See [ReactSUI.List.Item properties](#ReactSUI-List-Item).
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.List = (props) => {
  let className = ReactSUI.utils.addClass("ui list", props.className);
  let children  = _.map(props.items, (item, i) => <ReactSUI.List.Item key={i} {...item} />);

  return <div className={className}>{children}{props.children}</div>;
};

ReactSUI.List.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      items: React.PropTypes.arrayOf(React.PropTypes.object)
    }
  }
);

/**
 * @summary Constructor for the list's item component.
 * @locus Client
 * @memberOf ReactSUI.List
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.href] Optional.
 * @param  {String} [props.header] Optional.
 * @param  {String} [props.description] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.List.Item = (props) => {
  let className = ReactSUI.utils.addClass("item", props.className);

  if (props.href) {
    return <a className={className} href={props.href}>{props.children}</a>
  } else {
    let children;

    if (props.header || props.description) {
      let contentChildren = [];

      if (props.header) {
        contentChildren.push(
          <ReactSUI.Header
            key={contentChildren.length}
            text={props.header}
            nested="true" />
        );
      }

      if (props.description) {
        contentChildren.push(<div key={contentChildren.length} className="description">{props.description}</div>);
      }

      children = <div className="content">{contentChildren}</div>;
    }

    return <div className={className}>{props.children}{children}</div>;
  }
};

ReactSUI.List.Item.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      href       : React.PropTypes.string,
      header     : React.PropTypes.string,
      description: React.PropTypes.string
    }
  }
);
