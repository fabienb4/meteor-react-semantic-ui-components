/**
 * @summary Constructor for the steps component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object[]} [props.steps] Optional. See [ReactSUI.Steps.Step properties](#ReactSUI-Steps-Step).
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Steps = (props) => {
  let className = ReactSUI.utils.addClass("ui steps", props.className);
  let children  = _.map(props.steps, (step, i) => <ReactSUI.Steps.Step key={i} {...step} />);

  return <div className={className}>{children}{props.children}</div>;
};

ReactSUI.Steps.propTypes = ReactSUI.Component.propTypes;

/**
 * @summary Constructor for the steps' step component.
 * @locus Client
 * @memberOf ReactSUI.Steps
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.icon] Optional.
 * @param  {String} [props.title] Optional.
 * @param  {String} [props.description] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Steps.Step = (props) => {
  let className = ReactSUI.utils.addClass("step", props.className);
  let children = [];

  if (props.icon) {
    children.push(<ReactSUI.Icon key={children.length} name={props.icon} />);
  }

  if (props.title || props.description) {
    let contentChildren = [];

    if (props.title) {
      contentChildren.push(
        <div key={contentChildren.length} className="title">
          {props.title}
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

  return <div className={className}>{children}{props.children}</div>;
};

ReactSUI.Steps.Step.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      icon       : React.PropTypes.string,
      title      : React.PropTypes.string,
      description: React.PropTypes.string
    }
  }
);
