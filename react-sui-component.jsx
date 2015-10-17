/**
 * @summary Constructor for the base ReactSUI's component.
 * @memberOf ReactSUI
 * @locus Client
 * @class
 * @extends React.Component
 * @instancename component
 * @param  {String} [baseClassName]
 * @param  {Object} [props]
 */
ReactSUI.Component = class Component extends React.Component {
  constructor(baseClassName, props) {
    super(props);

    this.className = baseClassName ? ReactSUI.utils.addClass(baseClassName, props.className) : props.className;
  }
};

ReactSUI.Component.propTypes = {
  className: React.PropTypes.string
};
