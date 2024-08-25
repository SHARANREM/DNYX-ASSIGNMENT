const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const newPasswordErrMsg = document.getElementById("passwerr");
const confirmPasswordErrMsg = document.getElementById("conferr");
const updatePasswordForm = document.getElementById("updatePasswordForm");

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
newPassword.addEventListener("blur", validateNew);
confirmPassword.addEventListener("blur", validateCon);

updatePasswordForm.addEventListener("submit", function(event) {
    validateInputs();
    if (newPassword.value.trim() === "" || confirmPassword.value.trim() === "" || newPassword.value.trim() !== confirmPassword.value.trim()) {
        event.preventDefault();
    }
});