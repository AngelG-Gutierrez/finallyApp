import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CameraPermission } from "./cameraPermission";
import { LocationPermission } from "./locationPermision";
import { CalendarPermission } from "./calendarPermission";
import { GalleryPermission } from "./galleryPermission";
import { ContactsPermission } from "./contactsPermission";
import { MicrophonePermission } from "./microphonePermission";

export function PermissionsView() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Permisos</Text>
            <View style={styles.permissionContainer}>
                <CameraPermission/>
                <LocationPermission/>
                <CalendarPermission/>
                <GalleryPermission/>
                <ContactsPermission/>
                <MicrophonePermission/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    permissionContainer: {
        alignItems: "center",
        gap: 20,
    },
});