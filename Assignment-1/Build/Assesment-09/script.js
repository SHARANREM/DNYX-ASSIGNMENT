
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, get, child, set, update, remove } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyCymFiIA5UXIe2hJyQVwbFlNjKie-NGO00",
  authDomain: "dnysassi-9.firebaseapp.com",
  projectId: "dnysassi-9",
  storageBucket: "dnysassi-9.appspot.com",
  messagingSenderId: "765824458892",
  appId: "1:765824458892:web:a5be4e20ec246869b15ba9"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const newPassword = document.getElementById("NewPassword");
const confirmPassword = document.getElementById("confirmPassword");
const newPasswordErrMsg = document.getElementById("passwerr");
const confirmPasswordErrMsg = document.getElementById("conferr");
const ins = document.getElementById("insertBtn");
const del = document.getElementById("deleteBtn");
const upd = document.getElementById("updateBtn");


if (!newPassword || !confirmPassword || !newPasswordErrMsg || !confirmPasswordErrMsg || !ins) {
    console.error("One or more elements are not found. Check your HTML for correct IDs.");
}


function validateNew() {
    if (newPassword.value.trim() === "") {
        newPasswordErrMsg.textContent = "New password cannot be empty.";
    } else {
        newPasswordErrMsg.textContent = "";
    }   
}

function validateCon() {
    if (confirmPassword.value.trim() === "") {
        confirmPasswordErrMsg.textContent = "Confirm password cannot be empty.";
    } else if (newPassword.value.trim() !== confirmPassword.value.trim()) {
        confirmPasswordErrMsg.textContent = "Passwords do not match.";
    } else {
        confirmPasswordErrMsg.textContent = "";
    }
}

function insertData(event) {
    event.preventDefault();
    console.log("Attempting to insert data...");

    set(ref(db, "ThePasswords/" + newPassword.value), {
        NewPassword: newPassword.value
    })
    .then(() => {
        alert("Password Stored Successfully");
        console.log("Password stored successfully.");
    })
    .catch((er) => {
        alert("Password Storing Failed: " + er.message);
        console.error("Password storing failed:", er);
    });
}

function updateData(event){
    event.preventDefault();
    update(ref(db, "ThePasswords/" + newPassword.value), {
        NewPassword:confirmPassword.value
    })
    .then(() => {
        alert("Password Updated Successfully");
    })
    .catch((er) => {
        alert("Password Updation Failed: " + er.message);
    });
}

function deleteData(event){
    event.preventDefault();
    remove(ref(db, "TheStudents/" + newPassword.value))
    .then(() => {
        alert("Password Removed Successfully");
    })
    .catch((er) => {
        alert("Password Removal Failed: " + er.message);
    });
}


newPassword.addEventListener("blur", validateNew);
confirmPassword.addEventListener("blur", validateCon);
ins.addEventListener("click", insertData);
del.addEventListener("click",deleteData);
upd.addEventListener("click",updateData)