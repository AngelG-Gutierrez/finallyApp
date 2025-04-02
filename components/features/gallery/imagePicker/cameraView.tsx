/**
 * Componente que abre la camara del dispositivo
 */

import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    onCancel: () => void;
    onTakePicture: (uri?: string) => void;
}

export function CameraComponent(
    {onCancel,onTakePicture}: Props
) {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View/>;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Se necesita acceso a la camara</Text>
        <Button onPress={requestPermission} title="Otorgar Permiso" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      onTakePicture(photo?.uri);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={toggleCameraFacing}
                    >
                        <Ionicons
                            name= "camera-reverse"
                            size={40}
                            color={'white'}
                        />
                    </TouchableOpacity> 
                    <TouchableOpacity
                        style={styles.button}
                        onPress={takePicture}
                    >
                        <MaterialIcons 
                            name="camera" 
                            size={62} 
                            color={'white'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>onCancel()}
                    >
                        <Ionicons 
                            name="close" 
                            size={40} 
                            color={'white'}
                        />
                    </TouchableOpacity>
            </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
    gap: 40,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
