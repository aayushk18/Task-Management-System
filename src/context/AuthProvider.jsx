import React, { createContext, useContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'


export let AuthContext = createContext()

const AuthProvider = ({ children }) => {


    const [userData, setUserData] = useState(null)


    useEffect(() => {

        let { employees, admin } = getLocalStorage()
        setUserData({ employees, admin })



    }, [])

    // useEffect(() => {
    //     if (userData !== null) {
    //         console.log(userData.employees);  // Logs after userData is updated
    //     }
    // }, [userData]);


    // if (data.employees.find((e) => { e.password == '123' })) { console.log(e.password) }


    // setUserData({ employees, admin })
    // console.log(userData)




    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>


    );
};
export default AuthProvider