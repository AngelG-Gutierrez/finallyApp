import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Note } from "./note"

type Props = {
    note:Note
    onEdit:(note:Note) => void
}

export function NoteCard({note, onEdit} : Props){

    const truncateDescription = (text: string, limite: number) => {
        const palabras = text.split(' ');
        if (palabras.length > limite) {
            return palabras.slice(0, limite).join(' ') + '...';
        }
        return text;
    };

    return(
        <TouchableOpacity onPress={()=> onEdit(note)}>
            <View style={styles.card}>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.text}>{truncateDescription(note.text,10)}</Text>
                <View style={styles.row}>
                    <Text style={styles.dateLabel}>Fecha: </Text>
                    <Text style={styles.dateString}>{new Date(note.date).toLocaleString("es-MX", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    })}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius:14,
        width:"100%",
        height:"auto",
        borderWidth:4,
        borderColor:"black",
        backgroundColor:"rgb(247, 218, 172)",
        marginTop:20,
    },

    title:{
        fontSize:20,
        marginLeft:20,
        marginTop:10,
        fontWeight:"700"
    },

    text:{
        fontSize:18,
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        textAlign:"justify"
    },

    dateString:{
        fontSize:18,
        marginTop:10,
        textAlign:"justify"
    },

    dateLabel:{
        fontSize:18,
        fontWeight:"600",
        marginLeft:20,
        marginTop:10,
        marginBottom:10
    },

    row:{
    display:"flex",
    flexDirection:"row"
    }
})