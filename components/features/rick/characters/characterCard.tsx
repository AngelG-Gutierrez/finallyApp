import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Character } from "./characterType";
import { useState } from "react";
import { CharacterCardModal } from "./characterCardModal";

type Props ={
    character:Character
}

export function CharacterCard({character}:Props){

    const [modalVisible, setModalVisible] = useState(false);

    const getStatusColor = () =>{
        switch(character.status){
            case "Alive":
                return style.alive
            case "Dead":
                return style.dead
            case "Unknown":
                return style.unknown
            default:
                return style.unknown
        }
    }
    return(
        <TouchableOpacity style={style.card}
        onPress={() => setModalVisible(true)}
        >
            <Image
            style={style.image}
            source={{uri:character.image}}
            />
            <View style={style.content}>
                <Text style={style.label}>Nombre</Text>
                <Text style={style.info}>{character.name}</Text>

                <Text style={style.label}>Estatus y Especie</Text>
                <View style={style.row}>
                    <View style={[style.status, getStatusColor()]}></View>
                    <Text style={style.info}>{character.status} - {character.species}</Text>
                </View>

                <Text style={style.label}>Ubicación</Text>
                <Text style={style.info}>{character.location.name}</Text>
                <Text style={style.label}>Origen</Text>
                <Text style={style.info}>{character.origin.name}</Text>
            </View>
            <CharacterCardModal 
                character={character} 
                isVisible={modalVisible} 
                onCancel={() => setModalVisible(false)} 
            />
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    card:{
        borderRadius:14,
        display:"flex",
        flexDirection:"row",
        width:'100%',
        height:"auto",
        borderWidth:4,
        borderColor:"rgb(205, 80, 80)",
        backgroundColor:"rgb(104, 213, 193)",
        marginTop:20,
    },
    image:{
        width:"40%",
        height:"100%",
        borderTopLeftRadius:8,
        borderEndStartRadius:8,
        objectFit:"cover",
        borderColor:"rgb(205, 80, 80)",
        borderWidth:3
    },
    content:{
        padding:6,
        display:"flex",
        flexDirection:"column",
        width:400,
        gap:4
    },

    label:{
        fontWeight:"600",
        fontSize:21,
        color:"rgb(119, 4, 213)",
        fontFamily:"Roboto",
        marginBottom:1,
        marginLeft:8
    },

    info:{
        fontWeight:"200",
        fontSize:19,
        fontFamily:"arial",
        marginBottom:4,
        marginLeft:8,
        width:200
    },

    status:{
        width:12,
        height:12,
        borderRadius:"50%",
        backgroundColor:"grey"
    },

    alive:{
        backgroundColor:"green"
    },

    dead:{
        backgroundColor:"red"
    },

    unknown:{
        backgroundColor:"orange"
    },

    row:{
        display:"flex",
        flexDirection:"row",
        alignItems:"baseline",
        gap:3,
        marginLeft:8
    }
});