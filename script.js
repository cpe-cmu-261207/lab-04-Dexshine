const inputTask = document.querySelector('#inputTask')

//add task by press Enter
function pressEnter(event){
    const x = event.key
    if(x === 'Enter') clickCallback() //1.2) if Enter was pressed, call clickCallback
}
//create main div
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
        div1.setAttribute('class', 'flex')
        const p1 = document.createElement('p')
        p1.innerHTML = inputTask.value
        document.body.append(postContainer)//add post container to HTML

        postContainer.prepend(div1) //add new div ontop of old div
        div1.append(p1) //add p in new div
        //done button
        const doneButton = document.createElement('button')
        doneButton.setAttribute('id','done')
        doneButton.setAttribute('class', 'bg-green-300')
        doneButton.innerHTML = 'DONE'
        div1.append(doneButton)
        doneButton.addEventListener('click', () => {

        })
        //delete button
        const deleteButton = document.createElement('button')
        deleteButton.setAttribute('id', 'delete')
        deleteButton.setAttribute('class', 'bg-red-300')
        deleteButton.innerHTML = 'DELETE'
        div1.append(deleteButton)
        //4)click button to delete task
        deleteButton.addEventListener('click', () => {
            postContainer.removeChild(div1)
        })

        
    } 
}