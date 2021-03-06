import { createAppContainer } from 'react-navigation'
import  { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'devRadar'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Git-hub'
            }
        },

    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#7d40e7'
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }

    })
)

export default Routes
