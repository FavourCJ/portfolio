export const Validate = (values) =>{
    let error = {};

    if(!values.fullname)
    {
        error.fullname = "Name is required"
    }

    if(!values.email){
        error.email = "Email is required"
    }else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        error.email = "Invalid Email. Please enter email correctly"
    }

    if(!values.message){
        error.message = "Type your message here"
    }

    return error;
}