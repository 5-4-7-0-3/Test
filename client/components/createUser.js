function createUser(){
    const userName =  document.getElementById('createUserName').value;
    const userRank = document.getElementById('createUserRank').value;
    if(!!userName && !!userRank){
        async function create() {
            const response = await fetch('http://127.0.0.1:8000/createUser', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({userName: userName, userRank: userRank})
            });
        }
    create();
    location.reload()
    }
}
