

export default function Ifelse() {
    const isLogIn = true;
  
    if (isLogIn){
        return <h4 className="ans" style={{color: " yellow"}}>Welcome Back</h4>
    }else{
        return <h4>Please log in</h4>
    }
}
