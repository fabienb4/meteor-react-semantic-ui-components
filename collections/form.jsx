/**
 * @summary Constructor for the form component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Form = (props) => {
  let className = ReactSUI.utils.addClass("ui form", props.className);

  return <div className={className}>{props.children}</div>;
};

ReactSUI.Form.propTypes = ReactSUI.Component.propTypes;

/**
 * @summary Constructor for the Form's Fields component.
 * @memberOf ReactSUI.Form
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object[]} [props.fields] Optional. See [ReactSUI.Form.Field properties](#ReactSUI-Form-Field).
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Form.Fields = (props) => {
  let className = ReactSUI.utils.addClass("fields", props.className);
  let children  = _.map(props.fields, (field, i) => <ReactSUI.Form.Field key={i} {...field} />);

  return <div className={className}>{children}{props.children}</div>;
};

ReactSUI.Form.Fields.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      fields: React.PropTypes.arrayOf(React.PropTypes.object)
    }
  }
);

/**
 * @summary Constructor for the Form's Field component.
 * @memberOf ReactSUI.Form
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {String} [props.label] Optional.
 * @param  {Object} [props.inputProps] Optional. See [ReactSUI.Input](#ReactSUI-Input).
 * @param  {Object} [props.textareaProps] Optional.
 * @param  {String} [props.textareaProps.$] Any property applicable to an &lt;textarea&gt; tag.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Form.Field = (props) => {
  let className = ReactSUI.utils.addClass("field", props.className);
  let children  = [];

  if (props.label) {
    children.push(
      <label key={children.length}>
        {props.label}
      </label>
    );
  }

  if (props.inputProps) {
    children.push(
      <ReactSUI.Input key={children.length} {...props.inputProps} />
    );
  } else if (props.textareaProps) {
    children.push(
      <textarea key={children.length} {...props.textareaProps}>
      </textarea>
    );
  }

  return <div className={className}>{children}{props.children}</div>;
};

ReactSUI.Form.Field.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      label        : React.PropTypes.string,
      inputProps   : React.PropTypes.object,
      textareaProps: React.PropTypes.object
    }
  }
);
