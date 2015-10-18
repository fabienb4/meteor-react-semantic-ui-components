/**
 * @summary Constructor for the input component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Boolean} [props.simple] Optional. Do not use div wrapper around input. Prevent the use "props.children".
 * @param  {Object} [props.inputProps] Optional.
 * @param  {String} [props.inputProps.$] Any property applicable to an &lt;input&gt; tag. If "simple": If "className" supplied, override "props.className".
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.childrenBefore] Optional.
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Input = (props) => {
  let className = ReactSUI.utils.addClass("ui input", props.className);

  if (props.simple) {
    return <input className={className} {...props.inputProps} />;
  } else {
    return (
      <div className={className} {...props.divProps}>
        {props.childrenBefore}
        <input {...props.inputProps} />
        {props.children}
      </div>
    );
  }
};

ReactSUI.Input.propTypes = {
  className     : React.PropTypes.string,
  simple        : React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  inputProps    : React.PropTypes.object.isRequired,
  divProps      : React.PropTypes.object,
  childrenBefore: React.PropTypes.node,
  children      : React.PropTypes.node
};
