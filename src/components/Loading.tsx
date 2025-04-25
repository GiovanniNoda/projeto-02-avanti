export function Loading() {
    return (
        <div className="w-full h-full flex justify-center items-center gap-4 mt-12">
             <div className="w-5 h-5 border-2 border-bg-gray border-t-transparent rounded-full animate-spin opacity-70 md:w-10 md:h-10 md:border-4" />

            <p className="text-sm text-bg-gray opacity-70 md:text-2xl">Carregando informações...</p>
        </div>
    )
}