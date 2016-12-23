var React = require('react');

var Todo = React.createClass({

  handleCheckbox: function() {
      this.props.onToggle(this.props.id);
  },

  render: function() {
    var {id,text,completed} = this.props;

    return (
      <div>
        <input type="checkbox" checked={completed} onChange={this.handleCheckbox}/>
        {text}
      </div>
    );
  }
});

module.exports = Todo;
