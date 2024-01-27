//const element
const noteTextarea = document.querySelector('.inputNote');
const save = document.getElementById('save');
const remove = document.getElementById('remove');

//const localstorage
const savedNote = localStorage.getItem('noteUser');
const savedUserLogin = localStorage.getItem('userOneLog');
const saveN = 'noteUser';
const saveUL = 'userOneLog';
//save option atau save local storage sistem
function saveOption() {
  //saved value notes
  localStorage.setItem('noteUser', noteTextarea.value);
  
  //manipulation text loading
  save.innerHTML = "loading.. ";
  setTimeout(function () {
    save.style.color = "lime";
    save.innerHTML = "success!";
  }, 2000);
  setTimeout(function () {
    save.style.color = "#b2b2b2";
    save.innerHTML = "Save";
  }, 3000);
  console.log("save successful!");
}

//remove option atau remove local storage sistem
function removeOption() {
  localStorage.removeItem(saveN);
  localStorage.removeItem(saveUL);

  //manipulation text loading
  remove.innerHTML = "loading.. ";
  setTimeout(function () {
    remove.style.color = "lime";
    remove.innerHTML = "success!";
  }, 2000);
  setTimeout(function () {
    remove.style.color = "#b2b2b2";
    remove.innerHTML = "Remove";
  }, 3000);
  console.log("Remove successful!");
}

//cek localstorage savechanges sistem dari onload
function checkStorage() {
  //login loading spalsh screen
  if (savedUserLogin) {
    setTimeout(function () {
      const oP = document.getElementById("opening");
      oP.style.display = "none";
    }, 1500);
    setTimeout(function () {
      const helpPopup = document.querySelector(".helping-popup");
      helpPopup.style.bottom = "-200%";
    }, 2600);
  } else {
    localStorage.setItem('userOneLog', true);
    console.log("save login successful!");
  }
  
  
  // notes saved
  if (savedNote) {
    noteTextarea.value = savedNote;
    console.log("cheking note successful!");
  }
}

document.addEventListener('DOMContentLoaded', checkStorage);