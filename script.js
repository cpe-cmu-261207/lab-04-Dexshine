const inputTask = document.querySelector('#inputTask')


//add task by press Enter
function pressEnter(event){
    const x = event.key
    if(x === 'Enter') clickCallback() //1.2) if Enter was pressed, call clickCallback
}

//create main div
const postContainer = document.createElement('div')
postContainer.setAttribute('id', 'postContainer')
const doneContainer = document.createElement('div')
doneContainer.setAttribute('id', 'doneContainer')
//document.body.append(postContainer)//add post container to HTML
//document.body.append(doneContainer)//add done container below postcontainer
let i = localStorage.length+1
const indexPost = []
const indexDone = []
postContainer.addEventListener("load", () => {
    for(let m=0; m<indexPost.length; m++){
        const div1 = document.createElement('div')
        div1.setAttribute('class', 'flex w-130 mx-auto')
        div1.setAttribute('id','box')
        const p1 = document.createElement('p')
        p1.setAttribute('class', 'bg-blue-100 mx-auto mr-0 text-2xl w-96 overflow-hidden')
        p1.innerHTML = localStorage.getItem(m)
        postContainer.prepend(div1) //add new div ontop of old div
        const doneButton = document.createElement('button')
        doneButton.setAttribute('id','done')
        doneButton.setAttribute('class', 'bg-green-400 mx-auto ml-0 mr-0')
        doneButton.innerHTML = 'DONE'
        div1.append(doneButton)
        const deleteButton = document.createElement('button')
        deleteButton.setAttribute('id', 'delete')
        deleteButton.setAttribute('class', 'bg-red-300 mx-auto ml-0')
        deleteButton.innerHTML = 'DELETE'
        div1.append(deleteButton)
        div1.append(p1) //add p in new div
        document.body.append(postContainer)
}})

    
doneContainer.addEventListener("load", () => {
    for(let n=0; n<indexDone.length; n++){
        const div1 = document.createElement('div')
        div1.setAttribute('class', 'flex w-130 mx-auto')
        div1.setAttribute('id','box')
        const p1 = document.createElement('p')
        p1.setAttribute('class', 'bg-blue-100 mx-auto mr-0 text-2xl w-96')
        p1.innerHTML = '<del>' + localStorage.getItem[n] + '</del'
        doneContainer.prepend(div1)
        div1.append(p1)
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
        doneContainer.prepend(div1)
        document.body.prepend(doneContainer)
    }
})          



//when add task button clicked
const clickCallback = () => {
    if(inputTask.value === ''){ //check if input is empty
        alert('Task cannot be empty') //1.4
    }
    else{
        const div1 = document.createElement('div')
        div1.setAttribute('class', 'flex w-130 mx-auto')
        div1.setAttribute('id','box')
        const p1 = document.createElement('p')
        p1.setAttribute('class', 'bg-blue-100 mx-auto mr-0 text-2xl w-96 overflow-hidden')
        p1.innerHTML = inputTask.value
        document.body.append(postContainer)//add post container to HTML
        document.body.append(doneContainer)//add done container below postcontainer
        inputTask.innerText = ''
        postContainer.prepend(div1) //add new div ontop of old div
        div1.append(p1) //add p in new div
        ++i
        localStorage.setItem(i,inputTask.value)
        indexPost.push(localStorage.key(i))

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
            for(let l=0; l<localStorage.length; l++){
                const tempIndex = localStorage.key(l)
                const tempValue = localStorage.getItem(tempIndex)
                if(tempValue == p1.innerHTML) indexDone.push(tempIndex)
            }
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
        })
        //delete button
        const deleteButton = document.createElement('button')
        deleteButton.setAttribute('id', 'delete')
        deleteButton.setAttribute('class', 'bg-red-300 mx-auto ml-0')
        deleteButton.innerHTML = 'DELETE'
        div1.append(deleteButton)
        //4)click button to delete task
        deleteButton.addEventListener('click', () => {
            for(let k=0; k<localStorage.length; k++) {
                const tempIndex = localStorage.key(k)
                const tempValue = localStorage.getItem(tempIndex)
                //console.log(tempValue)
                if(tempValue == p1.innerHTML) localStorage.removeItem(tempIndex)
            }
            postContainer.removeChild(div1)

        })
    } 
}
