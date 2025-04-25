import foto from '../../public/foto.jpg'

export function Profile() {
    return (
        <div className="w-[80%] flex items-center gap-8 bg-bg-gray rounded-3xl py-6 px-10">
            <div className="w-[232px] h-[232px] rounded-[50%] overflow-hidden bg-bg-gray border-3 border-blue-700">
                <img src={foto} alt="Foto de perfil do usuário" className="w-full h-full object-cover block" />
            </div>

            <div className="w-[70%] flex flex-col gap-6">
                <h2 className="text-blue-700 font-medium text-xl">Giovanni Noda</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia et est vitae maiores dolores tempora voluptate a voluptates eius esse, quas eum deserunt aut, eveniet sunt. Perspiciatis esse at a! Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}