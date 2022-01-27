
export function createCountString(type, count) {
    `You have changed ${type.name} ${count}, times`;
}


export function displaySlogans() {
    sloganList.textContent = '';
    const li = document.createElement('li');
    li.textContent = slogan;
    sloganList.append(li);
}
