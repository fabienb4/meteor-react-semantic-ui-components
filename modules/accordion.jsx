/**
 * @summary Constructor for the accordion component.
 * @locus Client
 * @memberOf ReactSUI
 * @class
 * @extends ReactSUI.Component
 * @instancename accordion
 * @param  {Object} [props]
 * @param  {String} [props.className] Optional.
 * @param  {Boolean} [props.nested] Optional.
 * @param  {Object[]} [props.items] Optional.
 * @param  {String} props.items.title
 * @param  {Node|Node[]} props.items.content
 * @param  {Object} [props.settings] Optional. See [Semantic-UI Accordion Settings](http://semantic-ui.com/modules/accordion.html#/settings).
 * @param  {Node|Node[]} [props.children] Optional.
 */
ReactSUI.Accordion = class Accordion extends ReactSUI.Component {
  constructor(props) {
    super("accordion", props);
  }
  componentDidMount() {
    $(this.refs.accordion).accordion(this.props.settings);
  }
  componentDidUpdate() {
    $(this.refs.accordion).accordion("refresh");
  }
  /**
   * @summary Apply a behavior to the component. See [Semantic-UI Accordion Behavior](http://semantic-ui.com/modules/accordion.html#behaviors).
   * @locus Client
   * @method applyBehavior
   * @memberOf ReactSUI.Accordion
   * @instance
   * @param  {String} behavior
   * @param  {String} [options] Optional.
   */
  applyBehavior(behavior, ...options) {
    $(this.refs.accordion).accordion(behavior, ...options);
  }
  render() {
    let className = ReactSUI.utils.addClass(this.className, this.props.nested ? "" : "ui");
    let children  = _.map(this.props.items, item => {
      return [
        <div className="title">
          <ReactSUI.Icon name="dropdown" />
          {item.title}
        </div>,
        <div className="content">{item.content}</div>
      ];
    });

    if (_.includes(className, "menu")) {
      children = _.map(children, (child, i) => {
        return <div key={i} className="item">{child}</div>
      });
    }

    return <div className={className} ref="accordion">{children}{this.props.children}</div>;
  }
};

ReactSUI.Accordion.propTypes = React.addons.update(
  ReactSUI.Component.propTypes,
  {
    $merge: {
      nested: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.bool
      ]),
      items: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          title  : React.PropTypes.string.isRequired,
          content: React.PropTypes.node.isRequired
        })
      ),
      settings: React.PropTypes.object
    }
  }
);
