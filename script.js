const inputTask = document.querySelector('#inputTask')

//add task by press Enter
function pressEnter(event){
    const x = event.key
    if(x === 'Enter') clickCallback() //1.2) if Enter was pressed, call clickCallback
}
const postContainer = document.createElement('div')
postContainer.setAttribute('id', 'postContainer')
//when add task button clicked
const clickCallback = () => {
    if(inputTask.value === ''){ //check if input is empty
        alert('Task cannot be empty') //1.4
    }
    else{
        console.log(inputTask.value)
        const div1 = document.createElement('div')
        const p1 = document.createElement('p')
        p1.innerHTML = inputTask.value
        document.body.append(postContainer)//add post container to HTML

        postContainer.prepend(div1) //add new div ontop of old div
        div1.append(p1) //add p in new div

    } 
}