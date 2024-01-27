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
  titleS.textContent = "Sampai Akhir Hidupku - JPCC";
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
    <p class="song" onclick="changeText(this)">
        Kini aku berserah <br>
        Pada rancangan-Mu bagiku
    </p>
    <p class="song" onclick="changeText(this)">
        Kuikuti panggilan-Mu <br>
        Ku'kan setia sampai akhir hidupku
    </p>
</div>

<div class="borE">
    <label id="labelE">Ending</label>
    <p class="song" onclick="changeText(this)">
        Kuikuti panggilan-Mu <br>
        'Ku 'kan setia sampai akhir hidupku
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
    <p class="song" onclick="changeTextPriview(this)">
        Kini aku berserah <br>
        Pada rancangan-Mu bagiku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Kuikuti panggilan-Mu <br>
        Ku'kan setia sampai akhir hidupku
    </p>
</div>

<div class="borE">
    <label id="labelE">Ending</label>
    <p class="song" onclick="changeTextPriview(this)">
        Kuikuti panggilan-Mu <br>
        'Ku 'kan setia sampai akhir hidupku
    </p>
</div>
`;
  }
  else if (songs === "songs8") {
  titleS.textContent = "Hanya Kau Tuhan - NL";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeText(this)">
        Setiap detik di hidupku <br>
        KemurahanMu memberkatiku
    </p>
    <p class="song" onclick="changeText(this)">
        Nyata sungguh kurasakan <br>
        Engkau Tuhan bertahta dalamku
    </p>
    <p class="song" onclick="changeText(this)">
        Bersyukur kar’na kasih setiaMu <br>
        Memegang kehidupanku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Hanya Kau Tuhan <br>
        Yang s’lalu kuandalkan
    </p>
    <p class="song" onclick="changeText(this)">
        Hatiku percaya <br>
        Takkan goyah imanku
    </p>
    <p class="song" onclick="changeText(this)">
        Hanya Kau Tuhan <br>
        Tempat perlindunganku
    </p>
    <p class="song" onclick="changeText(this)">
        Tak akan kutakut <br>
        Kau Tuhan bersamaku
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeText(this)">
        JanjiMu Tuhan ya dan amin <br>
        SetiaMu Tuhan kekal s’lamanya
    </p>
</div>
`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeTextPriview(this)">
        Setiap detik di hidupku <br>
        KemurahanMu memberkatiku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Nyata sungguh kurasakan <br>
        Engkau Tuhan bertahta dalamku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Bersyukur kar’na kasih setiaMu <br>
        Memegang kehidupanku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Hanya Kau Tuhan <br>
        Yang s’lalu kuandalkan
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Hatiku percaya <br>
        Takkan goyah imanku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Hanya Kau Tuhan <br>
        Tempat perlindunganku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Tak akan kutakut <br>
        Kau Tuhan bersamaku
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeTextPriview(this)">
        JanjiMu Tuhan ya dan amin <br>
        SetiaMu Tuhan kekal s’lamanya
    </p>
</div>
`;
  }
  else if (songs === "songs9") {
    titleS.textContent = "Kumilikmu - JPCC";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeText(this)">
        Dalam kesesakanku <br>
        Kau beri kedamaian-Mu
    </p>
    <p class="song" onclick="changeText(this)">
        Dalam keraguan <br>
        Kutemukan wajah-Mu
    </p>
    <p class="song" onclick="changeText(this)">
        Karena pengorbanan-Mu <br>
        Kau jadikanku baru
    </p>
    <p class="song" onclick="changeText(this)">
        Sungguh kuterkagum <br>
        Amanku di dalam-Mu Yesus
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus 1</label>
    <p class="song" onclick="changeText(this)">
        Kau membuatku <br>
        Sesuai rencana-Mu
    </p>
    <p class="song" onclick="changeText(this)">
        Kau memegang <br>
        Setiap musim hidupku
    </p>
    <p class="song" onclick="changeText(this)">
        Kuserahkan semua kekhawatiranku, <br>
        'Ku milik-Mu
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus 2</label>
    <p class="song" onclick="changeText(this)">
        Semua kekuranganku <br>
        Kau pun tahu
    </p>
    <p class="song" onclick="changeText(this)">
        Tetap kau pandang <br>
        Indah dalam-Mu
    </p>
    <p class="song" onclick="changeText(this)">
        Kuangkat tanganku <br>
        Dan berseru, kumilik-Mu
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
      <p class="song" onclick="changeText(this)">
        I am Yours now forever<br>
        In your grace I surrender
    </p>
    <p class="song" onclick="changeText(this)">
        You are mine now forever <br>
        I'm alive in Your wonder
    </p>
</div>
`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeTextPriview(this)">
        Dalam kesesakanku <br>
        Kau beri kedamaian-Mu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Dalam keraguan <br>
        Kutemukan wajah-Mu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Karena pengorbanan-Mu <br>
        Kau jadikanku baru
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Sungguh kuterkagum <br>
        Amanku di dalam-Mu Yesus
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus 1</label>
    <p class="song" onclick="changeTextPriview(this)">
        Kau membuatku <br>
        Sesuai rencana-Mu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Kau memegang <br>
        Setiap musim hidupku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Kuserahkan semua kekhawatiranku, <br>
        'Ku milik-Mu
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus 2</label>
    <p class="song" onclick="changeTextPriview(this)">
        Semua kekuranganku <br>
        Kau pun tahu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Tetap kau pandang <br>
        Indah dalam-Mu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Kuangkat tanganku <br>
        Dan berseru, kumilik-Mu
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeTextPriview(this)">
        I am Yours now forever<br>
        In your grace I surrender
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        You are mine now forever <br>
        I'm alive in Your wonder
    </p>
