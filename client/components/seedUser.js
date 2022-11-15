async function seedUser() {
    const response = await fetch('http://127.0.0.1:8000/seedUser', {
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
    location.reload()
  }
