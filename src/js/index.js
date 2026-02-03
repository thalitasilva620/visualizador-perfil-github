import { fetchGithubUser } from './api.js';
import { 
  renderLoading, 
  renderProfileResults, 
  clearProfileResults, 
  updateProfileResults 
} from './render.js';

// Elementos do DOM
const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

/**
 * Valida se o nome de usuário foi fornecido
 * @param {string} userName - Nome do usuário
 * @returns {boolean} Verdadeiro se válido
 */
function validateUserName(userName) {
  if (!userName) {
    alert('Por favor, digite um nome de usuário do GitHub.');
    return false;
  }
  return true;
}

/**
 * Executa a busca de um usuário do GitHub
 */
async function handleSearch() {
  const userName = inputSearch.value.trim();

  if (!validateUserName(userName)) {
    return;
  }

  try {
    updateProfileResults(profileResults, renderLoading());

    const userData = await fetchGithubUser(userName);
    updateProfileResults(profileResults, renderProfileResults(userData));

  } catch (error) {
    console.error("Erro ao buscar o perfil do usuário:", error);
    alert(error.message || "Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.");
    clearProfileResults(profileResults);
  }
}


function initEventListener() {
  btnSearch.addEventListener('click', handleSearch);

  // opcional: permitir buscar apertando Enter
  inputSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  });
}

document.addEventListener('DOMContentLoaded', initEventListener);




