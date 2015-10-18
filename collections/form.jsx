/**
 * @summary Constructor for the form component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.formProps] Optional.
 * @param  {String} [props.formProps.$] Any property applicable to a &lt;form&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Form = (props) => {
  let className = ReactSUI.utils.addClass("ui form", props.className);

  return <form className={className} {...props.formProps}>{props.children}</form>;
};

ReactSUI.Form.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};

/**
 * @summary Constructor for the Form's Fields component.
 * @memberOf ReactSUI.Form
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Form.Fields = (props) => {
  let className = ReactSUI.utils.addClass("fields", props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Form.Fields.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};

/**
 * @summary Constructor for the Form's Field component.
 * @memberOf ReactSUI.Form
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Form.Field = (props) => {
  let className = ReactSUI.utils.addClass("field", props.className);

  return <div className={className} {...props.divProps}>{props.children}</div>;
};

ReactSUI.Form.Field.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  children : React.PropTypes.node
};
