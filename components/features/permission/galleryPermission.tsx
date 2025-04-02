import { usePermissions } from "expo-media-library";
import { PermissionLayout } from "./permissionLayout";

export function GalleryPermission() {
    const [permission, requestPermission] = usePermissions();

    return(
        <PermissionLayout
            icon="images"
            title="Galería"
            granted={permission?.granted || false}
            requestPermission={requestPermission}
        />
    );
}