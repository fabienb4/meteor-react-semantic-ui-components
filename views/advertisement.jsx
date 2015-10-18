/**
 * @summary Constructor for the advertisement component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {String} props.size
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Advertisement = (props) => {
  let className = ReactSUI.utils.addClass("ui ad", props.size, props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Advertisement.propTypes = {
  className: React.PropTypes.string,
  size     : React.PropTypes.oneOf([
    "medium rectangle",
    "large rectangle",
    "vertical rectangle",
    "small rectangle",

    "banner",
    "mobile banner",
    "banner",
    "vertical banner",
    "top banner",
    "half banner",

    "leaderboard",
    "mobile leaderboard",
    "leaderboard",
    "large leaderboard",

    "half page",

    "button",
    "square button",
    "small button",

    "skyscraper",
    "wide skyscraper",

    "billboard",

    "panorama",

    "netboard"
  ]).isRequired,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
