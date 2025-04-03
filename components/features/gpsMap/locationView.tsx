import { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { DataSource } from "./dataSource/datasource";
import { Timestamp } from "firebase/firestore";

export function LocationView() {
    const dataSource = new DataSource();
    const [permission, requestPermission] = Location.useForegroundPermissions();
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const mapRef = useRef(null);

    useEffect(() => {
        async function getCurrentLocation() {
            if (!permission?.granted) {
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location);
        }

        getCurrentLocation();
    }, [permission]);

    useEffect(()=>{
        async function showLocation(){
            if(location){
                const camera = await (mapRef?.current as any).getCamera();
                camera.center = {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                };
                (mapRef?.current as any).animateCamera(camera, {duration: 2000});
            }
        }
        showLocation();
    }, [location]);

    useEffect(()=>{
        async function saveLocation(){
            if(location){
                const transformedLocation = {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    timestamp: Timestamp.fromDate(new Date()),
                };
                const save = await dataSource.save(transformedLocation);
            }
        }
        saveLocation();
    })

    if (!permission?.granted) {
        return (
            <View style={styles.permissionContainer}>
                <Text style={styles.permissionText}>Debes permitir el acceso a la ubicación</Text>
                <Button
                    onPress={requestPermission}
                    title="Permitir Ubicación"
                    color="#1E90FF"
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.locationBox}>
                <View style={styles.locationView}>
                    <Text style={styles.text}>Latitud: {JSON.stringify(location?.coords.latitude)}</Text>
                    <Text style={styles.text}>|</Text>
                    <Text style={styles.text}>Longitud: {JSON.stringify(location?.coords.longitude)}</Text>
                </View>
            </View>

            <MapView 
                ref={mapRef}
                style={styles.map}
                zoomEnabled
                initialRegion={{
                    latitude: 18.5955558,
                    longitude: -98.4907685,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
            >
                {location ? (
                    <Marker coordinate={location.coords}>
                        <Ionicons name="location-sharp" size={50} color="red" />
                    </Marker>
                ) : null}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffedb6',
    },
    permissionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    permissionText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    locationBox: {
        position: 'absolute',
        top: 20,
        left: '10%',
        right: '10%',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 9,
        zIndex: 1,
    },
    locationView: {
        fontSize: 14,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontWeight: "bold",
        fontSize:10
    },
    map: {
        width: '100%',
        height: '100%',
    },
    historyButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight:"bold"
    },
    floatingButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#1E90FF',
        borderRadius: 50,
        padding: 15,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 9 },
        shadowRadius: 9,
    }
});