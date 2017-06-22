import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const chart = ({data, height=120, width=180, color='blue'}) => {
    return (
        <Sparklines data={data} height={height} width={width}>
            <SparklinesLine color={color} />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>         
    )
}

export default chart;