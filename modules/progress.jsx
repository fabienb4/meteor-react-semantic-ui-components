/**
 * @summary Constructor for the progress component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename progress
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Boolean} [props.progress] Optional.
 * @param  {String} [props.label] Optional.
 * @param  {Number} [props.percent] Optional.
 * @param  {Number} [props.value] Optional.
 * @param  {Number} [props.total] Optional.
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
    let data = {}, barProgress, label;

    if (this.props.progress) {
      barProgress = <div className="progress"></div>;
    }

    if (this.props.label) {
      label = <div className="label">{this.props.label}</div>;
    }

    if (this.props.percent) {
      data["data-percent"] = this.props.percent;
    } else {
      if (this.props.value && this.props.total) {
        data["data-value"] = this.props.value;
        data["data-total"] = this.props.total;
      }
    }

    return (
      <div className={this.className} {...data} ref="progress">
        <div className="bar">{barProgress}</div>
        {label}
        {this.props.children}
      </div>
    );
  }
};

ReactSUI.Progress.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      progress: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.bool
      ]),
      label   : React.PropTypes.string,
      percent : React.PropTypes.number,
      value   : React.PropTypes.number,
      total   : React.PropTypes.number,
      settings: React.PropTypes.object
    }
  }
);