</div>
`;
  }
  else if (songs === "songs10") {
  titleS.textContent = "Kau Allah Yang Setia - NL";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeText(this)">
        Kau membentuk hidupku <br>
        Sesuai dengan rencana-Mu
    </p>
    <p class="song" onclick="changeText(this)">
        Kau mengenal hatiku <br>
        Kau tahu kekuranganku
    </p>
    <p class="song" onclick="changeText(this)">
        Betapa besar kasih-Mu <br>
        Di setiap nafas hidupku
    </p>
    <p class="song" onclick="changeText(this)">
        Setiap tawa dan tangisku <br>
        Kau selalu ada bagiku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Kau Allah yang setia <br>
        Tak pernah tinggalkanku
    </p>
    <p class="song" onclick="changeText(this)">
        Janji-Mu sertai jalanku <br>
        Tak pernah kutakut
    </p>
    <p class="song" onclick="changeText(this)">
        Firman-Mu kekuatanku <br>
        Teguhkan jejak langkahku
    </p>
    <p class="song" onclick="changeText(this)">
        Kumenyembah-Mu Yesus <br>
        S'bab Kau Allah yang setia
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeText(this)">
        Di saat kuragu,<br>
        Firman-Mu teguhkan hatiku
    </p>
    <p class="song" onclick="changeText(this)">
        Tak pernah Kau jauh <br>
        Tak lelah setia di dalamku
    </p>
</div>
`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeTextPriview(this)">
        Kau membentuk hidupku <br>
        Sesuai dengan rencana-Mu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Kau mengenal hatiku <br>
        Kau tahu kekuranganku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Betapa besar kasih-Mu <br>
        Di setiap nafas hidupku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Setiap tawa dan tangisku <br>
        Kau selalu ada bagiku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Kau Allah yang setia <br>
        Tak pernah tinggalkanku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Janji-Mu sertai jalanku <br>
        Tak pernah kutakut
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Firman-Mu kekuatanku <br>
        Teguhkan jejak langkahku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Kumenyembah-Mu Yesus <br>
        S'bab Kau Allah yang setia
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeTextPriview(this)">
        Di saat kuragu,<br>
        Firman-Mu teguhkan hatiku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Tak pernah Kau jauh <br>
        Tak lelah setia di dalamku
    </p>
</div>
`;
  }
  else if (songs === "songs11") {
   titleS.textContent = "Mengasihimu - NL";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse 1</label>
    <p class="song" onclick="changeText(this)">
        Penyertaan-Mu, Tuhan <br>
        Di setiap musim hidupku
    </p>
    <p class="song" onclick="changeText(this)">
        Selalu nyata <br>
        Tak pernah berakhir
    </p>
    <p class="song" onclick="changeText(this)">
        Ku bersyukur
    </p>
</div>

<div class="borV">
    <label id="labelV">Verse 2</label>
    <p class="song" onclick="changeText(this)">
        Pertolongan-Mu, Tuhan <br>
        Di setiap langkah hidupku
    </p>
    <p class="song" onclick="changeText(this)">
        Tak pernah terlambat <br>
        Kau selalu ada
    </p>
    <p class="song" onclick="changeText(this)">
        Di sisiku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Seg'nap hatiku bersyukur pada-Mu <br>
        Buat kesetiaan-Mu tak habis dalamku
    </p>
    <p class="song" onclick="changeText(this)">
        S'luruh hidupku kus'rahkan pada-Mu <br>
        Jadikan ku bejana-Mu 'tuk kemuliaan-Mu
    </p>
    <p class="song" onclick="changeText(this)">
        Yesus, ku mengasihi-Mu
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeText(this)">
        Selamanya ku 'kan berjalan <br>
        Bersama-Mu, Tuhan
    </p>
</div>
`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse 1</label>
    <p class="song" onclick="changeTextPriview(this)">
        Penyertaan-Mu, Tuhan <br>
        Di setiap musim hidupku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Selalu nyata <br>
        Tak pernah berakhir
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Ku bersyukur
    </p>
