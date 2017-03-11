import React from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';

const initialState = {
  from: null,
  to: null
}
export default class Range extends React.Component {
  state = initialState;
  resetState = () => {
    this.setState(initialState)
  }
  consoleIt = (e) => {
    e.preventDefault();
    console.log(this.props.datesPicked)
  }
  handleDayClick = (day, {selected}) => {
    const {selectedDays} = this.state;
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick = (e) => {
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
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

    if(this.props.datesPicked.length !== 0){
      let getTimeDateArray = []
      let getTimeNewArray = []
      let newArray = getDates(this.state.from, this.state.to)

      this.props.datesPicked.forEach(x=>{
        getTimeDateArray.push(x.getTime())
      })
      newArray.forEach(x=> {
        getTimeNewArray.push(x.getTime())
      })

      if(getTimeNewArray.some(r=> getTimeDateArray.indexOf(r) >= 0)){
        console.log('THEY ARE overlapz')
      } else {
        this.props.datesPicked.push(...newArray);
        console.log(newArray)
        console.log(getTimeDateArray)
        console.log(getTimeNewArray)
      }
    } else {
        let q = getDates(from, to)
        this.props.datesPicked.push(...q)
      }
    this.setState({
      from: null,
      to: null
    })
  }
  render() {
    const { from, to } = this.state;
    return (
      <div class="RangeExample flex column center">
      { ' ' }<a href="." onClick={ this.consoleIt }>CONSOLEIT</a>
        { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
        { from && !to && <p>Please select the <strong>last day</strong>.</p> }
        { from && to &&
          <p>
            You chose from { moment(from).format('L') } to { moment(to).format('L') }.
            { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
            { ' ' }<a href="." onClick={ this.handleSaveClick }>Save</a>
          </p>
        }
        <DayPicker
          numberOfMonths={ 1 }
          selectedDays={ [from, { from, to }] }
          onDayClick={ this.handleDayClick }
          modifiers = {{ chosen: this.props.datesPicked }}
        />

      </div>
    );
  }
}
