$(document).ready(function() 
{
    $("#pulldown-nav").click(function() 
    {
        $(".nav").toggle();
    });
    $(".nav ul li a").click(function(e) 
    {
        if (e.target == this) 
        {
            $(this).parent().children("ul").toggle();
        }
    });
});