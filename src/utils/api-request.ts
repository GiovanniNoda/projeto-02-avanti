import { UserProps } from "./types"

export async function getApiUserGithub(username: string): Promise<UserProps | null> {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)

        // Verificando o status 403 (requisição negada)
        if (response.status === 403) {
            alert('Requisição negada. Limite de requisições atingido.')
            console.error('Erro 403: Limite de requisições atingido. Tente novamente mais tarde.')
            return null
        }

        // Verificando o status 404 (usuário não encontrado)
        if (response.status === 404) {
            console.error('Erro 404: Usuário não encontrado')
            return null;
        }

        // Caso o status seja diferente de 200 (OK), lança um erro genérico
        if (!response.ok) {
            throw new Error('Erro desconhecido')
        }

        const data = await response.json()

        // Verifique se os dados realmente contêm as propriedades esperadas
        if (!data || !data.login || !data.name || !data.avatar_url) {
            throw new Error('Usuário não encontrado');
        }

        const userData: UserProps = {
            name: data.name,
            avatar_url: data.avatar_url, 
            bio: data.bio || 'Não disponível'
        };

        return userData;

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
        alert(errorMessage);
        return null;
    }
}