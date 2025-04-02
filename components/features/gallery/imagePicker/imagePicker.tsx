import { Ionicons } from '@expo/vector-icons';
import { useState, useCallback } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraComponent } from './cameraView';
import * as PhotoPicker from "expo-image-picker";
import { PhotoPreview } from './photoPreview';

type ImagePickerProps = {
    onImageSelected: (uri: string | null) => void;
};

export function ImagePicker({ onImageSelected }: ImagePickerProps) {
    const [open, setOpen] = useState(false);
    const [cameraOpen, setCameraOpen] = useState(false);
    const [image, setImage] = useState<string | undefined | null>(null);

    const onPictureTaked = (uri?: string) => {
        setCameraOpen(false);
        setImage(uri);
    };

    const pickImage = async () => {
        let result = await PhotoPicker.launchImageLibraryAsync({
            mediaTypes: ('images'),
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const onNewPhoto = () => {
        setImage(undefined);
        setCameraOpen(true);
    };

    const onSavePhoto = (uri: string) => {
        Alert.alert("Foto guardada.");
        setOpen(false);
        setImage(undefined);
        onImageSelected(uri);
    };

    const renderMenu = (
        <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
                <Text style={styles.title}>Origen de la imagen</Text>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.button, styles.saveButton]}
                        onPress={() => setCameraOpen(true)}
                    >
                        <Text style={styles.buttonText}>Cámara</Text>
                        <Ionicons
                            name="camera-outline"
                            size={32}
                            color={'white'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.saveButton]}
                        onPress={pickImage}
                    >
                        <Text style={styles.buttonText}>Galería</Text>
                        <Ionicons
                            name="image-outline"
                            size={32}
                            color={'white'}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.button, styles.cancelButton]}
                    onPress={() => setOpen(false)}
                >
                    <Text style={styles.buttonText}>Cancelar</Text>
                    <Ionicons
                        name="close-outline"
                        size={32}
                        color={'white'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View>
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={() => setOpen(true)}>
                    <Ionicons
                        name="archive-outline"
                        size={42}
                        color={'green'}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Elegir Origen</Text>
            </View>
            <Modal
                visible={open}
                transparent={true}
                animationType='slide'
            >
                {!cameraOpen && !image ? renderMenu : null}
                {cameraOpen ? (
                    <CameraComponent
                        onCancel={() => setCameraOpen(false)}
                        onTakePicture={onPictureTaked}
                    />
                ) : null}

                {image ? (
                    <PhotoPreview
                        uri={image}
                        onCancel={() => setImage(undefined)}
                        onSave={onSavePhoto}
                        newPhoto={onNewPhoto}
                    />
                ) : null}
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "rgb(49, 163, 201)",
        borderRadius: 15,
        width: "80%",
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "white",
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
    },
    cancelButton: {
        backgroundColor: "#f44336",
    },
    saveButton: {
        backgroundColor: "#4CAF50",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 20,
        alignItems: 'center',
        marginBottom: 10,
    }
});