export function Loading() {
    return (
        <div className="w-full h-full flex justify-center items-center gap-4 mt-12">
             <div className="w-10 h-10 border-4 border-bg-gray border-t-transparent rounded-full animate-spin opacity-70" />

            <p className="text-bg-gray text-2xl opacity-70">Carregando informações...</p>
        </div>
    )
}