async function deleteUser(obj) {
    const response = await fetch(`http://127.0.0.1:8000/deleteUser/${obj.id}`, {
      method: 'DELETE',
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
    location.reload()
  }


