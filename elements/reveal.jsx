/**
 * @summary Constructor for the reveal component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {String} props.transition
 * @param  {Node|Node[]} [props.visibleContent] Optional.
 * @param  {Node|Node[]} [props.hiddenContent] Optional.
 * @param  {Node|Node[]} [props.children] Optional. Not used is props.visibleContent and props.hiddenContent are provided.
 * @return {Node}
 */
ReactSUI.Reveal = (props) => {
  let className = ReactSUI.utils.addClass("ui reveal", props.transition, props.className);

  if (props.visibleContent && props.hiddenContent) {
    return (
      <div className={className}>
        <div className="visible content">
          {props.visibleContent}
        </div>
        <div className="hidden content">
          {props.hiddenContent}
        </div>
      </div>
    );
  } else {
    return <div className={className}>{props.children}</div>;
  }
};

ReactSUI.Reveal.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      transition: React.PropTypes.oneOf([
        "fade",
        "move",
        "move up",
        "move down",
        "move right",
        "rotate",
        "rotate left"
      ]).isRequired,
      visibleContent: React.PropTypes.node,
      hiddenContent : React.PropTypes.node,
    }
  }
);
