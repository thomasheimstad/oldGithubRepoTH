import React from 'react';
export default class ItemsResult extends React.Component {
  state = {
    start: 'hey',
  }
  renderCalculations = (item) => {
    let timeAfterHours;
    let start = "2000/10/10 " + item.start;
    let end = "2000/10/10 " + item.end;
    let diff = Math.abs(new Date(start) - new Date(end));
    let hours = parseFloat(Math.floor(diff/1000)/60/60).toFixed(2);
    let afterhours = "2000/10/10 17:00";
    if(afterhours < end){
      let diff = Math.abs(new Date(end) - new Date(afterhours));
      timeAfterHours = parseFloat(Math.floor(diff/1000)/60/60).toFixed(2);
    }
    let eveningsamonth = timeAfterHours * item.daysamonth;
    let eveningsaseason = eveningsamonth * item.monthsaseason;
    let eveningsamonthcost = eveningsamonth * item.eveningpluss;
    let eveningsaseasoncost = eveningsamonthcost * item.monthsaseason;
    let weekendsamonthcost = 8 * item.weekendpluss * hours;
    let weekendsaseasoncost = weekendsamonthcost * item.monthsaseason;
    let monthlyCost = (hours * item.daysamonth * item.fee) + (eveningsamonthcost + weekendsamonthcost);
    let seasonlyCost = (monthlyCost * item.monthsaseason) + (item.holydays * hours * item.fee);

    if(this.state.start == 'hey') {
      return <tr key = {item._id}>
          <td class="listItem">{item.title}</td>
          <td class="listItem">{monthlyCost}kr</td>
          <td class="listItem">{seasonlyCost}kr</td>
          <td class="listItem">{eveningsamonthcost}kr</td>
          <td class="listItem">{eveningsaseasoncost}kr</td>
          <td class="listItem">{weekendsamonthcost}kr</td>
          <td class="listItem">{weekendsaseasoncost}kr</td>
        </tr>
    }
  }
  render = () => {
    return (
      <div class="flex center col9">
      <table>
        <tbody>
          <tr class="itemsResult">
            <th onClick={this.consoleSomething} class="listItem">title</th>
            <th class="listItem">måned</th>
            <th class="listItem">sesong</th>
            <th class="listItem">kveldskostM</th>
            <th class="listItem">kveldskostS</th>
            <th class="listItem">helgekostM</th>
            <th class="listItem">helgekostS</th>
          </tr>
          {this.props.items.map((item) => {
            return this.renderCalculations(item);
          })}
        </tbody>
      </table>
      </div>
    )
  }
}
