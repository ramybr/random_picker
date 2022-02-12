const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");



textArea.focus();
textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    if (e.key == 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 30)
        randomSelector();
    }
})


function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('choice');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });


}


function randomSelector() {
    const times = 20;
    const interval = setInterval(() => {

        const randomChoice = pickRandomChoice();

        highlightChoice(randomChoice);

        setTimeout(() => {
            unHighlightChoice(randomChoice);
        }, 100);

    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomChoice = pickRandomChoice();
            highlightChoice(randomChoice);

        }, 100)


    }, times * 100)
}

function pickRandomChoice() {
    const choices = document.querySelectorAll('.choice');
    return choices[Math.floor(Math.random() * choices.length)];
}

function highlightChoice(choice) {
    choice.classList.add('highlight')
}

function unHighlightChoice(choice) {
    choice.classList.remove('highlight')
}