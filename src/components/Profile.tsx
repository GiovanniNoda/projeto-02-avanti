import { UserProps } from "../utils/types"

interface ProfileInfoProps {
    userData: UserProps
}

export function Profile({ userData }: ProfileInfoProps) {
    return (
        <div className="w-[95%] flex flex-col items-center gap-8 bg-bg-gray rounded-3xl py-6 px-10 md:w-[80%] lg:w-[90%] lg:flex-row xl:w-[80%]">
            <div className="w-[128px] h-[128px] rounded-[50%] overflow-hidden bg-bg-gray border-3 border-blue-700 md:w-[176px] md:h-[176px] xl:w-[232px] xl:h-[232px]">
                <img src={userData.avatar_url} alt="Foto de perfil do usuário" className="w-full h-full object-cover block" />
            </div>

            <div className="w-[90%] flex flex-col items-center gap-6 lg:items-start md:w-[70%]">
                <h2 className="text-lg text-blue-700 font-medium md:text-xl">{userData.name}</h2>

                <p className="text-sm text-primary md:text-[1rem]">{userData.bio}</p>
            </div>
        </div>
    )
}