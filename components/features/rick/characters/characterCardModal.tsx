import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Character } from "./characterType";
import { IconSymbol } from "@/components/ui/IconSymbol";

type Props = {
    character: Character;
    isVisible: boolean;
    onCancel: () => void;
};

export function CharacterCardModal({ character, isVisible, onCancel }: Props) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onCancel}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={onCancel} style={styles.closeButton}>
                        <IconSymbol size={28} name="arrow.left" color={"black"} />
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.title}>
                        {character.name}
                        </Text>
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.label}>Tipo</Text>
                        <Text style={styles.info}>{character.type || "Unknown"}</Text>

                        <Text style={styles.label}>Género</Text>
                        <Text style={styles.info}>{character.gender}</Text>

                        <Text style={styles.label}>Participaciones en capítulos</Text>
                        <Text style={styles.info}>{character.episode.length}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    title:{
        fontWeight: "700",
        fontSize: 35,
        color: "rgb(39, 70, 162)",
        marginBottom: 5,
        textAlign:"center"
    },

    modalContent: {
        width: "80%",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeButton: {
        alignSelf: "flex-start",
        marginBottom: 10,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    content: {
        alignItems: "center",
    },
    label: {
        fontWeight: "600",
        fontSize: 20,
        color:  "rgb(39, 70, 162)",
        marginBottom: 5,
    },
    info: {
        fontWeight: "400",
        fontSize: 24,
        marginBottom: 10,
        textAlign: "center",
    },
});