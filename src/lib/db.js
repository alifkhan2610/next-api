const {username,password}=process.env;
export const connectionSrt ="mongodb+srv://"+username+":"+password+"@cluster0.uzcinke.mongodb.net/productDB?retryWrites=true&w=majority"