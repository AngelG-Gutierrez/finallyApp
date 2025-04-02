import { ActivityIndicator, Alert, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { EpisodeCard } from "./episodesCard";
import { useEffect, useRef, useState } from "react";
import { EpisodeResult } from "./episodeResults";
import { DataSource } from "./dataSource";

export function EpisodesScrollView(){
    //estado para los datos
    const[page,setPage] = useState<number>(1);

    const[loading, setLoading] = useState(false);

    const [data,setData] = useState<EpisodeResult>({
        info:{
            pages:0,
            count:0,
            next:null,
            prev:null,
        },
        results:[],
    });

    //para referenciar el flatlist
    const flatListRef = useRef(null);

    const dataSource = new DataSource();

    const handleEndRached = () => {
        //si no hay pagina siguiente 
        //o esta cargando, no hacer nada
        //caso contrario, incrementar pagina

        if(data.info.next && !loading){
            setPage(page + 1)
        }

        /*forma 2
        if(!data.info.next || loading){
        return;
        }
        setPage(page + 1)
        */
    }

    //cada vez que cambie el numero de pagina cargar los personajes
    useEffect(()=>{

        setLoading(true);

        dataSource.getEpisodes(page)
        .then((result)=>{
            //la clave es conservar los personajes
            //(conservar el estado actual)
            setData((prevData)=>({
                results:[...prevData.results, ...result.results],
                info:result.info
            }))
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
            <View><Text style={styles.characters}>Episodios: <Text style={styles.totals}>{data.results.length} de {data.info.count}</Text></Text></View>
            
            {loading ?(
                <ActivityIndicator size="large" color="red"/>
            ):null}

            <FlatList
                ref={flatListRef}
                style={styles.flatLIst}
                data={data.results}
                renderItem={(item)=>(
                    <EpisodeCard episode={item.item}/>
                )}
                keyExtractor={item=>item.id.toString()}
                
                onEndReached={handleEndRached}
                onEndReachedThreshold={0.5}
                refreshing={loading}
                ListFooterComponent={loading
                    ?<ActivityIndicator size={"large"}/> 
                    : undefined
                }
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
        height:700,
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
        fontSize:30,
        fontFamily:"arial",
        fontWeight:"400",
        color:"white"
    },

    totals:{
        fontWeight:"700",
        color:"rgb(126, 51, 200)"
    }
})