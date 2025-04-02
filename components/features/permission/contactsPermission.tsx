import { useEffect, useState } from "react";
import { PermissionLayout } from "./permissionLayout";
import { getPermissionsAsync, PermissionResponse, requestPermissionsAsync } from "expo-contacts";


export function ContactsPermission() {

    const requestPermission = ()=>{
        requestPermissionsAsync()
        .then((result) => {
            console.log(result);
            setPermission(result);
        });
    }

    const[permission, setPermission] = useState<PermissionResponse | undefined>(undefined);
    
    useEffect(() => {
        getPermissionsAsync()
        .then((result) => {
            console.log(result);
            setPermission(result);
        });
    },[]);
    
    return (
        <PermissionLayout
        icon="people"
        title="Contactos"
        granted={permission?.granted||false}
        requestPermission={requestPermission}
        />
    );
}