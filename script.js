import "tailwindcss/tailwind.css"
const inputTask = document.querySelector('#inputTask')
//const storedPost = localStorage.getItem('postContainer')
//const storedDone = localStorage.getItem('doneContainer')


//add task by press Enter
function pressEnter(event){
    const x = event.key
    if(x === 'Enter') clickCallback() //1.2) if Enter was pressed, call clickCallback
}
/*const mouseIn = () => {
    
}
const mouseOut = (div1) => {
    
}*/
//create main div
const postContainer = document.createElement('div')
postContainer.setAttribute('id', 'postContainer')
//postContainer.innerHTML = storedPost
const doneContainer = document.createElement('div')
doneContainer.setAttribute('id', 'doneContainer')
//doneContainer.innerHTML = storedDone


//when add task button clicked
const clickCallback = () => {
    if(inputTask.value === ''){ //check if input is empty
        alert('Task cannot be empty') //1.4
    }
    else{
        console.log(inputTask.value)
        const div1 = document.createElement('div')
        div1.setAttribute('class', 'flex w-130 mx-auto')
        div1.setAttribute('id','box')
        //div1.setAttribute('onmouseenter', 'mouseIn()')
        //div1.setAttribute('onmouseleave', 'mouseOut()')
        const p1 = document.createElement('p')
        p1.setAttribute('class', 'bg-blue-100 mx-auto mr-0 text-2xl w-96 overflow-hidden')
        p1.innerHTML = inputTask.value
        document.body.append(postContainer)//add post container to HTML
        document.body.append(doneContainer)//add done container below postcontainer
        postContainer.prepend(div1) //add new div ontop of old div
        div1.append(p1) //add p in new div
        //saveToLocalStorage()
        //done button
        const doneButton = document.createElement('button')
        doneButton.setAttribute('id','done')
        doneButton.setAttribute('class', 'bg-green-400 mx-auto ml-0 mr-0')
        doneButton.innerHTML = 'DONE'
        div1.append(doneButton)
        doneButton.addEventListener('click', () => {
            postContainer.removeChild(div1)
            p1.setAttribute('class', 'bg-blue-100 mx-auto mr-0 text-2xl w-96')
            p1.innerHTML = '<del>' + p1.innerHTML + '</del'
            doneContainer.prepend(div1)
            div1.removeChild(deleteButton)
            div1.removeChild(doneButton)
            const doneBtn = document.createElement('button')
            doneBtn.setAttribute('id','done2')
            doneBtn.setAttribute('class', 'bg-white mx-auto ml-0 mr-0')
            doneBtn.innerHTML = ''
            div1.append(doneBtn)
            const delBtn = document.createElement('button')
            delBtn.setAttribute('id', 'delete2')
            delBtn.setAttribute('class', 'bg-white mx-auto ml-0')
            delBtn.innerHTML = ''
            div1.append(delBtn)
            //saveToLocalStorage()
        })
        //delete button
        const deleteButton = document.createElement('button')
        deleteButton.setAttribute('id', 'delete')
        deleteButton.setAttribute('class', 'bg-red-300 mx-auto ml-0')
        deleteButton.innerHTML = 'DELETE'
        div1.append(deleteButton)
        //4)click button to delete task
        deleteButton.addEventListener('click', () => {
            postContainer.removeChild(div1)
            //saveToLocalStorage()
        })


        
    } 
}
/*const saveToLocalStorage = () => {
    localStorage.setItem('postContainer', postContainer.innerHTML)
    localStorage.setItem('doneContainer', doneContainer.innerHTML)
}*/