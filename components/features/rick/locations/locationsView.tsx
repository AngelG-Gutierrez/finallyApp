import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LocationCard } from "./locationsCard";
import { useEffect, useState } from "react";
import { LocationResult } from "./locationResults";
import { DataSource } from "./dataSource";

export function LocationView(){
    //estado para los datos
    const[page,setPage] = useState<number>(1);

    const[loading, setLoading] = useState(false);

    const [data,setData] = useState<LocationResult>({
        info:{
            pages:0,
            count:0,
            next:null,
            prev:null,
        },
        results:[],
    });

    const dataSource = new DataSource();

    //cada vez que cambie el numero de pagina cargar los personajes
    useEffect(()=>{

        setLoading(true);

        dataSource.getLocation(page)
        .then((result)=>{
            setData(result)
        })
        .catch((error)=>{
            Alert.alert(`Error:${error.message}`)
        })

        .finally(()=>{
            setLoading(false);
        })
    },[page]);

    return(
        <View style={styles.scrollView}>
            <View>
            <View style={styles.nav}>
                <TouchableOpacity style={[styles.button, data.info.prev === null && styles.disabledButton]}
                    onPress={()=>{setPage(page-1)}}
                    disabled={data.info.prev === null}
                >
                    <Text style={styles.buttonText}>Anterior</Text>
                </TouchableOpacity>
                <Text style={styles.navText}>Pagina <Text>{page}</Text> de <Text>{data.info.pages}</Text></Text>
                <TouchableOpacity style={[styles.button, data.info.next === null && styles.disabledButton]}
                    onPress={()=>{setPage(page+1)}}
                    disabled={data.info.next === null}
                >
                <Text style={styles.buttonText}>Siguiente</Text>
                </TouchableOpacity>
            </View>
            <View><Text style={styles.characters}>Locaciones: <Text style={styles.totals}>{data.info.count}</Text></Text></View>
            
            {loading ?(
                <ActivityIndicator size="large" color="red"/>
            ):null}

            <FlatList
                style={styles.flatLIst}
                data={data.results}
                renderItem={(item)=>(
                    <LocationCard location={item.item}/>
                )}
                keyExtractor={item=>item.id.toString()}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView:{
        width:"100%",
        //marginTop:65,
        padding:15,
        backgroundColor:"rgb(45, 140, 78)",
    },

    flatLIst:{
        height:660,
        marginTop:20
    },

    nav:{
        height:80,
        width:"auto",
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        backgroundColor:"rgb(73, 228, 228)",
        borderRadius:20,
        flexDirection:"row",
        gap:20,
        borderColor:"rgb(45, 140, 78)",
        borderWidth:2
    },

    navText:{
        color:"black",
        fontSize:24,
        fontFamily:"arial",
        fontWeight:"700"
    },

    button:{
        backgroundColor:"bisque",
        borderRadius:12,
        height:40,
        width:90,
    },

    disabledButton: {
        backgroundColor: "gray", 
    },

    buttonText:{
        textAlign:"center",
        marginTop:10,
        fontFamily:"arial",
        fontSize:18,
        fontWeight:"300"
    },

    characters:{
        textAlign:"center",
        marginTop:20,
        fontSize:40,
        fontFamily:"arial",
        fontWeight:"400",
        color:"white"
    },

    totals:{
        fontWeight:"700",
        color:"rgb(126, 51, 200)"
    }
})