</div>

<div class="borV">
    <label id="labelV">Verse 2</label>
    <p class="song" onclick="changeTextPriview(this)">
        Pertolongan-Mu, Tuhan <br>
        Di setiap langkah hidupku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Tak pernah terlambat <br>
        Kau selalu ada
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Di sisiku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Seg'nap hatiku bersyukur pada-Mu <br>
        Buat kesetiaan-Mu tak habis dalamku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        S'luruh hidupku kus'rahkan pada-Mu <br>
        Jadikan ku bejana-Mu 'tuk kemuliaan-Mu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Yesus, ku mengasihi-Mu
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeTextPriview(this)">
        Selamanya ku 'kan berjalan <br>
        Bersama-Mu, Tuhan
    </p>
</div>
`;
  }
  else if (songs === "songs12") {
  titleS.textContent = "Imanuel - JPCC";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeText(this)">
        Bapa kudatang dan berserah <br>
        Kunyatakan Kau yang berkuasa
    </p>
    <p class="song" onclick="changeText(this)">
        Dalam gelap Kau setia <br>
        Kau cahaya hidupku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Kau kuatkan aku bertahan <br>
        Kau harapan dalam kesesakan
    </p>
    <p class="song" onclick="changeText(this)">
        Kau buktikan kesetiaanMu Tuhan <br>
        Engkau Allah Imanuel
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeText(this)">
        Imanuel Imanuel <br>
        Engkau besertaku
    </p>
    <p class="song" onclick="changeText(this)">
        Imanuel Imanuel <br>
        Engkau Allah besertaku
    </p>
</div>
`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeTextPriview(this)">
        Bapa kudatang dan berserah <br>
        Kunyatakan Kau yang berkuasa
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Dalam gelap Kau setia <br>
        Kau cahaya hidupku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Kau kuatkan aku bertahan <br>
        Kau harapan dalam kesesakan
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Kau buktikan kesetiaanMu Tuhan <br>
        Engkau Allah Imanuel
    </p>
</div>

<div class="borB">
    <label id="labelB">Bridge</label>
    <p class="song" onclick="changeTextPriview(this)">
        Imanuel Imanuel <br>
        Engkau besertaku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Imanuel Imanuel <br>
        Engkau Allah besertaku
    </p>
</div>
`;
  }
  else if (songs === "songs13") {
    titleS.textContent = "Teguhkan Kami Satu - JPCC";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeText(this)">
        Dalam penderitaanMu <br>
        Kau menengadah dan berdoa
    </p>
    <p class="song" onclick="changeText(this)">
        Agar kami bersatu <br>
        Seperti Bapa dan Engkau satu
    </p>
    <p class="song" onclick="changeText(this)">
        Maka dunia pun tahu <br>
        Akan keagungan kasihMu, Yesus
    </p>
    <p class="song" onclick="changeText(this)">
        Dan betapa besarnya <br>
        Anugerah dan kebaikanMu
    </p>
</div>

<div class="borPC">
    <label id="labelPC">Pre-chorus</label>
    <p class="song" onclick="changeText(this)">
        Engkau Tuhan, Kekal dan Maha Kuasa <br>
        Tiada yang mustahil bagiMu
    </p>
    <p class="song" onclick="changeText(this)">
        Kami berpaling rendahkan hati <br>
        Jadikanlah kami sepertiMu
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Kami hadir <br>
        Menghadap tahtaMu
    </p>
    <p class="song" onclick="changeText(this)">
        Bersama menyembah <br>
        Di rumahMu
    </p>
    <p class="song" onclick="changeText(this)">
        Agar dunia melihat kasihMu <br>
        Yesus Kau Raja
    </p>
    <p class="song" onclick="changeText(this)">
        Teguhkan kami <br>
        Satu
    </p>
</div>
`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeTextPriview(this)">
        Dalam penderitaanMu <br>
        Kau menengadah dan berdoa
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Agar kami bersatu <br>
        Seperti Bapa dan Engkau satu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Maka dunia pun tahu <br>
        Akan keagungan kasihMu, Yesus
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Dan betapa besarnya <br>
        Anugerah dan kebaikanMu
    </p>
</div>

<div class="borPC">
    <label id="labelPC">Pre-chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Engkau Tuhan, Kekal dan Maha Kuasa <br>
        Tiada yang mustahil bagiMu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Kami berpaling rendahkan hati <br>
        Jadikanlah kami sepertiMu
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Kami hadir <br>
        Menghadap tahtaMu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Bersama menyembah <br>
        Di rumahMu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Agar dunia melihat kasihMu <br>
        Yesus Kau Raja
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Teguhkan kami <br>
        Satu
    </p>
