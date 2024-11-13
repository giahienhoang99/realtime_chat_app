import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
import { createContext, useContext, useEffect, useState } from "react";

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null); // by default, connection is null
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5001", {
                query: {
                    userId: authUser._id,
                },
            });

            setSocket(socket);

            // get online users to show on Home who's online
            // socket.on is used to listen to the events
            // and can be used both on client and server side
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            })

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};