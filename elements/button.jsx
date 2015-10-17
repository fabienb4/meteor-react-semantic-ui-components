/**
 * @summary Constructor for the button component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.text] Optional.
 * @param  {String|Object} [props.icon] Optional.
 * @param  {String} [props.icon.name] Optional.
 * @param  {String} [props.icon.side] Optional. Default: "left".
 * @param  {Function} [props.handleClick] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Button = (props) => {
  let className = ReactSUI.utils.addClass("ui button", props.className);
  let icon;

  if (props.icon) {
    if (props.text && props.icon.side === "right") {
      className = ReactSUI.utils.addClass(className, "right");
    }

    className = ReactSUI.utils.addClass(className, props.text ? "labeled icon" : "icon");
    icon      = <ReactSUI.Icon name={props.icon.name || props.icon} />;
  }

  return (
    <div className={className} onClick={props.handleClick}>
      {icon}
      {props.text}
      {props.children}
    </div>
  );
};

ReactSUI.Button.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      text       : React.PropTypes.string,
      icon       : React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.shape({
          name: React.PropTypes.string,
          side: React.PropTypes.oneOf([
            "right",
            "left"
          ])
        })
      ]),
      handleClick: React.PropTypes.func
    }
  }
);
