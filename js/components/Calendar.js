import React from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
const initialState = {
  from: null,
  to: null,
  datesPicked: [],
  selection: [],
  rows: [],
}
export default class Calendar extends React.Component {
  state = initialState
  consoleIt = (e) => {
    console.log(this.state.datesPicked)
    console.log(typeof this.state.datesPicked)
    console.log(this.state.selection)
  }
  handleCalculations = () => {
    let selection = this.state.selection
    let datesPicked = this.state.datesPicked
    let rows = this.state.rows
    Object.keys(datesPicked).forEach(function (key) {
      let obj = datesPicked[key];
      selection.push({
        day: obj,
        mv1: 'Kari',
        mv2: 'Eva',
        vv: 'Einar'
      })
    })
    selection.map(x=>{
      rows.push(
        <tr key={`${x.day}`}>
          <td>{x.day.toString().substring(0,10)}</td>
          <td>{x.mv1}</td>
          <td>{x.mv2}</td>
          <td>{x.vv}</td>
        </tr>
      )
    })
  }
  handleDayClick = (day, {selected}) => {
    const {selectedDays} = this.state;
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick = (e) => {
    e.preventDefault();
    this.setState({initialState});
    initialState.datesPicked.length = 0;
  }
  handleSaveClick = (e) => {
    e.preventDefault();
    Date.prototype.addDays = function(days) {
      var dat = new Date(this.valueOf())
      dat.setDate(dat.getDate() + days);
      return dat;
    }
    function getDates(startDate, stopDate) {
      var dateArray = new Array();
      var currentDate = startDate;
      while (currentDate <= stopDate) {
        dateArray.push( new Date (currentDate) )
        currentDate = currentDate.addDays(1);
      }
      return dateArray;
    }
    const { from, to } = this.state;
    if(this.state.to.length !== 0){
      let getTimeDateArray = []
      let getTimeNewArray = []
      let newArray = getDates(this.state.from, this.state.to)

      this.state.datesPicked.forEach(x=>{
        getTimeDateArray.push(x.getTime())
      })
      newArray.forEach(x=> {
        getTimeNewArray.push(x.getTime())
      })

      if(getTimeNewArray.some(r=> getTimeDateArray.indexOf(r) >= 0)){
        console.log('THEY ARE overlapz')
      } else {
        this.state.datesPicked.push(...newArray);
      }
    } else {
        let q = getDates(from, to)
        this.state.datesPicked.push(...q)
      }
    this.setState({
      from: null,
      to: null,
      datesPicked: this.state.datesPicked.sort(function(b,a){return a>b ? -1 : a<b ? 1 : 0;})
    })
    this.handleCalculations();
  }
  guidGenerator = () => {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
      return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4())
}
  render = () => {
    const { from, to } = this.state;

    return (
      <div class="flex center column">
        <p onClick={ this.consoleIt }>CONSOLEIT</p>
        { !from && !to && <p>Please select the <strong>first day</strong>. <a href="." onClick={ this.handleResetClick }>Reset</a></p>}
        { from && !to && <p>Please select the <strong>last day</strong>.</p> }
        { from && to &&
          <p>
            From { moment(from).format('L') } to { moment(to).format('L') }.
            { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
            { ' ' }<a href="." onClick={ this.handleSaveClick }>Save</a>
          </p>
        }
      <DayPicker
        numberOfMonths={ 1 }
        selectedDays={ [from, { from, to }] }
        onDayClick={ this.handleDayClick }
        modifiers = {{ chosen: this.state.datesPicked }}
      />
        <table class="calendar">
          <tbody>
            <tr>
              <td>May</td>
            </tr>
            <tr>
              <th class="listItem" onClick={this.consoleIt}>title</th>
              
            </tr>
            <tr>
              <td class="listItem"></td>
            </tr>

            {this.state.rows.length > 0 ? this.state.rows : null}

            <tr>
              <td class="listItem">name</td>
              <td class="listItem">name</td>
              <td class="listItem">name</td>
              <td class="listItem">name</td>
              <td class="listItem">name</td>
              <td class="listItem">name</td>
              <td class="listItem">name</td>
              <td class="listItem">name</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
