import React, { Component } from 'react';
import  { connect } from 'react-redux';
import Graph from '../components/graph';
import GoogleMap from '../components/map';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const id = cityData.city.id;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    console.log(temps);
    return (
      <tr key={id}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Graph data={temps} color='blue' units='K'/></td>
        <td><Graph data={pressure} color='orange' units='hPa'/></td>
        <td><Graph data={humidity} color='green' units='%'/></td>
      </tr>
    )
  }

  render(){
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>

    );
  }
}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
