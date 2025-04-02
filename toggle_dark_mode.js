document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle-dark-mode");
    toggleButton.textContent = "🌙 Modo Escuro";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.textContent = "☀️ Modo Claro";
        } else {
            toggleButton.textContent = "🌙 Modo Escuro";
        }
    });

    /* Adicionando o estilo para o modo escuro no CSS */
    const style = document.createElement("style");
    style.innerHTML = `
        .dark-mode {
            background: #121212;
            color: #e0e0e0;
        }
        .dark-mode .post {
            background: #242424;
            color: #ffffff;
            border: 1px solid #444;
        }
        .dark-mode .read-more {
            background: #ffcc00;
            color: #242424;
        }
        .dark-mode header {
            background: rgba(30, 30, 30, 0.9);
        }
        .dark-mode h2, .dark-mode p {
            color: #ffffff;
        }
    `;
    document.head.appendChild(style);
});