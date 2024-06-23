let u_name, email, message, cuntryCode;
let ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    cuntryCode= document.getElementsByClassName('iti__selected-dial-code')[0].innerHTML;
    phone = cuntryCode +' '+ document.getElementById("phone").value;
    ;
    message = "Name: " + u_name + "\nEmail: " + email + "\nPhone: " + phone;
};

let tg = {
    token: "7216617784:AAEtfYd4PEV83_04PZqIoh8daiGRmk3WhPk", // Your bot's token
    chat_id: "6163382681" // Your Telegram chat id
};

async function sendMessage(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage`; // The url to request
    ready();

    const obj = {
        chat_id: tg.chat_id, // Telegram chat id
        text: message // The text to send
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        if (response.ok) {
            console.log("Message sent successfully");
        } else {
            console.error("Error sending message:", response.statusText);
        }
    } catch (error) {
        console.error("Error sending message:", error);
    }
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}







// sendMessage('123');

// Now you can send any text(even a form data) by calling sendMessage function.
// For example if you want to send the 'hello', you can call that function like this:

// bot token
// var telegram_bot_id = "7216617784:AAEtfYd4PEV83_04PZqIoh8daiGRmk3WhPk";
// //chat id
// var chat_id = 1016612451;
// var u_name, email, message;
// var ready = function () {
//     u_name = document.getElementById("name").value;
//     email = document.getElementById("email").value;
//     message = document.getElementById("phone").value;
//     message = "Name: " + u_name + "\nEmail: " + email + "\nMessage: " + message;
// };
// var sender = function () {
//     ready();
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "cache-control": "no-cache"
//         },
//         "data": JSON.stringify({
//             "chat_id": chat_id,
//             "text": message
//         })
//     };
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("message").value = "";
//     return false;
// };