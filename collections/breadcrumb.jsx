/**
 * @summary Constructor for the breadcrumb component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.divider] Optional. Default: "/".
 * @param  {Object[]} [props.sections] Optional. See [ReactSUI.Breadcrumb.Section](#ReactSUI-Breadcrumb-Section).
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Breadcrumb = (props) => {
  let className = ReactSUI.utils.addClass("ui breadcrumb", props.className);
  let children;

  if (props.sections) {
    let divider = (props.divider && ! _.isString(props.divider))
                    ? props.divider
                    : <span className="divider">{props.divider || "/"}</span>;

    children = _.map(props.sections, (section, i) => {
      if (i !== props.sections.length - 1) {
        return [
          <ReactSUI.Breadcrumb.Section linkProps={section} />,
          divider
        ];
      } else {
        return <ReactSUI.Breadcrumb.Section key={i} linkProps={section} />;
      }
    });
  }

  return <div className={className}>{children}{props.children}</div>;
};

ReactSUI.Breadcrumb.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      divider : React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object
      ]),
      sections: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          text: React.PropTypes.string.isRequired
        })
      )
    }
  }
);


/**
 * @summary Constructor for the Breadcrumb's Section component.
 * @memberOf ReactSUI.Breadcrumb
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.linkProps] Optional.
 * @param  {String} props.linkProps.text
 * @param  {String} [props.linkProps.$] Any property applicable to an &lt;a&gt; tag.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Breadcrumb.Section = (props) => {
  let className = ReactSUI.utils.addClass("section", props.className);

  if (props.linkProps) {
    let linkProps = _.omit(props.linkProps, "text");

    return <a className={className} {...linkProps}>{props.linkProps.text}{props.children}</a>;
  } else {
    return <div className={className}>{props.children}</div>;
  }
};

ReactSUI.Breadcrumb.Section.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      linkProps: React.PropTypes.shape({
        text: React.PropTypes.string.isRequired
      })
    }
  }
);
