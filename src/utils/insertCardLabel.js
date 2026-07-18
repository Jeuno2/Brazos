const insertCardLabel = () => {

    const card = document.querySelectorAll('.grid-item');

    const log = console.log;

    log(card);

    card.forEach((cardElement) => cardElement.addEventListener("mouseover", () => {

        if (cardElement.classList.contains('item-1')) {
            log('hi');
            log(cardElement.firstChild.innerText);
        }

        else {
            log('goodbye');
        }
    }))
}

export default insertCardLabel;