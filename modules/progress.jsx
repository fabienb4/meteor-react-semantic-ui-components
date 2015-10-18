/**
 * @summary Constructor for the progress component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename progress
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Progress Settings](http://semantic-ui.com/modules/progress.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Progress = class Progress extends ReactSUI.Component {
  constructor(props) {
    super("ui progress", props);
  }
  componentDidMount() {
    $(this.refs.progress).progress(this.props.settings);
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Progress Behavior](http://semantic-ui.com/modules/progress.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Progress
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.progress).progress(behavior, ...options);
  }
  render() {
    return (
      <div className={this.className} {...this.props.divProps} ref="progress">
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Progress.propTypes = {
  className: React.PropTypes.string,
  divProps : React.PropTypes.object,
  settings : React.PropTypes.object,
  children : React.PropTypes.node
};
