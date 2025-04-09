const serverAPI = "https://kool.krister.ee/chat/UhisMarge";
document.addEventListener("DOMContentLoaded", function () {
    const reg = document.getElementById("reg-main__submitBtn");
    reg.addEventListener("click", function () {
        event.preventDefault();
        const formData = {
            username: document.getElementById("reg_username").value,
            password: document.getElementById("reg_password").value,
        };
        const confirmPassword = document.getElementById("reg_confirmPassword").value;
        if (formData.password !== confirmPassword) {
            alert("Passwords do not match!");
        }

        fetch(serverAPI, {
            method: "POST",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })


    })
})