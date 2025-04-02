import { Modal, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { Note } from "./note";
import { useEffect, useState } from "react";

type Props = {
    note: Note | null;
    open: boolean;
    onSaved: (note: Note) => void;
    onClose: () => void;
};

export function NoteModal({
    note,
    open,
    onSaved,
    onClose
}: Props) {
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");

    const handleSave = () => {
        if(!note) return;
        onSaved({
            ...note,
            title,
            text,
        });
    };

    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setText(note.text);
        }
    }, [note]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={() => onClose()}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Nota</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Título"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Contenido"
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={onClose}
                        >
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.saveButton]}
                            onPress={handleSave}
                        >
                            <Text style={styles.buttonText}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
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
        backgroundColor: "rgb(255, 222, 194)",
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
    },
    input: {
        width: "100%",
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
        fontSize:20
    },
    textArea: {
        height: 400,
        textAlignVertical: "top",
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
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
    saveButton: {
        backgroundColor: "#4CAF50",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});