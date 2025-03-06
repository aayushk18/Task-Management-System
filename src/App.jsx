import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

import { AuthContext } from './context/AuthProvider'
// import { getLocalStorage } from './utils/localStorage'


const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  // useEffect((authData) => {



  // }, [authData])




  const authData = useContext(AuthContext)

  // console.log(authData.employees)


  // let adminData = authData.admin
  // let empData = authData.employees

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser')

  //     if (loggedInUser) {

  //     }
  //   }


  // }, [authData])


  const handleLogin = (email, password) => {
    if (authData) {      //(email == 'admin@example.com' && password == '123')


      const Admin = authData.admin.find((e) => email == e.email && password == e.password)
      const employee = authData.employees.find((e) => email == e.email && password == e.password)

      const combinedData = { Admin, employee }


      if (Admin) {
        setUser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify('admin'))
        setLoggedInUserData(authData)

        // console.log()

      } else if (employee) {        //(email == 'user@example.com' && password == '123')

        setUser('employee')
        localStorage.setItem('loggedInUser', JSON.stringify('user'))

        setLoggedInUserData(employee)

        console.log(employee)


      } else {
        console.log('invalid details')
        alert('Incorrect Email or password !!!!!')
      }
    }

    // const keepLoggedIn = (value) => {
    //   if (JSON.parse(localStorage.getItem('checkLogin').role) == value) {

    //   } else if (JSON.parse(localStorage.getItem('loggedInUser').role) == value) {
    //     console.log(value)
    //   }
    // }



  }










  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : '')}

    </>
  )
}

export default App