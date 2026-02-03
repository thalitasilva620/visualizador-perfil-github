/**
 * Renderiza o card do perfil do usuário
 * @param {Object} userData - Dados do usuário do GitHub
 * @returns {string} HTML do perfil
 */
function renderProfileCard(userData) {
  return `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
      <div>
        <h2>${userData.name}</h2>
        <p>${userData.bio || 'Não possui bio cadastrada 🤔.'}</p>
      </div>
    </div>
  `;
}

/**
 * Renderiza os contadores de seguidores e seguindo
 * @param {Object} userData - Dados do usuário do GitHub
 * @returns {string} HTML dos contadores
 */
function renderCounters(userData) {
  return `
    <div class="profile-counters">
      <div class="followers">
        <h4>👥 Seguidores</h4>
        <span>${userData.followers}</span>
      </div>
      <div class="following">
        <h4>👥 Seguindo</h4>
        <span>${userData.following}</span>
      </div>
    </div>
  `;
}

/**
 * Renderiza o estado de carregamento
 * @returns {string} HTML de carregamento
 */
export function renderLoading() {
  return `<p class="loading">Carregando...</p>`;
}

/**
 * Renderiza os resultados do perfil
 * @param {Object} userData - Dados do usuário do GitHub
 * @returns {string} HTML completo do perfil
 */
export function renderProfileResults(userData) {
  return renderProfileCard(userData) + renderCounters(userData);
}

/**
 * Limpa os resultados do perfil
 * @param {HTMLElement} profileResults - Elemento onde os resultados são exibidos
 */
export function clearProfileResults(profileResults) {
  profileResults.innerHTML = '';
}

/**
 * Atualiza o conteúdo dos resultados
 * @param {HTMLElement} profileResults - Elemento onde os resultados são exibidos
 * @param {string} content - Conteúdo HTML a ser inserido
 */
export function updateProfileResults(profileResults, content) {
  profileResults.innerHTML = content;
}
