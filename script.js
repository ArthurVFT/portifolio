// Dynamic Greeting Logic
let hora = new Date().getHours();
let saudacao = "";

if (hora >= 5 && hora < 12) {
    saudacao = "Bom dia! 🌅";
} else if (hora >= 12 && hora < 18) {
    saudacao = "Boa tarde! 🌤️";
} else {
    saudacao = "Boa noite! 🌙";
}

const saudacaoElement = document.getElementById("saudacao");
if (saudacaoElement) {
    saudacaoElement.textContent = saudacao;
}

// Theme Toggle Logic com LocalStorage
const themeToggleBtn = document.getElementById("themeToggle");

// 1. Verifica se o usuário já tinha escolhido o tema escuro antes
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (themeToggleBtn) themeToggleBtn.textContent = "Modo Claro";
}

// 2. Lógica do clique no botão
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        
        if (document.body.classList.contains("dark")) {
            themeToggleBtn.textContent = "Modo Claro";
            // Salva a escolha no navegador
            localStorage.setItem("theme", "dark");
        } else {
            themeToggleBtn.textContent = "Modo Escuro";
            // Remove a escolha do navegador
            localStorage.setItem("theme", "light");
        }
    });
}