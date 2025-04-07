import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { ImagePicker } from "../imagePicker/imagePicker";
import { SelectedImage } from "./selectImage";

export function ImageGallery() {
    const [images, setImages] = useState<string[]>([]);

    const handleImageSelected = (uri: string | null) => {
        if (uri) {
            setImages([...images, uri]);
        }
    };

    return (
        <View style={styles.container}>
                <ImagePicker onImageSelected={handleImageSelected} />

                <Text style={styles.text}>Imágenes</Text>
            <ScrollView>
                <View style={styles.imagesContainer}>
                    {images.map((uri, index) => (
                        <SelectedImage key={index} uri={uri} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 45,
        paddingHorizontal: 24,
        backgroundColor:"white",
    },
    text: {
        fontSize: 34,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop:20,
        color: "black",
    },
    imagesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft:35,
        gap: 10,
    },
});
