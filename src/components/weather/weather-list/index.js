import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../weather-chart';
import GoogleMap from '../../maps/google-map';

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }
    renderWeather(cityData) {
        const   id = cityData.city.id,
                name = cityData.city.name,
                temps = cityData.list.map(weather => weather.main.temp),
                pressures = cityData.list.map(weather => weather.main.pressure),
                humidities= cityData.list.map(weather => weather.main.humidity),
                {lon, lat} = cityData.city.coord;

        return (
            <tr key={id}> 
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td>
                    <Chart data={temps} color="orange" units="K"/>
                </td>
                <td>
                    <Chart data={pressures} color="blue" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="green" units="%"/>
                </td>
            </tr>
        );
    }
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th width="220" className="text-center">Temperature (K)</th>
                            <th width="220" className="text-center">Pressure (hPa)</th>
                            <th width="220" className="text-center">Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);