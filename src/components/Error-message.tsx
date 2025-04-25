export function ErrorMessage() {
    return (
        <div className="w-[70%] flex flex-col justify-center items-center bg-bg-gray rounded-sm p-4">
            <p className="text-red-500 font-medium">Nenhum perfil foi encontrado com esse nome de usuário.</p>
          
            <p className="text-red-500 font-medium">Tente novamente</p>
        </div>
    )
}