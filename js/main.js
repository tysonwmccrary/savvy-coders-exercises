var name = "Tyson";

function checkUser(username){
  if (username == "Tyson") {
    console.log("Welcome, Authenicated user.");
  }
  else {
    console.log("Warning, unauthorized attempt.");
  }
}

checkUser(name);
