import { Text, View, StyleSheet } from "react-native";
import { Location } from "./entities/location";

type Props = {
    location: Location;
};

export function LocationCard({ location }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Ubicación</Text>
            <View style={styles.locationDetails}>
                <Text style={styles.text}>Latitud: {location.latitude}</Text>
                <Text style={styles.text}>Longitud: {location.longitude}</Text>
                <Text style={styles.text}>Fecha: {location.timestamp.toDate().toLocaleString()}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    locationDetails: {
        paddingLeft: 10,
    },
    text: {
        fontSize: 14,
        color: "#555",
        marginBottom: 5,
    },
});