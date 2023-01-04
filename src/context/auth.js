import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });

    useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
            const parsed = JSON.parse(data);
            setAuth({...auth, user: parsed.user, token: parsed.token});
        }
    }, []);
    

    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {props.children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth};