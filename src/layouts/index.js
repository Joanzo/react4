import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import TopNavigation from '../components/navigations/top-navigation';
import Pages from '../pages';

const layout = () => {
    // In here may have logic to define which layout to use, for now we only have 1 layout.
    return (
        <BrowserRouter>
            <div>
                <TopNavigation  />
                <Pages />
            </div>
        </BrowserRouter>    
    )
}

export default layout;