const emojis = ["🐅", "🍒", "⭐", "💎", "🔔", "🍋", "7️⃣", "🔥", "🌟", "💰"];

let saldo = 500;
let aposta = 10;
let banca = 10000;

const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const saldoEl = document.getElementById('saldo');
const apostaEl = document.getElementById('aposta');
const resultEl = document.getElementById('result');
const spinBtn = document.getElementById('spinBtn');

// Atualiza tela
function atualizarTela() {
    saldoEl.textContent = saldo.toFixed(2);
    apostaEl.textContent = aposta.toFixed(2);
}

// Gira os rolos com animação
function girarRolos() {
    const reels = [reel1, reel2, reel3];
    
    reels.forEach(reel => {
        reel.classList.add('spinning');
    });

    setTimeout(() => {
        const resultado = [
            emojis[Math.floor(Math.random() * emojis.length)],
            emojis[Math.floor(Math.random() * emojis.length)],
            emojis[Math.floor(Math.random() * emojis.length)]
        ];

        reel1.textContent = resultado[0];
        reel2.textContent = resultado[1];
        reel3.textContent = resultado[2];

        reels.forEach(reel => reel.classList.remove('spinning'));

        verificarResultado(resultado);
    }, 1800);
}

// Verifica resultado
function verificarResultado(resultado) {
    const tigraoCount = resultado.filter(r => r === "🐅").length;
    
    if (tigraoCount >= 1) {
        const ganho = Math.floor(Math.random() * 901) + 100; // 100 a 1000
        saldo += ganho;
        banca -= ganho;
        resultEl.innerHTML = `🎉 TIGRAÇO! + R$ ${ganho}`;
        resultEl.classList.add('win');
        
        // Aumenta aposta automaticamente após vitória
        if (aposta < 200) aposta += 10;
    } else {
        saldo -= aposta;
        banca += aposta;
        resultEl.textContent = "😢 Sem Tigrão...";
        resultEl.classList.remove('win');
    }

    atualizarTela();

    // Fim de jogo
    if (saldo < aposta) {
        setTimeout(() => {
            alert("💸 Saldo insuficiente! Fim de jogo.");
        }, 500);
    }
}

// Eventos dos botões
spinBtn.addEventListener('click', () => {
    if (saldo < aposta) {
        alert("Saldo insuficiente!");
        return;
    }
    resultEl.textContent = "";
    resultEl.classList.remove('win');
    girarRolos();
});

// Botões de aposta
document.getElementById('aumentar').addEventListener('click', () => {
    if (aposta + 10 <= saldo) {
        aposta += 10;
        apostaEl.textContent = aposta.toFixed(2);
    }
});

document.getElementById('diminuir').addEventListener('click', () => {
    if (aposta > 10) {
        aposta -= 10;
        apostaEl.textContent = aposta.toFixed(2);
    }
});

// Inicializa
atualizarTela();