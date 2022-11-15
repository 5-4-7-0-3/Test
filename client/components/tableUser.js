
async function getUsers() {
    const response = await fetch('http://127.0.0.1:8000/findUsers', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
    return response.json();
  }
    getUsers()
    .then((data) => {
        document.querySelector('.tableUser').innerHTML =
            `<table class="table">
                <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">userName</th>
                        <th scope="col">userRank</th>
                        <th scope="col">Update user</th>
                        <th scope="col">Update rank</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody class = "bodyTUser">
            `
        for(id in data){
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${id}</td>
                <td>${data[id].userName}</td>
                <td>${data[id].userRank}</td>
                <td><button type="button" class="btn btn-warning" data-mdb-toggle="modal" data-mdb-target="#updateUser" id="${data[id]._id}" onclick = "getID(this)">Update user</button></td>
                <td><button type="button" class="btn btn-info" data-mdb-toggle="modal" data-mdb-target="#updateRank" id="${data[id]._id}" onclick = "getIDUpdate(this)">Update rank</button></td>
                <td><button type="submit" class="btn btn-danger" id="${data[id]._id}" onclick = "deleteUser(this)">X</button></td>
            `
            document.querySelector('.bodyTUser').appendChild(row)
        }
    });
