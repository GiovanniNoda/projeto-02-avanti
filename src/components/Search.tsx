import { IoSearchOutline } from "react-icons/io5"

export function Search() {
    return (
        <form className="w-[50%] flex items-center relative">
            <input type="text" placeholder="Digite um usuário do Github" className="w-[100%] py-4 px-5 bg-white rounded-md placeholder:text-gray-600" />

            <button type="submit" className="absolute right-[0.5px] bg-blue-600 rounded-md p-3 cursor-pointer hover:bg-blue-700 transition-colors duration-200">
                <IoSearchOutline size={31} color="#fff" />
            </button>
        </form>
    )
}