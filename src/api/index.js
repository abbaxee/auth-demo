export default {
  registerUser(payload) {
    return fetch('https://reqres.in/api/users/api/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
      throw res;
    });
  },

  loginUser(payload) {
    return fetch('https://reqres.in/api/users/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      console.log(res);

      if (res.ok) {
        return res.json();
      }
      throw res;
    });
  },
};
