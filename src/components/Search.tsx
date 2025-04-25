import { useState } from "react"
import { getApiUserGithub } from "../utils/api-request"

import { IoSearchOutline } from "react-icons/io5"
import { UserProps } from "../utils/types"

interface SearchProps {
    onSearch: (data: UserProps) => void
}

export function Search({ onSearch }: SearchProps) {
    const [username, setUsername] = useState("")

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault() 
        const userData = await getApiUserGithub(username.replace(/\s+/g, ""))
    
        if (userData) {
            onSearch(userData);
        } 

        setUsername("")
    }

    return (
        <form onSubmit={handleSearch} className="w-[50%] flex items-center relative">
            <input type="text" placeholder="Digite um usuário do Github" className="w-[100%] py-4 px-5 bg-white rounded-md placeholder:text-gray-600" value={username} onChange={(e) => setUsername(e.target.value)} />

            <button type="submit" className="absolute right-[0.5px] bg-blue-600 rounded-md p-3 cursor-pointer hover:bg-blue-700 transition-colors duration-200">
                <IoSearchOutline size={31} color="#fff" />
            </button>
        </form>
    )
}