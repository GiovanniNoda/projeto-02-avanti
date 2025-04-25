import { UserProps } from "../utils/types"

interface ProfileInfoProps {
    userData: UserProps
}

export function Profile({ userData }: ProfileInfoProps) {
    return (
        <div className="w-[80%] flex items-center gap-8 bg-bg-gray rounded-3xl py-6 px-10">
            <div className="w-[232px] h-[232px] rounded-[50%] overflow-hidden bg-bg-gray border-3 border-blue-700">
                <img src={userData.avatar_url} alt="Foto de perfil do usuário" className="w-full h-full object-cover block" />
            </div>

            <div className="w-[70%] flex flex-col gap-6">
                <h2 className="text-blue-700 font-medium text-xl">{userData.name}</h2>

                <p>{userData.bio}</p>
            </div>
        </div>
    )
}