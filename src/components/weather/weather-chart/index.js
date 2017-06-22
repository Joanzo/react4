import _ from 'lodash';
import React from 'react';

import LineChart from '../../charts/line-chart';

function average(data) {
    return _.round((_.sum(data)/data.length));
}

const chart = (props) => {
    return (
        <div>
            <LineChart data={props.data} height={120} width={180} color={props.color} />
            <div className="text-center">{average(props.data)} {props.units}</div>
        </div>
    )
}

export default chart;