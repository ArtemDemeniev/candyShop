document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-question');

    if (questions.length === 0) {
        return; 
    }

    questions.forEach(function (question, index) {

        question.addEventListener('click', function () {
            const answer = question.nextElementSibling;

            if (!answer) {
                return; 
            }

            const currentDisplay = window.getComputedStyle(answer).display;

            if (currentDisplay === 'none') {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});