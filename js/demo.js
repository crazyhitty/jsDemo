// Add click event listener on our button with id: buttonInputAddTask.
document.getElementById("buttonInputAddTask").addEventListener("click", function(){
    // Fetch the text available in the textInput with id: textInputTask.
    var task = document.getElementById("textInputTask").value;

    // Check if the task is empty or not, if empty, display an error, otherwise continue normally.
    if(!task){
        document.getElementById("textInputTask").required = true;
        return;
    }else{
        document.getElementById("textInputTask").required = false;
    }

    // Create a list item.
    var listItem = document.createElement("li");

    // Append the text to our list item.
    listItem.append(task);

    // Append the list item to our list with id: listTasks
    document.getElementById("listTasks").appendChild(listItem);
});
