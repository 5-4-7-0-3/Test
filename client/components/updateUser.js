let ID;
function getID(obj) {
     return ID = obj.id
}

function updateUser(){
    let data = {};
    let name = document.getElementById('updateUserName').value
    let rank = document.getElementById('updateUserRank').value
    if(!!name){
        data.userName = name;
    }
    if(!!rank){
        data.userRank = rank;
    }
    async function update() {
        const response = await fetch(`http://127.0.0.1:8000/updateUser/${ID}`, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
        });
    }
    update();
}
