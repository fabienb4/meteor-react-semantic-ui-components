/**
 * @summary Constructor for the advertisement component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} props
 * @param  {String} [props.className] Optional.
 * @param  {String} props.size
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Advertisement = (props) => {
  let className = ReactSUI.utils.addClass("ui ad", props.size, props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.Advertisement.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      size: React.PropTypes.oneOf([
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
      ]).isRequired
    }
  }
);
