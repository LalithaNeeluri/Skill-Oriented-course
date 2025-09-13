$(document).ready( function (){
                $("#addTask").click(function(){
                        let input=$("#taskInput").val();
                         if(input!==""){
                            //$("#taskList").append("<li>"+input+"</li>")
                            //$("#taskInput").val(''); to dolist 1 st program 
                            $("taskList").append(
                                <li>${input}
                                <button class="done">Complete</button>
                                <button class="delete">Delete</button>
                                </li>
                            )
                            $("#taskInput").val('');

    }
    //mark as complete
    $("#tasklist").on("click",".done",function(){
        $(this).parent().css("text-decorate","line-through")
    })
    //delete
    $("#tasklist").on("click",".delete",function(){
        $(this).parent().remove()
})
})
})