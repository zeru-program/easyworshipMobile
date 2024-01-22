function tampilkanSong() {
  var songs = document.getElementById("songsIsi").value;
  var priview = document.querySelector(".changeTimelinePriv");
  var live = document.querySelector(".changeTimelineLive");
  var titleS = document.querySelector(".song-title");
  if (songs === "songs1") {
      titleS.textContent = "Kemenangan Atasku - NLY";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeText(this)">
        Disaat ku lelah, Kau kuatku <br>
        Berani melangkah dengan teguh
    </p>
    <p class="song" onclick="changeText(this)">
        Berjalanlah dengan iman yang baru, <br>
        Engkaulah Tuhan sumber pengharapanku
    </p>
</div>

<div class="borPC">
    <label id="labelPC">Pre-chorus</label>
    <p class="song" onclick="changeText(this)">
        Nyata dalamMu Tuhan <br>
        Kasih dan karyaMu
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Tuhan yang memegang hidupku <br>
        TanganMu tersedia bagiku
    </p>
    <p class="song" onclick="changeText(this)">
        RancanganNya yang terbaik bagiku <br>
        Pribadi yang tak akan pernah gagal
    </p>
    <p class="song" onclick="changeText(this)">
        Tak akan pernah aku ragu <br>
        KasihMu nyata di dalamku
    </p>
    <p class="song" onclick="changeText(this)">
        Ku akan selalu percaya padaMu <br>
        Allah yang memberikan kemenangan atasku
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeText(this)">
    Nanananananana.. <br>
    Nanananananana.. 
    </p>
</div>
`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeTextPriview(this)">
        Disaat ku lelah, Kau kuatku <br>
        Berani melangkah dengan teguh
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Berjalanlah dengan iman yang baru, <br>
        Engkaulah Tuhan sumber pengharapanku
    </p>
</div>

<div class="borPC">
    <label id="labelPC">Pre-chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Nyata dalamMu Tuhan <br>
        Kasih dan karyaMu
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Tuhan yang memegang hidupku <br>
        TanganMu tersedia bagiku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        RancanganNya yang terbaik bagiku <br>
        Pribadi yang tak akan pernah gagal
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Tak akan pernah aku ragu <br>
        KasihMu nyata di dalamku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Ku akan selalu percaya padaMu <br>
        Allah yang memberikan kemenangan atasku
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeTextPriview(this)">
    Nanananananana.. <br>
    Nanananananana.. 
    </p>
</div>
`;
  } else if (songs === "songs2") {
    titleS.textContent = "Muda Hanya Sekali - NLY";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeText(this)">
        Dulu, kupilih dunia <br>
        Tak kutemukan kepuasan
    </p>
    <p class="song" onclick="changeText(this)">
        Ikuti pandangan mataku <br>
        Turuti keinginan hatiku
    </p>
</div>

<div class="borPC">
    <label id="labelPC">Pre-chorus</label>
    <p class="song" onclick="changeText(this)">
        Namun kusadari pengenalan akanMu <br>
        Lebih mulia dari semuanya
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Berkenan padaMu, itu yang ku ingini <br>
        DalamMu kutemukan kebebasan
    </p>
    <p class="song" onclick="changeText(this)">
        Masa mudaku bagaikan rajawali <br>
        Karena aku muda hanya sekali
    </p>
</div>`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeTextPriview(this)">
        Dulu, kupilih dunia <br>
        Tak kutemukan kepuasan
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Ikuti pandangan mataku <br>
        Turuti keinginan hatiku
    </p>
</div>

<div class="borPC">
    <label id="labelPC">Pre-chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Namun kusadari pengenalan akanMu <br>
        Lebih mulia dari semuanya
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Berkenan padaMu, itu yang ku ingini <br>
        DalamMu kutemukan kebebasan
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Masa mudaku bagaikan rajawali <br>
        Karena aku muda hanya sekali
    </p>
</div>`;
  } else if (songs === "songs3") {
titleS.textContent = "Teramat Baik - NLY";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeText(this)">
        Saatku datang ke hadapanMu <br>
        Kurasakan kedamaianMu
    </p>
    <p class="song" onclick="changeText(this)">
        Saatku masuk dalam hadiratMu <br>
        Kurasakan kasihMu
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Yesus Engkau teramat baik <br>
        Yesus Engkau teramat mulia
    </p>
    <p class="song" onclick="changeText(this)">
        Engkau yang terindah Allahku yang setia <br>
        Yesus Engkau yang kutinggikan
    </p>
    <p class="song" onclick="changeText(this)">
        Yesus Engkau yang kuagungkan <br>
        Seumur hidupku
    </p>
    <p class="song" onclick="changeText(this)">
        Kumau setia kepadaMu Tuhan
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeText(this)">
        Kumau setia (Oh, oh, oh) <br>
        KepadaMu Tuhanku (Oh, oh, oh)
    </p>
    <p class="song" onclick="changeText(this)">
        Kumau setia <br>
        KepadaMu Tuhanku
    </p>
</div>
`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeTextPriview(this)">
        Saatku datang ke hadapanMu <br>
        Kurasakan kedamaianMu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Saatku masuk dalam hadiratMu <br>
        Kurasakan kasihMu
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Yesus Engkau teramat baik <br>
        Yesus Engkau teramat mulia
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Engkau yang terindah Allahku yang setia <br>
        Yesus Engkau yang kutinggikan
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Yesus Engkau yang kuagungkan <br>
        Seumur hidupku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Kumau setia kepadaMu Tuhan
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeTextPriview(this)">
        Kumau setia (Oh, oh, oh) <br>
        KepadaMu Tuhanku (Oh, oh, oh)
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Kumau setia <br>
        KepadaMu Tuhanku
    </p>
</div>
`;
  } else if (songs === "songs4") {
  titleS.textContent = "Tuhan Diatas S'galanya - NLY";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeText(this)">
        KesetiaanMu menyertai kehidupanku <br>
        Tak tinggalkanku, kubersyukur
    </p>
    <p class="song" onclick="changeText(this)">
        KeagunganMu kurasakan di setiap waktu <br>
        Melimpah syukurku, memuliakanMu
    </p>
    <p class="song" onclick="changeText(this)">
        Seumur hidupku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Kubersyukur atas kasihMu <br>
        Anugrah kekal indah mulia
    </p>
    <p class="song" onclick="changeText(this)">
        Penyembahanku, penghormatanku <br>
        Tertuju padaMu
    </p>
    <p class="song" onclick="changeText(this)">
        Kuangkat tangan ku menyembahMu <br>
        MeninggikanMu Yesusku
    </p>
    <p class="song" onclick="changeText(this)">
        Tiada yang lain, tiada yang lain <br>
        Kusembah Kau Tuhan di atas s'galanya
    </p>
</div>`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeTextPriview(this)">
        KesetiaanMu menyertai kehidupanku <br>
        Tak tinggalkanku, kubersyukur
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        KeagunganMu kurasakan di setiap waktu <br>
        Melimpah syukurku, memuliakanMu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Seumur hidupku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Kubersyukur atas kasihMu <br>
        Anugrah kekal indah mulia
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Penyembahanku, penghormatanku <br>
        Tertuju padaMu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Kuangkat tangan ku menyembahMu <br>
        MeninggikanMu Yesusku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Tiada yang lain, tiada yang lain <br>
        Kusembah Kau Tuhan di atas s'galanya
    </p>
</div>`;
  } else if (songs === "songs5") {
    titleS.textContent = "Karna Mu - JPCC";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeText(this)">
        Bukan kar'na perbuatanku <br>
        Atau juga kebaikanku
    </p>
    <p class="song" onclick="changeText(this)">
        Tapi kar'na pengorbanan-Mu <br>
        Aku dis'lamatkan
    </p>
    <p class="song" onclick="changeText(this)">
        Bukan dengan kekuatanku <br>
        Atau juga kehebatanku
    </p>
    <p class="song" onclick="changeText(this)">
        Tapi kar'na kuasa salib-Mu <br>
        Aku dibebaskan
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Kuterkagum pada-Mu, o Rajaku <br>
        Menebusku dengan harga tertinggi
    </p>
    <p class="song" onclick="changeText(this)">
        Dan 'Kau beri segalanya <br>
        Kau mengangkat derajatku
    </p>
    <p class="song" onclick="changeText(this)">
        Tuk menjadi anak-Mu <br>
        Bapa 'Kau Rajaku
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeText(this)">
        Segala yang baik ada kar'na-Mu <br>
        Mataku tertuju hanya pada-Mu
    </p>
</div>
`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeTextPriview(this)">
        Bukan kar'na perbuatanku <br>
        Atau juga kebaikanku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Tapi kar'na pengorbanan-Mu <br>
        Aku dis'lamatkan
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Bukan dengan kekuatanku <br>
        Atau juga kehebatanku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Tapi kar'na kuasa salib-Mu <br>
        Aku dibebaskan
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Kuterkagum pada-Mu, o Rajaku <br>
        Menebusku dengan harga tertinggi
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Dan 'Kau beri segalanya <br>
        Kau mengangkat derajatku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Tuk menjadi anak-Mu <br>
        Bapa 'Kau Rajaku
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeTextPriview(this)">
        Segala yang baik ada kar'na-Mu <br>
        Mataku tertuju hanya pada-Mu
    </p>
</div>
`;
  }
  else if (songs === "songs6") {
  titleS.textContent = "Kau Rajaku - JPCC";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeText(this)">
        Dimuliakan <br>
        Ditinggikan
    </p>
    <p class="song" onclick="changeText(this)">
        Yesus Tuhan <br>
        Kau rajaku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Yang bertahta <br>
        Yang berkuasa
    </p>
    <p class="song" onclick="changeText(this)">
        Yesus Tuhan kau rajaku
    </p>
</div>

`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeTextPriview(this)">
        Dimuliakan <br>
        Ditinggikan
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Yesus Tuhan <br>
        Kau rajaku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Yang bertahta <br>
        Yang berkuasa
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Yesus Tuhan kau rajaku
    </p>
</div>
`;
  }
  else if (songs === "songs7") {
titleS.textContent = "Karna Mu - JPCC";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeText(this)">
        Bapa, Engkau mengenalku <br>
        Lebih dari siapa pun
    </p>
    <p class="song" onclick="changeText(this)">
        Engkau tahu ceritaku <br>
        Dan isi hatiku
    </p>
    <p class="song" onclick="changeText(this)">
        'Tak peduli masa lalu <br>
        Engkau tetap memilihku
    </p>
    <p class="song" onclick="changeText(this)">
        Ubahkanku, sempurnakan <br>
        Jadi karya yang indah
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Kini aku percaya <br>
        Tiada yang mustahil bagi-Mu
    </p>
    <p class="song" onclick="changeText(this)">
        Kuasa-Mu kuatkanku <br>
        Dasarku berharap
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeText(this)">
        <!-- Tambahkan lirik bridge sesuai kebutuhan -->
    </p>
</div>
`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeTextPriview(this)">
        Bapa, Engkau mengenalku <br>
        Lebih dari siapa pun
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Engkau tahu ceritaku <br>
        Dan isi hatiku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        'Tak peduli masa lalu <br>
        Engkau tetap memilihku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Ubahkanku, sempurnakan <br>
        Jadi karya yang indah
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Kini aku percaya <br>
        Tiada yang mustahil bagi-Mu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Kuasa-Mu kuatkanku <br>
        Dasarku berharap
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeTextPriview(this)">
        <!-- Tambahkan lirik bridge sesuai kebutuhan -->
    </p>
</div>
`;
  }
  else if (songs === "songs8") {
  titleS.textContent = "Karna Mu - JPCC";
    live.innerHTML = ``;
    priview.innerHTML = ``;
  }
  else if (songs === "songs9") {
    songD.innerHTML = "<a href='https://portofolio-zeruprogram.netlify.app'>Karna Mu - JPCC</a>";
    titleS.textContent = "Karna Mu - JPCC";
    live.innerHTML = ``;
    priview.innerHTML = ``;
  }
  else if (songs === "songs10") {
  titleS.textContent = "Karna Mu - JPCC";
    live.innerHTML = ``;
    priview.innerHTML = ``;
  }
  else if (songs === "songs11") {
   titleS.textContent = "Karna Mu - JPCC";
    live.innerHTML = ``;
    priview.innerHTML = ``;
  }
  else if (songs === "songs12") {
  titleS.textContent = "Karna Mu - JPCC";
    live.innerHTML = ``;
    priview.innerHTML = ``;
  }
  else if (songs === "songs13") {
    titleS.textContent = "Karna Mu - JPCC";
    live.innerHTML = ``;
    priview.innerHTML = ``;
  }
  else if (songs === "songs14") {
  titleS.textContent = "Karna Mu - JPCC";
    live.innerHTML = ``;
    priview.innerHTML = ``;
  }
  else if (songs === "songs15") {
  titleS.textContent = "Karna Mu - JPCC";
    live.innerHTML = ``;
    priview.innerHTML = ``;
  }
  else {
    live.innerHTML = "";
    titleS.textContent = "choose the song first!";
  }
}