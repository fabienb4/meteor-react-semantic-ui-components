/**
 * @summary Constructor for the input component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Boolean} [props.simple] Optional. Do not use div wrapper qround input. Prevent the use of icons/labels.
 * @param  {Node|Node[]} [props.leftIcon] Optional.
 * @param  {Node|Node[]} [props.rightIcon] Optional.
 * @param  {Node|Node[]} [props.leftLabel] Optional.
 * @param  {Node|Node[]} [props.rightLabel] Optional.
 * @param  {String} [props.placeholder] Optional.
 * @param  {String} [props.type] Optional. Default: "text".
 * @param  {String} [props.name] Optional.
 * @param  {Object} [props.inputProps] Optional.
 * @param  {String} [props.inputProps.$] Any property applicable to an &lt;input&gt; tag.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Input = (props) => {
  let className = ReactSUI.utils.addClass("ui input", props.className);

  if (props.simple) {
    return <input
      placeholder={props.placeholder}
      type={props.type || "text"}
      name={props.name}
      {...props.inputProps}
      className={className} />;
  } else {
    let leftIcon, leftLabel, rightIcon, rightLabel;

    if (props.leftIcon && props.rightIcon) {
      console.error("ReactSUI.Input: Left and right icons together are not supported.");
    }

    if (props.leftLabel) {
      className = ReactSUI.utils.addClass(className, "labeled");
      leftLabel = _.isString(props.leftLabel)
                    ? <ReactSUI.Label text={props.leftLabel}/>
                    : props.leftLabel;
    } else {
      if (props.leftIcon) {
        className = ReactSUI.utils.addClass(className, "left icon");
        leftIcon  = _.isString(props.leftIcon)
                      ? <ReactSUI.Icon name={props.leftIcon}/>
                    : props.leftIcon;
      }
    }

    if (props.rightIcon) {
      className = ReactSUI.utils.addClass(className, "icon");
      rightIcon = _.isString(props.rightIcon)
                    ? <ReactSUI.Icon name={props.rightIcon}/>
                  : props.rightIcon;
    } else {
      if (props.rightLabel) {
        className  = ReactSUI.utils.addClass(className, "right labeled");
        rightLabel = _.isString(props.rightLabel)
                      ? <ReactSUI.Label text={props.rightLabel}/>
                    : props.rightLabel;
      }
    }

    return (
      <div className={className}>
        {leftLabel || leftIcon}
        <input
          placeholder={props.placeholder}
          type={props.type || "text"}
          name={props.name}
          {...props.inputProps} />
        {rightIcon || rightLabel}
      </div>
    );
  }
};

ReactSUI.Input.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      simple     : React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.bool
      ]),
      leftIcon   : React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.node
      ]),
      rightIcon  : React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.node
      ]),
      leftLabel  : React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.node
      ]),
      rightLabel : React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.node
      ]),
      placeholder: React.PropTypes.string,
      type       : React.PropTypes.oneOf([
        "button",
        "checkbox",
        "color",
        "date",
        "datetime",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "radio",
        "range",
        "reset",
        "search",
        "submit",
        "tel",
        "text",
        "time",
        "url",
        "week"
      ]),
      name      : React.PropTypes.string,
      inputProps: React.PropTypes.object
    }
  }
);
