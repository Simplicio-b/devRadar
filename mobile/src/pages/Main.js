import React, { useEffect, useState } from 'react';
import  { 
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main(props) {
    const [currentRegion, setCurrentRegion] = useState(null)
    const { navigation } = props
    
    useEffect(() => {
        async function loadInitialLocation() {
            const { granted } = await requestPermissionsAsync()

            if(granted) {
                const {coords} = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                })

                const { latitude, longitude  } = coords
    
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                })
            }

        }

        loadInitialLocation()
    }, [])
    
    if(!currentRegion) {
        return null
    }

    return (
        <MapView style={styles.map} initialRegion={currentRegion}>
            <Marker coordinate={{latitude:-9.4092596, longitude:-36.6396167}}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/33669751?s=460&v=4' }} />

                <Callout onPress={() => navigation.navigate('Profile', { github_username: 'Simplicio-b' })
                } >
                    <View style={styles.callout} >
                        <Text style={styles.devName}>Simplicio-b</Text>
                        <Text style={styles.devBio}>Programar é arte corrigir bug faz parte</Text>
                        <Text style={styles.devTechs}>Reactjs, react-native, node</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1 
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    devBio: {
        color: '#666',
        marginTop: 5
    },
    devTechs: {
        marginTop: 5
    }
})

export default Main
