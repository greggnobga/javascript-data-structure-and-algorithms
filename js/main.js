console.log('Welcome');

function fetchData() {
  return new Promise((resolve) => {
    fetch('url', {
      method: 'POST',
      body: JSON.stringify({ id: '200' }),
    });
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function loginRequest() {
  console.log('calling');
  const result = await fetchData();
  console.log(result);
}

loginRequest();
