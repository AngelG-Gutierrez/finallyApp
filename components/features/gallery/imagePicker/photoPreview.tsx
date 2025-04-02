import { Feather, MaterialIcons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Image, StyleSheet, TouchableOpacity, View} from "react-native";

type Props = {
    uri: string;
    onSave: (uri: string) => void;
    onCancel: () => void;
    newPhoto: () => void;
}

export function PhotoPreview({
    uri,
    onSave,
    onCancel,
    newPhoto,

}: Props) {

    //Tarea agarrar una imagen de la galeria 
    //ia

    return (
        <View style={styles.container}>
            <Image
                source={{ uri }}
                style={{
                    width: "auto",
                    height: "60%",
                    objectFit: "contain"
                }}
            >

            </Image>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={newPhoto}>
                    <FontAwesome name="file-picture-o" size={44} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => onSave(uri)}>
                    <MaterialIcons name="save" size={54} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={() => onCancel()}>
                    <Feather name="x" size={44} color="white" />
                </TouchableOpacity>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:"black"
    },
    row: {
        flexDirection: "row",
        justifyContent:"space-between"
    },

    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    cancelButton: {
        backgroundColor: "#f44336",
    },
    galleryButton: {
        backgroundColor: "#f44336",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
})