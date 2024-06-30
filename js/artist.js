// Clickable follow button in Artist tab - Query Selector and then loop through all
const followButtons = document.querySelectorAll('.follow-button');

followButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (this.value === 'Follow') {
            this.value = 'Following';
            this.innerHTML = 'Following';
            this.style.backgroundColor = '#37454D';
        } else {
            this.value = 'Follow';
            this.innerHTML = 'Follow';
            this.style.backgroundColor = '#5A6F7A';
        }
    });
});