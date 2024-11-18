import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {TabNavigationStack} from './src/stacks/TabNavigation';
import {store} from './src/configs/store';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <TabNavigationStack/>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
