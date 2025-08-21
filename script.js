document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector("#submit-btn");

    if (button) {
        button.addEventListener("click", () => {
            var parms = {
                name : document.querySelector("#userName").value,
                email: document.querySelector("#userEmail").value,
                subject: document.querySelector("#subject").value,
                message: document.querySelector("#userMessage").value,
            };

            emailjs.send("service_z29wsuj", "template_dgbfivo", parms).then(
                function(response) {
                    console.log("SUCCESS!", response.status, response.text);
                    document.querySelector("#userName").value = "";
                    document.querySelector("#userEmail").value = "";
                    document.querySelector("#subject").value = "";
                    document.querySelector("#userMessage").value = "";
                    alert("Your message has been sent successfully!");
                }
            ).catch(function(error) {
                console.log("FAILED...", error);
                alert("There was an error sending your message. Please try again later.");
            });
        });
    }

    // Toggle menu for mobile
    const navToggle = document.getElementById("navToggle");
    const navList = document.getElementById("navList");
    if (navToggle && navList) {
        navToggle.onclick = function() {
            navList.classList.toggle("open");
        };
    }
});



