



function sendMail(params) {
    var tempParams = {
        from_name: document.querySelector("#fromName").value,
        message: document.querySelector("#userMessage").value,
        reply_to: document.querySelector("#userEmail").value
    }
    emailjs.send("service_36iz9e6", "template_u4y8ij2", tempParams)
        .then(function(res){
            console.log("SUCCESS!". res.status)
        })
}