</div>
`;
  }
  else if (songs === "songs14") {
  titleS.textContent = "Yesus Penolongku - JPCC";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse 1</label>
    <p class="song" onclick="changeText(this)">
        Kau alasan di dalam hidupku <br>
        'Tuk berserah penuh kepada-Mu
    </p>
    <p class="song" onclick="changeText(this)">
        Di luar-Mu ku tak akan mampu <br>
        Melakukan semua kehendak-Mu
    </p>
</div>

<div class="borV">
    <label id="labelV">Verse 2</label>
    <p class="song" onclick="changeText(this)">
        Meski harus kulewati lembah <br>
        Namun engkau tak lepaskan aku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Yesus penolongku kucari wajah-Mu <br>
        Kau yang kuperlu di setiap waktu
    </p>
    <p class="song" onclick="changeText(this)">
        Tiada kutakut s'bab Kau besertaku <br>
        Kar'na kau tuhan di atas s'galanya
    </p>
</div>
`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse 1</label>
    <p class="song" onclick="changeTextPriview(this)">
        Kau alasan di dalam hidupku <br>
        'Tuk berserah penuh kepada-Mu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Di luar-Mu ku tak akan mampu <br>
        Melakukan semua kehendak-Mu
    </p>
</div>

<div class="borV">
    <label id="labelV">Verse 2</label>
    <p class="song" onclick="changeTextPriview(this)">
        Meski harus kulewati lembah <br>
        Namun engkau tak lepaskan aku
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Yesus penolongku kucari wajah-Mu <br>
        Kau yang kuperlu di setiap waktu
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Tiada kutakut s'bab Kau besertaku <br>
        Kar'na kau tuhan di atas s'galanya
    </p>
</div>
`;
  }
  else if (songs === "songs15") {
  titleS.textContent = "Ajaib Kau Tuhan - JPCC";
    live.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeText(this)">
        'Tak terbayang kebesaran-Mu <br>
        Dan 'tak terbanding kekuatan-Mu, Tuhan
    </p>
    <p class="song" onclick="changeText(this)">
        Kau megah bagiku <br>
        Seg'nap jiwa dan pengharapan
    </p>
    <p class="song" onclick="changeText(this)">
        T'lah kuserahkan <br>
        'Tuk rencana-Mu, Tuhan,
    </p>
    <p class="song" onclick="changeText(this)">
        'Kau Raja atasku
    </p>
</div>

<div class="borPC">
    <label id="labelPC">Pre-chorus</label>
    <p class="song" onclick="changeText(this)">
        Hanya 'Kau yang layak di tinggikan
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeText(this)">
        Ajaib 'Kau Tuhan <br>
        Agung dan perkasa
    </p>
    <p class="song" onclick="changeText(this)">
        'Kau sumber <br>
        Kemenanganku
    </p>
    <p class="song" onclick="changeText(this)">
        Layak berkuasa <br>
        Mem'rintah s'lamanya
    </p>
    <p class="song" onclick="changeText(this)">
        Yesus Kaulah <br>
        Raja mulia
    </p>
</div>
`;
    priview.innerHTML = `<div class="borV">
    <label id="labelV">Verse</label>
    <p class="song" onclick="changeTextPriview(this)">
        'Tak terbayang kebesaran-Mu <br>
        Dan 'tak terbanding kekuatan-Mu, Tuhan
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Kau megah bagiku <br>
        Seg'nap jiwa dan pengharapan
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        T'lah kuserahkan <br>
        'Tuk rencana-Mu, Tuhan,
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        'Kau Raja atasku
    </p>
</div>

<div class="borPC">
    <label id="labelPC">Pre-chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Hanya 'Kau yang layak di tinggikan
    </p>
</div>

<div class="borC">
    <label id="labelC">Chorus</label>
    <p class="song" onclick="changeTextPriview(this)">
        Ajaib 'Kau Tuhan <br>
        Agung dan perkasa
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        'Kau sumber <br>
        Kemenanganku
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Layak berkuasa <br>
        Mem'rintah s'lamanya
    </p>
    <p class="song" onclick="changeTextPriview(this)">
        Yesus Kaulah <br>
        Raja mulia
    </p>
</div>
`;
  }
/*  else if (songs === "songs15") {
  titleS.textContent = "Ajaib Kau Tuhan - JPCC";
    live.innerHTML = ``;
    priview.innerHTML = ``;
  }*/
  else {
    live.innerHTML = "";
    titleS.textContent = "choose the song first!";
  }
}