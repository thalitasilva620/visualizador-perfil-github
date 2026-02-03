const BASE_URL = 'https://api.github.com';

/**
 * Busca dados do usuário no GitHub
 * @param {string} userName - Nome do usuário do GitHub
 * @returns {Promise<Object>} Dados do usuário
 * @throws {Error} Erro ao buscar o usuário
 */
export async function fetchGithubUser(userName) {
  const response = await fetch(`${BASE_URL}/users/${userName}`);

  if (!response.ok) {
    throw new Error(`Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.`);
  }

  return await response.json();
}
