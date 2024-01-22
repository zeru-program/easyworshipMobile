            //sistem click on opsi setting
            const opsi1 = document.getElementById("opsi1");
            const opsi2 = document.getElementById("opsi2");
            const opsi3 = document.getElementById("opsi3");
            const isi1 = document.querySelector(".isi-opsi1");
            const isi2 = document.querySelector(".isi-opsi2");
            const isi3 = document.querySelector(".isi-opsi3");

            opsi1.addEventListener("click", () => {
                opsi1.style.borderBottom = "3px solid transparent";
                opsi1.style.borderTopLeftRadius = "20px";
                opsi1.style.borderTopRightRadius = "20px";
                opsi1.style.background = "rgba(128,128,128,.2)";
                opsi2.style.borderBottom = "3px solid #5c5470";
                opsi3.style.borderBottom = "3px solid #5c5470";
                opsi2.style.background = "transparent";
                opsi3.style.background = "transparent";
                opsi2.style.borderTopLeftRadius = "5px";
                opsi2.style.borderTopRightRadius = "5px";
                opsi3.style.borderTopLeftRadius = "5px";
                opsi3.style.borderTopRightRadius = "5px";

                isi2.style.transform = "translateX(200%)";
                isi1.style.transform = "translateX(0)";
                isi3.style.transform = "translateX(200%)";
            });
            opsi2.addEventListener("click", () => {
                opsi2.style.borderBottom = "3px solid transparent";
                opsi2.style.borderTopLeftRadius = "20px";
                opsi2.style.borderTopRightRadius = "20px";
                opsi2.style.background = "rgba(128,128,128,.2)";
                opsi1.style.borderBottom = "3px solid #5c5470";
                opsi3.style.borderBottom = "3px solid #5c5470";
                opsi1.style.background = "transparent";
                opsi3.style.background = "transparent";
                opsi1.style.borderTopLeftRadius = "5px";
                opsi1.style.borderTopRightRadius = "5px";
                opsi3.style.borderTopLeftRadius = "5px";
                opsi3.style.borderTopRightRadius = "5px";

                isi2.style.transform = "translateX(0)";
                isi1.style.transform = "translateX(-400%)";
                isi3.style.transform = "translateX(200%)";
            });
            opsi3.addEventListener("click", () => {
                opsi3.style.borderBottom = "3px solid transparent";
                opsi3.style.borderTopLeftRadius = "20px";
                opsi3.style.borderTopRightRadius = "20px";
                opsi3.style.background = "rgba(128,128,128,.2)";
                opsi1.style.borderBottom = "3px solid #5c5470";
                opsi2.style.borderBottom = "3px solid #5c5470";
                opsi1.style.background = "transparent";
                opsi2.style.background = "transparent";
                opsi2.style.borderTopLeftRadius = "5px";
                opsi2.style.borderTopRightRadius = "5px";
                opsi1.style.borderTopLeftRadius = "5px";
                opsi1.style.borderTopRightRadius = "5px";

                isi2.style.transform = "translateX(-400%)";
                isi3.style.transform = "translateX(0)";
                isi1.style.transform = "translateX(-400%)";
            });

            // sistem buka dropdown
            const inputLs = document.querySelector(".ls-input");
            const inputPtx = document.querySelector(".op-input");
            const optionLv = document.querySelector(".option-lv");
            const optionPx = document.querySelector(".option-posX");
            var clickedDrop = false;
            inputLs.onclick = function () {
                if (!clickedDrop) {
                    optionLv.style.display = "block";
                } else {
                    optionLv.style.display = "none";
                }
                clickedDrop = !clickedDrop;
            };
            inputPtx.onclick = function () {
                if (!clickedDrop) {
                    optionPx.style.display = "block";
                } else {
                    optionPx.style.display = "none";
                }
                clickedDrop = !clickedDrop;
            };
            function show(a) {
                inputLs.value = a;
                optionLv.style.display = "none";
                if (inputLs.value === "On") {
                    inputLs.style.color = "lime";
                    gLiveBtn.style.background = "blue";
                    gLiveBtn.style.animation =
                        "warna .5s steps(2) infinite alternate";
                    gLiveBtn.innerHTML = live;
                    gLiveBtn.style.padding = "10px 18px";
                    setTimeout(function () {
                        tL.style.display = "flex";
                        tLM.style.display = "flex";
                    }, 500);
                } else if (inputLs.value === "Off") {
                    inputLs.style.color = "red";
                    tL.style.display = "none";
                    tLM.style.display = "none";
                    gLiveBtn.style.background = "red";
                    gLiveBtn.style.animation = "none";
                    gLiveBtn.innerHTML = Golive;
                    gLiveBtn.style.padding = "10px";
                
                } else if (inputLs.value === "Center") {
                    inputLs.style.color = "lime";
                }
            }