function oP() {
  let oriBackgroundL;
  let oriTextL;

  const liveD = document.getElementById("live-display");
  const txtLv = document.getElementById("textLive");
  const liveMiniD = document.getElementById("live-displaymini");
  const liveMiniT = document.getElementById("textLiveMini");
  const priviewMiniD = document.getElementById("priview-display");
  const priviewMiniT = document.getElementById("textPriviewMini");
  oriBackgroundL = getComputedStyle(liveD).background;
  oriTextL = getComputedStyle(txtLv).color;

  liveMiniD.style.background = oriBackgroundL;
  liveMiniT.style.color = oriTextL;
  priviewMiniD.style.background = oriBackgroundL;
  priviewMiniT.style.color = oriTextL;

  document.getElementById("textLive").style.display = "none";

  const tLiveSting = document.getElementById("textLive");
  const oriColorTL = window
    .getComputedStyle(tLiveSting)
    .getPropertyValue("color");

  inputFzTl.value = oriFontSizeTl;
  inputFzTlm.value = oriFontSizeTlm;
  inputFshTl.value = "default";
  inputFshTl.value = "default";
  inputClrTl.value = oriColorTL;

  const oC = document.getElementById("openControls");
  oC.style.display = "none";

  const prvTxt = document.querySelector(".-bar");
  const btnOpen = document.getElementById("btnOpen");
  setTimeout(function () {
    const oP = document.getElementById("opening");
    oP.style.display = "none";
    helpPopup.style.bottom = 0;
  }, 2500);

  const inputLs = document.querySelector(".ls-input");
  if (inputLs.value === "On") {
    inputLs.style.color = "lime";
  } else if (inputLs.value === "Off") {
    inputLs.style.color = "red";
  }
}
