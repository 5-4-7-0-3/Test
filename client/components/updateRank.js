function getIDUpdate(obj) {
console.log(obj.id);
     return ID = obj.id
}

function updateRank(){
    let data = {
        userRank: document.getElementById('userRunkUpdate').value
    };

    if(!!data.userRank){
        console.log(ID);
        console.log(data);
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
        location.reload()

    } else alert('Enter rank')
}
