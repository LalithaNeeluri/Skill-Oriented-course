$(document).ready(function(){
    $("#addTask").click(function(){
        let input = $("#taskInput").val();
        if(input !== ""){
            $("#taskList").append(
                `<li>${input} 
                <button class="done">Complete</button>
                <button class="delete">Delete</button>
                </li>`)



            $("#taskInput").val('');
        }
    });
    // mark as complete
    $("#taskList").on("click",".done",function(){
        $(this).parent().css("text-decorate","line-through")
    })
   //delete
    $("#taskList").on("click",".delete",function(){
        $(this).parent().remove()
    })
});