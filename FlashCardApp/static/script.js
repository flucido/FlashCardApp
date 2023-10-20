function flipCard(element) {
    const innerCard = element.querySelector('.card-inner');
    innerCard.style.transform = innerCard.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}
