import React from 'react';
export default class ItemsList extends React.Component {
  state = {
    editing: null
  }
  consoleSomething = () => {
    let y = this.state.editing
    let q = this.props.items.findIndex(x => x._id === y)
    let r = this.props.items
    console.log(r)
  }
  toggleEditing = (itemId) => {
    this.setState({
      editing: itemId
    })
  }
  resetEditing = () => {
    this.setState({
      editing: null
    })
  }
  handleEditField = (e) => {
    if(e.keyCode === 13) {
      let update = {};
      let target = e.target;
      update._id = this.state.editing;
      update[target.name] = target.value;
      this.handleEditItem(update)
    }
  }
  handleEditItem = () => {
    let itemId = this.state.editing;
    this.handleItemsUpdate({
      _id: itemId,
      title: this.refs[`title_${itemId}`].value,
      start: this.refs[`start_${itemId}`].value,
      end: this.refs[`end_${itemId}`].value,
      daysamonth: this.refs[`daysamonth_${itemId}`].value,
      monthsaseason: this.refs[`monthsaseason_${itemId}`].value,
      holydays: this.refs[`holydays_${itemId}`].value,
      fee: this.refs[`fee_${itemId}`].value,
      eveningpluss: this.refs[`eveningpluss_${itemId}`].value,
      weekendpluss: this.refs[`weekendpluss_${itemId}`].value,
    })
  }
  handleItemsUpdate = (update) => {
    this.props.handleUpdate(update);
    this.resetEditing();
  }
  handleDeleteItem = () => {
    this.props.deleteTask(this.state.editing)
    this.resetEditing();
  }
  renderItemOrEditField = (item) => {
    if(this.state.editing === item._id) {
      return <tr key={`editing-${item._id} `} >
        <td><input
          onKeyDown={this.handleEditField}
          type="text"
          class="formInput"
          ref={`title_${item._id}`}
          name="title"
          defaultValue={item.title}
          /></td>
        <td><input
          onKeyDown={this.handleEditField}
          type="text"
          class="formInput"
          ref={`start_${item._id}`}
          name="start"
          defaultValue={item.start}
          /></td>
        <td><input
          onKeyDown={this.handleEditField}
          type="text"
          class="formInput"
          ref={`end_${item._id}`}
          name="end"
          defaultValue={item.end}
          /></td>
        <td><input
          onKeyDown={this.handleEditField}
          type="text"
          class="formInput"
          ref={`daysamonth_${item._id}`}
          name="daysamonth"
          defaultValue={item.daysamonth}
          /></td>
        <td><input
          onKeyDown={this.handleEditField}
          type="text"
          class="formInput"
          ref={`monthsaseason_${item._id}`}
          name="monthsaseason"
          defaultValue={item.monthsaseason}
          /></td>
        <td><input
          onKeyDown={this.handleEditField}
          type="text"
          class="formInput"
          ref={`holydays_${item._id}`}
          name="holydays"
          defaultValue={item.holydays}
          /></td>
        <td><input
          onKeyDown={this.handleEditField}
          type="text"
          class="formInput"
          ref={`fee_${item._id}`}
          name="fee"
          defaultValue={item.fee}
          /></td>
        <td><input
          onKeyDown={this.handleEditField}
          type="text"
          class="formInput"
          ref={`eveningpluss_${item._id}`}
          name="eveningpluss"
          defaultValue={item.eveningpluss}
          /></td>
        <td><input
          onKeyDown={this.handleEditField}
          type="text"
          class="formInput"
          ref={`weekendpluss_${item._id}`}
          name="weekendpluss"
          defaultValue={item.weekendpluss}
          /></td>
          {this.renderActionsSection(item._id)}
        </tr>
    } else {
      return <tr
        onClick = {this.toggleEditing.bind(null, item._id)}
        key = {item._id}
        >
        <td class="listItem">{item.title}</td>
        <td class="listItem">{item.start}</td>
        <td class="listItem">{item.end}</td>
        <td class="listItem">{item.daysamonth}</td>
        <td class="listItem">{item.monthsaseason}</td>
        <td class="listItem">{item.holydays}</td>
        <td class="listItem">{item.fee}</td>
        <td class="listItem">{item.eveningpluss}</td>
        <td class="listItem">{item.weekendpluss}</td>
        {this.renderActionsSection(item._id)}
        </tr>
    }
  }
  renderActionsSection = (item) => {
    if(this.state.editing === item){
      return (
        <td class="flex3">
          <button onClick={this.handleEditItem}>Save</button>
          <button onClick={this.resetEditing}>Cancel</button>
          <button onClick={this.handleDeleteItem}>Delete</button>
        </td>
      )
    }
    return (
      <td class="flex3">
        <button onClick = {this.toggleEditing.bind(null, item._id)}>Edit</button>
      </td>
    )
  }
  render = () => {
    return (
      <div class="flex column col9">
        <table>
          <tbody>
            <tr>
              <th onClick={this.consoleSomething} class="listItem">title</th>
              <th class="listItem">start</th>
              <th class="listItem">end</th>
              <th class="listItem">dam</th>
              <th class="listItem">mas</th>
              <th class="listItem">holy</th>
              <th class="listItem">fee</th>
              <th class="listItem">eve+</th>
              <th class="listItem">weekend+</th>
              <th class="listItem flex3">buttons</th>
            </tr>
            {this.props.items.map((item) => {
              return this.renderItemOrEditField(item);
            })}
          </tbody>
        </table>
    </div>
    )
  }
}
