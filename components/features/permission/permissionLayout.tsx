import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  icon: any,
  title: string,
  granted: boolean,
  requestPermission: () => void,
}

export function PermissionLayout({ icon, title, granted, requestPermission }: Props) {
  return(
    <View style={styles.container}>
      <Ionicons name={icon} size={40} style={styles.icon}/>

      <Text style={styles.title}>{title}</Text>

      {granted ? (
        <Ionicons name="checkmark-outline" size={40} color="green" style={styles.icon}/>
      ) : (
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Autorizar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },

  icon: {
    marginRight: 30,
  },

  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
