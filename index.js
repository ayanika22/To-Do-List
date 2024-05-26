let check_id = 0;
let task_id = 0;
let del_id = 0;

// add tasks
$("#add").on("click", function(){
    if(!($("#taskInput").val() === "")){
        addTasks($("#taskInput").val());
    }
    $("#taskInput").val("");
});

// read added tasks
function addTasks(input) {
   let todo = document.createElement("div");
   todo.innerHTML = input;
   todo.id = "task"+task_id++;
   todo.classList.add("task"); 

   let btn = document.createElement("input");
   btn.type = "checkbox";
   btn.classList.add("complete");
   btn.id = "check"+check_id++;

   let del = document.createElement("button");
   del.id = del_id++;
   del.innerHTML = "Delete";
   del.classList.add("delete");

   $(".tasks").append(todo);
   $(".tasks").append(btn);
   $(".tasks").append(del);
}

// mark as complete or unmark 
$(".tasks").on("click", ".complete", function(){
    let taskId = $(this).prev().attr("id");
    console.log("task id: "+ taskId);
    let checked = $(this).is(":checked");
    if(checked === true){
        $(this).css("accent-color","#1d5106");
        $("#"+taskId).addClass("task_complete");
        $(this).attr("contenteditable","false");
    }
    else{
        $("#"+taskId).removeClass("task_complete");
    }
});

$(".tasks").on("mouseover", ".complete", function () {
    $(this).attr('title', 'Mark as complete');
});

// update tasks 
$(".tasks").on("click", ".task", function(){
    if($(this).hasClass("task_complete")){
        $(this).attr("contenteditable","false");
    } else{
        $(this).attr("contenteditable","true");
    }
});

// delete tasks
$(".tasks").on("click", ".delete", function(){
    let id = $(this).attr("id");
    $("#task"+id).remove();
    $("#check"+id).remove();
    $(this).remove();
});


