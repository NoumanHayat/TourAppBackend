
/* eslint-disable */


const login = async (emails, passwords) => {

  try {
    const result= await axios.post("http://127.0.0.1:3000/api/v1/users/login",{
            
                email: emails,
                password: passwords
            
        });
   
   
    if(result.data.status=="success"){
      alert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/api/v1/tours/5c88fa8cf4afda39709c2955');
      }, 1500);
    }
  } catch (er) {
    alert('error', err.response.data.message);
  }


};

function subm(){
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
}

const logout=async ()=>{
  try {
    const result= await axios.get("http://127.0.0.1:3000/api/v1/users/logout");
   
   
    if(result.data.status=="success"){
      alert('success', 'logout successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }else{
      console.log(result);
    }
  } catch (er) {
    alert('error', er.response.data.message);
  }

}


