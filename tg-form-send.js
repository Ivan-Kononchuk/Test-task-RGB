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
