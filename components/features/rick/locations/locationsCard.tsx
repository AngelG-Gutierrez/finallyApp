import {Image, StyleSheet, Text, View} from "react-native";
import { Location } from "./locationType";

type Props ={
    location:Location

}

export function LocationCard({location}:Props){
    return(
        <View style={style.card}>
            <Image
                style={style.image}
                source={require('@/assets/images/planets.png')}
            />
            <View style={style.content}>
                <Text style={style.label}>Nombre</Text>
                <Text style={style.info}>{location.name}</Text>

                <Text style={style.label}>Tipo</Text>
                <Text style={style.info}>{location.type}</Text>

                <Text style={style.label}>Dimensión</Text>
                <Text style={style.info}>{location.dimension}</Text>
                <Text style={style.label}>Número de residentes</Text>
                <Text style={style.info}>{location.residents.length}</Text>
            </View>
        </View>
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