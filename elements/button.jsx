/**
 * @summary Constructor for the button component.
 * @locus Client
 * @memberOf ReactSUI
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Node|Node[]} [props.children] Optional.
 * @return {Node}
 */
ReactSUI.Button = (props) => {
  let className = ReactSUI.utils.addClass("ui button", props.className);

  return (
    <div className={className} {...props.divProps}>
      {props.children}
    </div>
  );
};

ReactSUI.Button.propTypes = {
  className  : React.PropTypes.string,
  divProps   : React.PropTypes.object,
  children   : React.PropTypes.node
};
