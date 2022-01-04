var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var remove = document.querySelector('.remove-btn')

var tags = ['nodejs','reactjs']

function render() {
    content.innerHTML = ''
    for (var i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>
                                ${tag}
                                <i class='bx bx-x' onclick='removeTag(${i})'></i>
                            </li>`
    }
    content.appendChild(input)
    input.focus()
}

function removeTag(index) {
    tags.splice(index, 1)
    render()
}

render()

input.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        tags.push(input.value.trim())
        input.value = ''
        render()
    }
})


remove.addEventListener('click', function() {
    tags = [];
    render()
})


