let friends = [];

function addFriend() {
    const nameInput = document.getElementById("friend-name");
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    friends.push(name);
    nameInput.value = "";

    updateFriendList();
}

function updateFriendList() {
    const friendList = document.getElementById("friend-list");
    friendList.innerHTML = "";

    friends.forEach(friend => {
        const listItem = document.createElement("li");
        listItem.textContent = friend;
        friendList.appendChild(listItem);
    });
}

function drawFriend() {
    if (friends.length === 0) {
        alert("Adicione pelo menos um nome para realizar o sorteio.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * friends.length);
    const secretFriend = friends[randomIndex];

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `O amigo secreto sorteado é: ${secretFriend}`;
}
