import { useEffect, useState } from "react";
import { DataSource } from "./dataSource/datasource";
import { Location } from "./entities/location";
import { LocationCard } from "./cardLocation";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";

export function ListLocations(){
    const dataSource = new DataSource();
    const[locations,setLocations] = useState<Location[]>([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const results = await dataSource.list();
                setLocations(results);
            } catch (error) {
                Alert.alert("Error", "Error al obtener datos");
            }
        };

        fetchLocations();
    }, []);

    return(
        <View style={styles.container}>
            <FlatList
                data={locations}
                renderItem={({ item }) => 
                    <LocationCard 
                    location={item} 
                />}
                contentContainerStyle={{ paddingBottom: 80 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
        marginBottom: 15,
    },
    noData: {
        fontSize: 16,
        color: "#777",
        textAlign: "center",
        marginTop: 20,
    },
});