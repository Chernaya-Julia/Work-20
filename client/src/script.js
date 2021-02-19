const getUsers = () => fetch('http://localhost:3000/get');

const app = document.getElementById('app');

getUsers()
    .then((response) => response.json())
    .then((data) => {
    data.map((user) => {
        cardElement = document.createElement('div');
        cardElement.id = 'card';
        cardHeader = document.createElement('div');
        cardHeader.id = 'card__header';
        cardHeader.innerHTML = user.name;
        cardBody = document.createElement('div');
        cardBody.id = 'card__body';
        cardBody.innerHTML = user.level;
        cardElement.append(cardHeader);
        cardElement.append(cardBody);
        app.append(cardElement);

    })
});

 