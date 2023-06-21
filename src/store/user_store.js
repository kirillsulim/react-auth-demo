import { useEffect, useState } from "react"


const userKey = "USER";


export const useUserState = () => {
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem(userKey)) || null;
    });

    useEffect(
        () => {
            localStorage.setItem(userKey, JSON.stringify(user));
        },
        [user]
    );

    return [user, setUser];
}
