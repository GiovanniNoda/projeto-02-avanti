export function ErrorMessage() {
    return (
        <div className="w-[95%] text-sm flex flex-col justify-center items-center bg-bg-gray rounded-sm p-4 md:w-[70%] md:text-[1rem]">
            <p className="text-red-500 font-medium text-center">Nenhum perfil foi encontrado com esse nome de usuário.</p>
          
            <p className="text-red-500 font-medium">Tente novamente</p>
        </div>
    )
}