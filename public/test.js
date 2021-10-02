/* eslint-disable */
async function startt() {
    const emails = document.getElementById('email').value;
     const passwords = document.getElementById('password').value;
    try {
        const result= await axios.post("http://127.0.0.1:3000/api/v1/users/login",{
            
                email: emails,
                password: passwords
            
        });
    console.log(result);
        

      
    } catch (er) {
        console.log( er.response.data);
    }
};
