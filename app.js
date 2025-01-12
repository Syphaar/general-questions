//using selectors inside the element
// traversing the dom

// 
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    // console.log(orange);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    })
});






// TRAVERSING THE DOM
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (button) {
//     button.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });