const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click', () => {
    const item = document.createElement('li');

    item.innerText = inputField.value;
    if (inputField.value === '') {
        return false;
    }
    item.classList.add('toDoAdded');
    toDoContainer.appendChild(item);
    inputField.value = '';
    
    const div = document.createElement('div');
    div.classList.add('div');
    

    const checkbox = document.createElement('span');
    checkbox.classList.add('checkbox');
    checkbox.innerHTML = '<i class="far fa-check-square"></i>';

    const remove = document.createElement('span');
    remove.classList.add('remove');
    remove.innerHTML = '<i class="fas fa-trash-alt"></i>';

    div.appendChild(checkbox);
    div.appendChild(remove);
    item.appendChild(div);
    

    checkbox.addEventListener('click', () => {
        item.classList.toggle('toDoCompleted');
    })

    remove.addEventListener('click', () => {
        toDoContainer.removeChild(item);
    })
})
