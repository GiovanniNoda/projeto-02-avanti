import { useState } from "react"
import { getApiUserGithub } from "../utils/api-request"

import { IoSearchOutline } from "react-icons/io5"
import { UserProps } from "../utils/types"

interface SearchProps {
    onSearch: (data: UserProps | null) => void
}

export function Search({ onSearch }: SearchProps) {
    const [username, setUsername] = useState("")

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault() 
        const userData = await getApiUserGithub(username.replace(/\s+/g, ""))
    
        onSearch(userData)

        setUsername("")
    }

    return (
        <form onSubmit={handleSearch} className="w-[95%] flex items-center relative md:w-[50%]">
            <input type="text" placeholder="Digite um usuário do Github" className="w-[100%] bg-white rounded-md py-2 px-3 placeholder:text-gray-600 placeholder:text-sm md:placeholder:text-[1rem] md:py-4 md:px-5" value={username} onChange={(e) => setUsername(e.target.value)} />

            <button type="submit" className="absolute right-[0.5px] bg-blue-600 rounded-md p-1.75 cursor-pointer hover:bg-blue-700 transition-colors duration-200 md:p-3">
                <IoSearchOutline size={24} color="#fff" className="md:size-[31px]" />
            </button>
        </form>
    )
}