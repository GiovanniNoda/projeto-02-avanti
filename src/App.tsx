import { useState } from "react"
import { FaGithub } from "react-icons/fa"

import { Search } from "./components/Search"
import { ErrorMessage } from "./components/Error-message"
import { Profile } from "./components/Profile"
import { Loading } from "./components/Loading"

import { UserProps } from "./utils/types"

export function App() {
  const [userData, setUserData] = useState<UserProps | null>(null)
  const [hasError, setHasError] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (data: UserProps | null) => {
    setIsLoading(true)
    setHasSearched(true)
  
    // Simula um tempo mínimo de loading
    setTimeout(() => {
      if (data) {
        setUserData(data)
        setHasError(false)
      } else {
        setUserData(null)
        setHasError(true)
      }
  
      setIsLoading(false)
    }, 800)
  }

  return (
    <main className="flex justify-center items-center min-h-screen w-full bg-gradient-to-br from-[#0A3990] to-[#1F1F1F]">
      <div className="w-full min-h-[600px] bg-primary flex flex-col items-center gap-8 rounded-md p-10 md:w-[90%] lg:w-[80%]">

        <div className="flex items-center gap-2">
          <FaGithub size={32} color="#fff" className="md:size-16" />
          <h1 className="text-3xl text-white md:text-6xl">
            Perfil <strong>Github</strong>
          </h1>
        </div>

        <Search onSearch={handleSearch} />

        {isLoading ? (
          <Loading />
        ) : userData ? (
          <Profile userData={userData} />
        ) : hasSearched && hasError ? (
          <ErrorMessage />
        ) : null}
      </div>
    </main>
  )
}
