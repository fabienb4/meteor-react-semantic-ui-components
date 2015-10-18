/**
 * @summary Constructor for the reveal component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {String} props.transition
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Reveal = (props) => {
  let className = ReactSUI.utils.addClass("ui reveal", props.transition, props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Reveal.propTypes = {
  className : React.PropTypes.string,
  transition: React.PropTypes.oneOf([
    "fade",
    "move",
    "move up",
    "move down",
    "move right",
    "rotate",
    "rotate left"
  ]).isRequired,
  divProps  : React.PropTypes.object,
  children  : React.PropTypes.node
};
