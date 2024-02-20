import React, { useState } from "react";


export default function Login() {

    const [username, setUserName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setemail] = useState("");

    return(

        <form className="flex flex-col h-80 w-72 bg-gray-100 rounded-sm">
        <div className="flex flex-col justify-center items-center mt-5">
            <h1 className="text-4xl">Hello {username} {lastname}</h1>
            <h1 className="text-xl">{email}</h1>
        </div>
        <input className="bg-gray-100 h-20 w-60 mx-5 mt-4 rounded-sm outline-2 outline-blue-300 pl-2 ring-1 ring-gray-300" value={username} type="text" placeholder="First name" onChange={(e) => setUserName(e.target.value)} />
        <input className="bg-gray-100 h-20 w-60 mx-5 mt-4 rounded-sm outline-2 outline-blue-300 pl-2 ring-1 ring-gray-300" value={lastname} type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
        <input className="bg-gray-100 h-20 w-60 mx-5 mt-4 rounded-sm outline-2 outline-blue-300 pl-2 ring-1 ring-gray-300" value={email} type="text" placeholder="email address" onChange={(e) => setemail(e.target.value)} />
        <button className="mt-7 bg-blue-400 mx-5 h-16 rounded-sm mb-6 hover:bg-blue-500" type="submit"> Submit</button>
    </form>
    )
}