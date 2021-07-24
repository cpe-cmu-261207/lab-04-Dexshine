const inputTask = document.querySelector('#inputTask')

//add task by press Enter
function pressEnter(event){
    const x = event.key
    if(x === 'Enter') clickCallback() //1.2) if Enter was pressed, call clickCallback
}
//when add task button clicked
const clickCallback = () => {
    if(inputTask.value === ''){ //check if input is empty
        alert('Task cannot be empty') //1.4
    }
    else{
        console.log(inputTask.value)
        const postContainer = document.createElement('div')
        const div1 = document.createElement('div')
        const p1 = document.createElement('p')
        const allDiv = postContainer.querySelectorAll('div')
        p1.innerHTML = inputTask.value
        document.body.append(postContainer)
        postContainer.append(div1)
        div1.append(p1)

    } 
}