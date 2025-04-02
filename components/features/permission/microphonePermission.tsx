import { useMicrophonePermissions } from "expo-camera";
import { PermissionLayout } from "./permissionLayout";

export function MicrophonePermission() {

    const [permission, requestPermission] = useMicrophonePermissions();
    
    return (
        <PermissionLayout
        icon="mic"
        title="Micrófono"
        granted={permission?.granted|| false}
        requestPermission={requestPermission}
        />
    );
}