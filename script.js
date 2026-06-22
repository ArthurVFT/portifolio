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

// Theme Toggle Logic
const themeToggleBtn = document.getElementById("themeToggle");
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        
        // Opcional: muda o texto do botão para dar feedback visual
        if (document.body.classList.contains("dark")) {
            themeToggleBtn.textContent = "Modo Claro";
        } else {
            themeToggleBtn.textContent = "Modo Escuro";
        }
    });
}