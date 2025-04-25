const serverAPI = "https://kool.krister.ee/chat/UhisMarge";
async function fetchData() {
    try {
        const response = await fetch(serverAPI);
        const data = await response.json();
        console.log(data);
        const container = document.getElementById("noteNoteContainer");
        container.innerHTML = '';
        for (const item of data) {
            const noteElement = document.createElement("div");
            noteElement.classList.add("noteBrrrrr");
            noteElement.innerHTML = `
                <h3>${item.pealkiri}</h3>
                <p>${item.note}</p>
                <button>Kustuta</button>
            `;
            container.appendChild(noteElement);
        }
    } catch (error) {
        console.error(error);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const add_note = document.getElementById("lisaNote");
    const popup = document.getElementById('popup');
    add_note.addEventListener("click", async function (event) {
        event.preventDefault();
        const pealkiri = document.getElementById("pealKiri").value;
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
                body: JSON.stringify({
                    pealkiri: pealkiri,
                    note: notes
                }),
            });
            const text = await response.text();
            let data = {};
            if (text) {
                data = JSON.parse(text);
            }
            console.log(data);
            popup.style.display = 'none';
            pealkiri.value = "";
            notes.value = "";
            fetchData();
        } catch (error) {
            console.error(error);
        }
    });
    const openPopup = document.getElementById('lisa');
    const closePopup = document.getElementById('close_popup');
    openPopup.addEventListener('click', () => {
        popup.style.display = 'flex';
    });
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    fetchData();
});




