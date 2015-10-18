/**
 * @summary Constructor for the search component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename search
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Object} [props.divProps] Optional.
 * @param  {String} [props.divProps.$] Any property applicable to a &lt;div&gt; tag. If "className" supplied, override "props.className".
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Search Settings](http://semantic-ui.com/modules/search.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Search = class Search extends ReactSUI.Component {
  constructor(props) {
    super("ui search", props);
  }
  componentDidMount() {
    if (this.props.settings) {
      $(this.refs.search).search(this.props.settings);
    }
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Search Behavior](http://semantic-ui.com/modules/search.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Search
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.search).search(behavior, ...options);
  }
  render() {
    return (
      <div className={this.className} {...this.props.divProps} ref="search">
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Search.propTypes = {
  className : React.PropTypes.string,
  divProps  : React.PropTypes.object,
  settings  : React.PropTypes.object,
  children  : React.PropTypes.node
};
