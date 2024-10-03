let currentSlide = 0;
 
    function showSlide(index) {
    const slides = document.querySelector('.slides');
   
   
    if (index >= 2) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
 
    const offset = -currentSlide * 100; // Ajusta a posição
    slides.style.transform = `translateX(${offset}%)`;
}
 
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

const finalizarCompraBtn = document.getElementById('lbutton2');

finalizarCompraBtn.addEventListener('click', function(event) {
    event.preventDefault();  
    
    document.getElementById('login_form').submit();

    alert('Seu pedido foi realizado com sucesso! Você receberá um email com as suas informações de pedido.');

    // Redireciona para a página inicial
    window.location.href = 'index.html';
});

function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playsound() {
    let clicksound = document.getElementById("selecionasom");
    clicksound.play();
}

function validateForm() {
    let form = document.getElementById('quiz-form');
    for (let i = 1; i <= 10; i++) {
        let userAnswer = form.elements[`q${i}`];
        if (!userAnswer.value) {
            alert("Por favor, preencha todos os campos.");
            return false; // Impede o envio do formulário
        }
    }
    return true; // Permite o envio do formulário
}

function SubmitQuiz() {
    if (!validateForm()) {
        return; // Se a validação falhar, não prossegue
    }

    let correctAnswers = {
        q1: "b",
        q2: "a",
        q3: "c",
        q4: "b",
        q5: "b",
        q6: "a",
        q7: "b",
        q8: "a",
        q9: "c",
        q10: "a",
    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswer = form.elements[key].value;
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    if (score === 10) {
        result.innerHTML = `Parabéns! você acertou ${score} de 10 perguntas!`;
        let successsound = document.getElementById('venceusom');
        successsound.play();
    } else {
        result.innerHTML = `Errou! você acertou ${score} de 10 perguntas!`;
        let failsound = document.getElementById('perdeusom');
        failsound.play();
    }

    document.getElementById('reiniciar').disabled = false;
}

function submitAgain() {
    let form = document.getElementById('quiz-form');
    form.reset();

    let options = form.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.disabled = false;
    });

    let result = document.getElementById('result');
    result.innerHTML = '';

    // Para o som
    let sounds = ['venceusom', 'selecionasom', 'perdeusom'];
    sounds.forEach(soundId => {
        let sound = document.getElementById(soundId);
        sound.pause();
        sound.currentTime = 0;
    });

    // Desabilita o botão novamente após o reset
    document.getElementById('reiniciar').disabled = true;
}

