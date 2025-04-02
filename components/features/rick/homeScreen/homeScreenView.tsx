import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router"
export function HomeScreenView(){
    const router = useRouter();
    return(
        <View style={styles.scrollView}>
            <View>
                <View style={styles.nav}>
                    <Text style={styles.navText}>Rick and Morty API</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                    style={styles.image}
                    source={require('@/assets/images/ricks.jpeg')}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                    //onPress={() => router.push("/(characters)")}
                        >
                        <Text style={styles.buttonText}>Personajes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    //onPress={() => router.push("/(cepisodes)")}
                    >
                        <Text style={styles.buttonText}>Episodios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    //onPress={() => router.push("/(dlocations)")}
                    >
                        <Text style={styles.buttonText}>Locaciones</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView:{
        width:"100%",
        height:810,
        //marginTop:65,
        padding:15,
        backgroundColor:"rgb(45, 140, 78)",
    },

    imageContainer:{
        marginTop:40,
        alignItems:'center'
    },

    image:{
        borderRadius:40
    },

    buttonContainer:{
        alignItems:'center'
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
        width:140,
        marginTop:50
    },

    buttonText:{
        textAlign:"center",
        marginTop:10,
        fontFamily:"arial",
        fontSize:18,
        fontWeight:"300",
    },
})