function addTask(){
    const taskIds = ["daily", "weekly", "monthly", "miscellaneous"]

    for(id of taskIds){
        const inputElement = document.getElementById(id)
        const inputValue = inputElement.value.trim()

        if(inputValue !== ""){
            const list = document.getElementById(`${id}-list`)
            const li = document.createElement("li")
            const text = document.createTextNode(inputValue)
            li.appendChild(text)
            list.appendChild(li)

            li.setAttribute("onclick", "this.remove()")
            
            inputElement.value = ""

        }
    }
}

function enterKeySubmit(){
    const taskIds = ["daily", "weekly", "monthly", "miscellaneous"]

    for(const id of taskIds){
        const inputElement = document.getElementById(id)

        inputElement.addEventListener("keydown", function(event){
            if(event.key === "Enter"){
                event.preventDefault()
                addTask()
            }
        })
    }
}

window.onload = enterKeySubmit