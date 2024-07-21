const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validate = (email,password)=>{
    const eresult = emailPattern.test(email);
    const presult = passwordPattern.test(password);
    
    return {emailValid:eresult,passwordValid:presult};
    
}