import React from 'react';
import ItemsSetup from '../components/ItemsSetup';
import ItemsList from '../components/ItemsList';
import ItemsResult from '../components/ItemsResult';
import PersonSetup from '../components/PersonSetup';
import PersonList from '../components/PersonList';
import Calendar from '../components/Calendar';
const items = [
 {
    _id: '112233',
    title: 'M1',
    start: '08:30',
    end: '18:00',
    daysamonth: 31,
    monthsaseason: 4.5,
    holydays: 4,
    fee: 160,
    eveningpluss: 12,
    weekendpluss: 52
  },
  {
    _id: '223344',
    title: 'M2',
    start: '10:00',
    end: '19:00',
    daysamonth: 31,
    monthsaseason: 4.5,
    holydays: 4,
    fee: 160,
    eveningpluss: 12,
    weekendpluss: 52
  }
];
const persons = [
  {
    _id: '123130309',
    name: "John Calculator",
    language: [],
    datesPicked: []
  },
  {
  _id: "2c80320807bcdf874d6e35ed780e0aa2",
  name: "Josh Jiles",
  language: [
    true,
    true,
    false
  ],
  datesPicked: [
    "2017-03-01T11:00:00.000Z",
    "2017-03-02T11:00:00.000Z",
    "2017-03-03T11:00:00.000Z",
    "2017-03-04T11:00:00.000Z",
    "2017-03-05T11:00:00.000Z",
    "2017-03-06T11:00:00.000Z",
    "2017-03-07T11:00:00.000Z",
    "2017-03-08T11:00:00.000Z",
    "2017-03-09T11:00:00.000Z",
    "2017-03-10T11:00:00.000Z",
    "2017-03-11T11:00:00.000Z",
    "2017-03-12T11:00:00.000Z",
    "2017-03-13T11:00:00.000Z",
    "2017-03-14T11:00:00.000Z",
    "2017-03-15T11:00:00.000Z",
    "2017-03-16T11:00:00.000Z",
    "2017-03-17T11:00:00.000Z",
    "2017-03-18T11:00:00.000Z",
    "2017-03-19T11:00:00.000Z",
    "2017-03-20T11:00:00.000Z",
    "2017-03-21T11:00:00.000Z",
    "2017-03-22T11:00:00.000Z",
    "2017-03-23T11:00:00.000Z",
    "2017-03-24T11:00:00.000Z",
    "2017-03-25T11:00:00.000Z",
    "2017-03-26T10:00:00.000Z",
    "2017-03-27T10:00:00.000Z",
    "2017-03-28T10:00:00.000Z",
    "2017-03-29T10:00:00.000Z",
    "2017-03-30T10:00:00.000Z",
    "2017-03-31T10:00:00.000Z"
    ]
  },
  {
  _id: "da7319101347a50d82a488c475510411",
  name: "Jack",
  language: [
    false,
    false,
    false
  ],
  datesPicked: [
    "2017-03-01T11:00:00.000Z",
    "2017-03-02T11:00:00.000Z",
    "2017-03-03T11:00:00.000Z",
    "2017-03-04T11:00:00.000Z",
    "2017-03-05T11:00:00.000Z",
    "2017-03-06T11:00:00.000Z",
    "2017-03-07T11:00:00.000Z",
    "2017-03-08T11:00:00.000Z",
    "2017-03-09T11:00:00.000Z",
    "2017-03-10T11:00:00.000Z",
    "2017-03-11T11:00:00.000Z",
    "2017-03-12T11:00:00.000Z",
    "2017-03-13T11:00:00.000Z",
    "2017-03-14T11:00:00.000Z",
    "2017-03-15T11:00:00.000Z",
    "2017-03-16T11:00:00.000Z",
    "2017-03-17T11:00:00.000Z",
    "2017-03-18T11:00:00.000Z",
    "2017-03-19T11:00:00.000Z",
    "2017-03-20T11:00:00.000Z",
    "2017-03-21T11:00:00.000Z",
    "2017-03-22T11:00:00.000Z",
    "2017-03-23T11:00:00.000Z",
    "2017-03-24T11:00:00.000Z",
    "2017-03-25T11:00:00.000Z",
    "2017-03-26T10:00:00.000Z",
    "2017-03-27T10:00:00.000Z",
    "2017-03-28T10:00:00.000Z",
    "2017-03-29T10:00:00.000Z",
    "2017-03-30T10:00:00.000Z",
    "2017-03-31T10:00:00.000Z"
    ]
  },
  {
  _id: "0fca39ad225ff19e954c79f519088c4c",
  name: "Janis Jiles",
  language: [
    false,
    false,
    true
  ],
  datesPicked: [
    "2017-03-01T11:00:00.000Z",
    "2017-03-02T11:00:00.000Z",
    "2017-03-03T11:00:00.000Z",
    "2017-03-04T11:00:00.000Z",
    "2017-03-05T11:00:00.000Z",
    "2017-03-06T11:00:00.000Z",
    "2017-03-07T11:00:00.000Z",
    "2017-03-08T11:00:00.000Z",
    "2017-03-09T11:00:00.000Z",
    "2017-03-10T11:00:00.000Z",
    "2017-03-11T11:00:00.000Z",
    "2017-03-12T11:00:00.000Z",
    "2017-03-13T11:00:00.000Z",
    "2017-03-14T11:00:00.000Z",
    "2017-03-15T11:00:00.000Z",
    "2017-03-16T11:00:00.000Z",
    "2017-03-17T11:00:00.000Z",
    "2017-03-18T11:00:00.000Z",
    "2017-03-19T11:00:00.000Z",
    "2017-03-20T11:00:00.000Z",
    "2017-03-21T11:00:00.000Z",
    "2017-03-22T11:00:00.000Z",
    "2017-03-23T11:00:00.000Z",
    "2017-03-24T11:00:00.000Z",
    "2017-03-25T11:00:00.000Z",
    "2017-03-26T10:00:00.000Z",
    "2017-03-27T10:00:00.000Z",
    "2017-03-28T10:00:00.000Z",
    "2017-03-29T10:00:00.000Z",
    "2017-03-30T10:00:00.000Z",
    "2017-03-31T10:00:00.000Z"
    ]
  },
];
export default class TimeCalc extends React.Component {
  state = {
    setup: true,
    items,
    persons
  }
  handleSetup = () => {
    this.setState({
      setup: !this.state.setup
    })
  }
  createTask = ({_id, title, start, end, daysamonth, monthsaseason, holydays, fee, eveningpluss, weekendpluss}) => {
    this.state.items.push({
      _id,
      title,
      start,
      end,
      daysamonth,
      monthsaseason,
      holydays,
      fee,
      eveningpluss,
      weekendpluss
    });
    this.setState({
      items: this.state.items
    })
  }
  handleUpdate = (update) => {
    let r = this.state.items.map(x => x._id === update._id ? update : x)
   this.setState({items: r});
  }
  deleteTask = (index) => {
    let stat = this.state.items
    stat = stat.filter(y => y._id !== index )
        this.setState({items: stat});
  }
  createPerson = ({_id, name, language, datesPicked}) => {
    this.state.persons.push({
      _id,
      name,
      language,
      datesPicked
    });
    this.setState({
      persons: this.state.persons
    })
  }
  handleUpdatePerson = (update) => {
    let r = this.state.persons.map(x => x._id === update._id ? update : x)
   this.setState({persons: r});
  }
  deletePerson = (index) => {
    let stat = this.state.persons
    stat = stat.filter(y => y._id !== index )
        this.setState({persons: stat});
  }
  render = () => {
    return (
      <div class="timeCalc flex center column">
        <Calendar
        items={this.state.items}
        persons={this.state.persons}
        />
        <ItemsSetup
          setup={this.state.setup}
          handleSetup={this.handleSetup}
          createTask = {this.createTask}
          />
        <ItemsList
          items={this.state.items}
          handleUpdate={this.handleUpdate}
          deleteTask={this.deleteTask}/>
        <ItemsResult items={this.state.items}/>
        <PersonSetup
          persons={this.state.persons}
          createPerson={this.createPerson}
          />
        <PersonList
        persons={this.state.persons}
        handleUpdatePerson={this.handleUpdatePerson}
        deletePerson={this.deletePerson}
        />
      </div>
    )
  }
}
