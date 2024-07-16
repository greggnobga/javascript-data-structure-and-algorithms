// /** Example of async function. */
// export const loginUser = (params) => async (dispatch) => {
//   /** Initiate try catch block. */
//   try {
//     /** Dispatch request. */
//     dispatch({ type: USER_LOGIN_REQUEST });

//     /** Make api request. */
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(params),
//     });

//     /** Wait for the response. */
//     const data = await response.json();

//     if (data && data.status <= 300) {
//       /** Dispatch success. */
//       dispatch({
//         type: USER_LOGIN_SUCCESS,
//         payload: { ...data },
//       });

//       /** Dispatch toast. */
//       dispatch({
//         type: TOAST_MESSAGE,
//         payload: { message: data.message, status: data.status },
//       });

//       /** Save access token to local storage. */
//       localStorage.setItem('userLogin', JSON.stringify(data));
//     } else {
//       /** Dispatch toast. */
//       dispatch({
//         type: TOAST_MESSAGE,
//         payload: { message: data.message, status: data.status },
//       });
//     }
//   } catch (error) {
//     /** Dispatch failure. */
//     dispatch({
//       type: USER_LOGIN_FAILURE,
//       payload: error.response && error.response.data.message ? error.response.data.message : error.message,
//     });
//   }
// };

function fetchData() {
  return new Promise((resolve) => {
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
