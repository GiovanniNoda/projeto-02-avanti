import { FaGithub } from "react-icons/fa"

import { Search } from "./components/Search"
import { ErrorMessage } from "./components/Error-message"
import { Profile } from "./components/Profile"
import { UserProps } from "./utils/types"
import { useState } from "react"

export function App() {
  const [userData, setUserData] = useState<UserProps | null>(null)

  const handleSearch = (data: UserProps) => {
    setUserData(data)
  }

  return (
    <main className="flex justify-center items-center min-h-screen w-full bg-gradient-to-br from-[#0A3990] to-[#1F1F1F]">

      <div className="w-[80%] min-h-[600px] bg-primary flex flex-col items-center gap-8 rounded-md p-10">

        <div className="flex items-center gap-2">
          <FaGithub size={64} color="#fff" />

          <h1 className="text-white text-6xl">
            Perfil {' '} 
            <strong>Github</strong>
          </h1>
        </div>

        <Search onSearch={handleSearch} />

        {userData ? <Profile userData={userData} /> : <ErrorMessage />}
      </div>
    </main>
  )
}
