$(document).ready(function() {
    // Set up the accordion
    setupAccordion();
    
    // Additional features
    addExtraFeatures();
    
    // First panel starts open
    openFirstPanel();
});

function setupAccordion() {
    // Attach click event to headings
    $("#accordion h2").on("click", function() {
        // Toggle this panel
        if ($(this).hasClass("active")) {
            // If it's already active, close it
            $(this).removeClass("active");
            $(this).next(".content").slideUp(300);
        } else {
            // Close all panels
            $("#accordion h2").removeClass("active");
            $("#accordion .content").slideUp(300);
            
            // Open this panel
            $(this).addClass("active");
            $(this).next(".content").slideDown(300);
        }
    });
}

function openFirstPanel() {
    // Open the first panel by default
    $("#accordion h2:first").addClass("active");
    $("#accordion .content:first").show();
}

function addExtraFeatures() {
    // Add hover effect to headings
    $("#accordion h2").hover(
        function() {
            $(this).css("box-shadow", "0 0 5px rgba(0, 0, 0, 0.3)");
        },
        function() {
            $(this).css("box-shadow", "none");
        }
    );
    
    // Add smooth scroll when clicking title
    $("h1").click(function() {
        $("html, body").animate({
            scrollTop: $("#accordion").offset().top - 20
        }, 800);
    });
    
    // Page load animation
    $(".container").hide().fadeIn(1000);
    
    // Double-click highlight for paragraphs
    $("#accordion p").dblclick(function() {
        var $this = $(this);
        
        $this.css({
            "background-color": "#fff3cd",
            "padding": "10px",
            "border-radius": "5px",
            "transition": "background-color 0.5s"
        });
        
        // Reset after 3 seconds
        setTimeout(function() {
            $this.css({
                "background-color": "transparent",
                "padding": "0",
                "transition": "background-color 0.5s"
            });
        }, 3000);
    });
}
