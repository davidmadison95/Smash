$(document).ready(function() {
    // Basic accordion functionality
    $("#accordion h2").click(function() {
        // Toggle the active class on the clicked header
        $(this).toggleClass("active");
        
        // Toggle the visibility of the content panel
        $(this).next(".content").slideToggle(300);
        
        // Improved functionality (from "The Accordion, Take 2" in Chapter 4)
        // Close other panels when opening a new one
        $(this).siblings("h2").removeClass("active");
        $(this).siblings(".content").slideUp(300);
    });
    
    // Show the first panel by default
    $("#accordion h2:first").addClass("active");
    $("#accordion .content:first").show();
    
    // Additional jQuery features to demonstrate mastery
    
    // Add hover effect to headers
    $("#accordion h2").hover(
        function() {
            $(this).css("box-shadow", "0 0 5px rgba(0, 0, 0, 0.3)");
        },
        function() {
            $(this).css("box-shadow", "none");
        }
    );
    
    // Add a smooth scroll effect when clicking on the main title
    $("h1").click(function() {
        $("html, body").animate({
            scrollTop: $("#accordion").offset().top - 20
        }, 800);
    });
    
    // Add a fade effect to the entire page on load
    $(".container").hide().fadeIn(1000);
    
    // Add a double-click event to paragraphs to highlight them
    $("#accordion p").dblclick(function() {
        $(this).css({
            "background-color": "#fff3cd",
            "padding": "10px",
            "border-radius": "5px",
            "transition": "background-color 0.5s"
        });
        
        // Reset the styling after 3 seconds
        setTimeout(function() {
            $("#accordion p").css({
                "background-color": "transparent",
                "padding": "0",
                "transition": "background-color 0.5s"
            });
        }, 3000);
    });
});
