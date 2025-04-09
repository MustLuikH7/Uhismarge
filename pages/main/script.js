const serverAPI = "https://kool.krister.ee/chat/UhisMarge";

document.addEventListener("DOMContentLoaded", function (event) {
    const add_note = document.getElementById("nupp");
    add_note.addEventListener("click", async function (event) {
        event.preventDefault();
        const notes = document.getElementById("note").value;

        if (notes.trim() === "") {
            alert("Kirjuta midagi");
            return;
        }

        try {
            const response = await fetch(serverAPI, {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ note: notes }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                alert("Note added successfully!");
            } else {
                alert("Failed to add note.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });
});




