import React from 'react';
export default class PersonList extends React.Component {
  state = {
    editing: null
  }
  consoleIt = () => {
    console.log(this.props.persons)
  }
  toggleEditing = (personId) => {
    this.setState({
      editing: personId
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
      this.handleEditPerson(update)
    }
  }
  handleEditPerson = () => {
    let personId = this.state.editing;
    this.handleUpdatePerson({
      _id: personId,
      name: this.refs[`name_${personId}`].value,
      language: [
        this.refs[`language1_${personId}`].checked,
        this.refs[`language2_${personId}`].checked,
        this.refs[`language3_${personId}`].checked,
      ],
    })
  }
  handleUpdatePerson = (update) => {
    this.props.handleUpdatePerson(update);
    this.resetEditing();
  }
  handleDeletePerson = () => {
    this.props.deletePerson(this.state.editing)
    this.resetEditing();
  }
  renderItemOrEditField = (person) => {
    if(this.state.editing === person._id) {
      return <tr key={`editing-${person._id} `} >
        <td><input
          onKeyDown={this.handleEditField}
          type="text"
          class="formInput"
          ref={`name_${person._id}`}
          name="name"
          defaultValue={person.name}
          /></td>
        <td class="flex row center">Ger<input
          onKeyDown={this.handleEditField}
          type="checkbox"
          class="formInput"
          ref={`language1_${person._id}`}
          name="language"
          defaultChecked={person.language[0]}
          />
          Fre<input
            onKeyDown={this.handleEditField}
            type="checkbox"
            class="formInput"
            ref={`language2_${person._id}`}
            name="language"
            defaultChecked={person.language[1]}
            />
            Rus<input
              onKeyDown={this.handleEditField}
              type="checkbox"
              class="formInput"
              ref={`language3_${person._id}`}
              name="language"
              defaultChecked={person.language[2]}
              />
            </td>
          {this.renderActionsSection(person._id)}
        </tr>
    } else {
      return <tr
        onClick = {this.toggleEditing.bind(null, person._id)}
        key = {person._id}
        >
        <td class="listItem">{person.name}</td>
        <td class="listItem">
        {person.language.map((x, i) => {
          if(x === true){
            if(i === 0 ){
              return "Ger "
            }
            else if(i === 1 ){
              return "Fre "
            } else if(i === 2) {
              return "Rus "
            }
          }
        })}
        </td>

        {this.renderActionsSection(person._id)}
        </tr>
    }
  }
  renderActionsSection = (person) => {
    if(this.state.editing === person){
      return (
        <td class="flex3">
          <button onClick={this.handleEditPerson}>Save</button>
          <button onClick={this.resetEditing}>Cancel</button>
          <button onClick={this.handleDeletePerson}>Delete</button>
        </td>
      )
    }
    return (
      <td class="flex3">
        <button onClick = {this.toggleEditing.bind(null, person._id)}>Edit</button>
      </td>
    )
  }
  render = () => {
    return (
      <div class="flex column col9">
        <table>
          <tbody>
            <tr>
              <th class="listItem" onClick={this.consoleIt}>name</th>
              <th class="listItem">languages</th>
              <th class="listItem flex3">buttons</th>
            </tr>
            {this.props.persons.map((person) => {
              return this.renderItemOrEditField(person);
            })}
          </tbody>
        </table>
    </div>
    )
  }
}
