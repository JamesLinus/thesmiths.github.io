$(document).ready(function () {
    Parse.initialize("J9U1LbAaB7LoxtCnh6jpyJYxRlRRdrMImPnNdzS6", "F8zgXvM68Xcmco6rHvFzAeZ9OyQFhECW6iw4T07n");
    $("#contact").on('submit', function (e) {
        e.preventDefault();
        $("#submit-down").attr('disabled', true).fadeOut("fast");
        $("#contact-message").html("");
        
        $("#contact-loader").show();
        (function animateLoader () {
            $("#contact-loader")
                .animate({left: '5%', opacity: 1}, 0)
                .animate({left: "95%", opacity: 0}, 1500, animateLoader);
        })();

        var data = {
            email: $('input[name="email"]').val(),
            name: $('input[name="name"]').val(),
            comment: $('textarea[name="comment"]').val()
        };

        setTimeout(function (msg) {
                $("#contact-loader").hide().stop();
                $("#contact-message").html(msg).addClass("success").fadeIn('fast'); 
                $("#submit-down").attr('disabled', false).fadeIn("fast");
        }, 800, "sent");

        return;
        Parse.Cloud.run("sendEmail", data, {
            success: function (msg) {
                $("#contact-loader").hide().stop();
                $("#contact-message").html(msg).addClass("success").fadeIn('fast'); 
                $("#submit-down").attr('disabled', false).fadeIn("fast");
            }, 
            error: function (msg) {
                $("#contact-loader").hide().finish();
                $("#contact-message").html(msg).addClass("error").fadeIn('fast'); 
                $("#submit-down").attr('disabled', false).fadeIn("fast");
            }
        });
    });
});
