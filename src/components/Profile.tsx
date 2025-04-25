import { UserProps } from "../utils/types"

interface ProfileInfoProps {
    userData: UserProps
}

export function Profile({ userData }: ProfileInfoProps) {
    return (
        <div className="w-[80%] flex flex-col items-center gap-8 bg-bg-gray rounded-3xl py-6 px-10 lg:w-[90%] lg:flex-row xl:w-[80%]">
            <div className="w-[232px] h-[232px] rounded-[50%] overflow-hidden bg-bg-gray border-3 border-blue-700 lg:w-[176px] lg:h-[176px] xl:w-[232px] xl:h-[232px]">
                <img src={userData.avatar_url} alt="Foto de perfil do usuário" className="w-full h-full object-cover block" />
            </div>

            <div className="w-[70%] flex flex-col items-center gap-6 lg:items-start">
                <h2 className="text-blue-700 font-medium text-xl">{userData.name}</h2>

                <p>{userData.bio}</p>
            </div>
        </div>
    )
}