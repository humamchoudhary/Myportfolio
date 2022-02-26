function sendEmail(){
    Email.send({
        SecureToken: "76d56ae7-87ac-48a8-a299-b3eed48b8f5a",
        To: 'humamchoudhary@gmail',
        From : document.getElementById("email_input").value,
        Subject : document.getElementById("subject_input").value,
        
        Body : " Name: " + document.getElementById("name_input").value
             + "<br> Email: " + document.getElementById("email_input").value
             + "<br> Message: " + document.getElementById("message_input").value
}).then(
    message => alert(message)
)
;
}