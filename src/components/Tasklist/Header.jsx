import React from 'react'

const Header = (props) => {
    console.log(props.data)

    let value = props.data
    if (!props.data.name) {
        // for admin 
        value = props.data.admin[0]
    }

    const logOut = () => {
        localStorage.setItem('loggedInUser', JSON.stringify('logout'))
        props.changeUser('')



    }

    return (
        <div className='w-full flex flex-row justify-between p-10  '>
            <h1 className='[text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)] text-4xl  '>{value.name + ' ' + value.surname}</h1>
            <button onClick={logOut} className='h-10 w-30 font-semibold rounded-md bg-red-600   hover:scale-120 justify-items-start shadow-black ease-in-out transition duration-300 shadow-2xl cursor-pointer' type="submit">Log Out</button>
        </div>
    )
}

export default Header


// hover:w-34 hover:h-12 hover:-translate-y-1 