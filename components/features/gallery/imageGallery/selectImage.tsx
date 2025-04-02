import { StyleSheet, View, Image } from "react-native";

type SelectedImageProps = {
    uri: string | null;
};

export function SelectedImage({ uri }: SelectedImageProps) {
    if (!uri) {
        return null;
    }

    return (
        <View style={styles.imageContainer}>
            <Image source={{ uri }} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: 20,
        alignItems:"center"
    },
    image: {
        width: 100,
        height: 100,
    },
});