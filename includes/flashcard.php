<div id='flashcard'>
  <div id="scoreCard">1/11</div>
  <div id="closedeck" class='exit cross crossrotate' style=''><div class="innercross"><div class="vert-cross"></div><div class="horiz-cross"></div></div></div>
  <div id='readsurah'><i class="fas fa-book-open"></i></div>
  <div id="flashcont">
  <div id='question'>
    <div id='questcont'></div>
    </div>
  <div id='answercontainer'>
    <div id='answer1'><div class='anscont'></div></div>
    <div id='answer2'><div class='anscont'></div></div>
    <div id='answer-full'><div class='anscont'></div></div>
  </div>
  </div>
  <div id='showanswer'>Show Answer</div>
    <div id='checkcont'>
      <div id='incorrect'><i class="fa fa-times"></i> Missed it</div>
      <div id='correct'><i class="fa fa-check"></i> Got it</div>
    </div>
    <div id='checkcont2'>Next</div>
  </div>
<div id='showsurah'>
  <!--<div id='goback'>
    <i class="fas fa-arrow-left"></i>
  </div>-->
  <div id="surah_header" style="
    display: block;
    position: fixed;
    background: var(--theme-bg);
    z-index: 1;
    width: 100%;
    bottom: 50px;
    padding: 20px 0px;
    box-shadow: 0px 0px 10px 0px var(--theme-bg-strong);
    transition: var(--trans);
">
<i id="surah-audio" class="fas fa-play-circle ayah-audio"></i>
    <select id="surah-selector" style="
    background: transparent;
    color: inherit;
    border: none;
    text-align: center;
    padding-right: 0px;
    text-align-last: center;
    outline: none;
    cursor: pointer;
    font-size: 16px;
"><option value="0">1. Al-Faatiha</option><option value="1">2. Al-Baqara</option><option value="2">3. Aal-i-Imraan</option><option value="3">4. An-Nisaa</option><option value="4">5. Al-Maaida</option><option value="5">6. Al-An'aam</option><option value="6">7. Al-A'raaf</option><option value="7">8. Al-Anfaal</option><option value="8">9. At-Tawba</option><option value="9">10. Yunus</option><option value="10">11. Hud</option><option value="11">12. Yusuf</option><option value="12">13. Ar-Ra'd</option><option value="13">14. Ibrahim</option><option value="14">15. Al-Hijr</option><option value="15">16. An-Nahl</option><option value="16">17. Al-Israa</option><option value="17">18. Al-Kahf</option><option value="18">19. Maryam</option><option value="19">20. Taa-Haa</option><option value="20">21. Al-Anbiyaa</option><option value="21">22. Al-Hajj</option><option value="22">23. Al-Muminoon</option><option value="23">24. An-Noor</option><option value="24">25. Al-Furqaan</option><option value="25">26. Ash-Shu'araa</option><option value="26">27. An-Naml</option><option value="27">28. Al-Qasas</option><option value="28">29. Al-Ankaboot</option><option value="29">30. Ar-Room</option><option value="30">31. Luqman</option><option value="31">32. As-Sajda</option><option value="32">33. Al-Ahzaab</option><option value="33">34. Saba</option><option value="34">35. Faatir</option><option value="35">36. Yaseen</option><option value="36">37. As-Saaffaat</option><option value="37">38. Saad</option><option value="38">39. Az-Zumar</option><option value="39">40. Ghafir</option><option value="40">41. Fussilat</option><option value="41">42. Ash-Shura</option><option value="42">43. Az-Zukhruf</option><option value="43">44. Ad-Dukhaan</option><option value="44">45. Al-Jaathiya</option><option value="45">46. Al-Ahqaf</option><option value="46">47. Muhammad</option><option value="47">48. Al-Fath</option><option value="48">49. Al-Hujuraat</option><option value="49">50. Qaaf</option><option value="50">51. Adh-Dhaariyat</option><option value="51">52. At-Tur</option><option value="52">53. An-Najm</option><option value="53">54. Al-Qamar</option><option value="54">55. Ar-Rahmaan</option><option value="55">56. Al-Waaqia</option><option value="56">57. Al-Hadid</option><option value="57">58. Al-Mujaadila</option><option value="58">59. Al-Hashr</option><option value="59">60. Al-Mumtahana</option><option value="60">61. As-Saff</option><option value="61">62. Al-Jumu'a</option><option value="62">63. Al-Munaafiqoon</option><option value="63">64. At-Taghaabun</option><option value="64">65. At-Talaaq</option><option value="65">66. At-Tahrim</option><option value="66">67. Al-Mulk</option><option value="67">68. Al-Qalam</option><option value="68">69. Al-Haaqqa</option><option value="69">70. Al-Ma'aarij</option><option value="70">71. Nooh</option><option value="71">72. Al-Jinn</option><option value="72">73. Al-Muzzammil</option><option value="73">74. Al-Muddaththir</option><option value="74">75. Al-Qiyaama</option><option value="75">76. Al-Insaan</option><option value="76">77. Al-Mursalaat</option><option value="77">78. An-Naba</option><option value="78">79. An-Naazi'aat</option><option value="79">80. Abasa</option><option value="80">81. At-Takwir</option><option value="81">82. Al-Infitaar</option><option value="82">83. Al-Mutaffifin</option><option value="83">84. Al-Inshiqaaq</option><option value="84">85. Al-Burooj</option><option value="85">86. At-Taariq</option><option value="86">87. Al-A'laa</option><option value="87">88. Al-Ghaashiya</option><option value="88">89. Al-Fajr</option><option value="89">90. Al-Balad</option><option value="90">91. Ash-Shams</option><option value="91">92. Al-Lail</option><option value="92">93. Ad-Dhuhaa</option><option value="93">94. Ash-Sharh</option><option value="94">95. At-Tin</option><option value="95">96. Al-Alaq</option><option value="96">97. Al-Qadr</option><option value="97">98. Al-Bayyina</option><option value="98">99. Az-Zalzala</option><option value="99">100. Al-Aadiyaat</option><option value="100">101. Al-Qaari'a</option><option value="101">102. At-Takaathur</option><option value="102">103. Al-Asr</option><option value="103">104. Al-Humaza</option><option value="104">105. Al-Fil</option><option value="105">106. Quraish</option><option value="106">107. Al-Maa'un</option><option value="107">108. Al-Kawthar</option><option value="108">109. Al-Kaafiroon</option><option value="109">110. An-Nasr</option><option value="110">111. Al-Masad</option><option value="111">112. Al-Ikhlaas</option><option value="112">113. Al-Falaq</option><option value="113">114. An-Naas</option></select>
<div id="surah-details">
<div class="surah-details" style="font-size: 10pt;">Noah</div>
<div class="surah-details" style="font-size: 10pt;">Noah</div>
<div class="surah-details" style="
    font-size: 6pt;
">114 ayahs</div>
</div>
    </div>
  <!-- <audio id='sound' src='https://verses.quran.com/' preload='auto'></audio>-->
  <audio id='sound' src=''></audio>
  <div id='surahcont'></div>
</div>

<!-- 
<option value="0">Al-Faatiha | ٱلْفَاتِحَةِ</option><option value="1">Al-Baqara | البَقَرَةِ</option><option value="2">Aal-i-Imraan | آلِ عِمۡرَانَ</option><option value="3">An-Nisaa | النِّسَاءِ</option><option value="4">Al-Maaida | المَائـِدَةِ</option><option value="5">Al-An'aam | الأَنۡعَامِ</option><option value="6">Al-A'raaf | الأَعۡرَافِ</option><option value="7">Al-Anfaal | الأَنفَالِ</option><option value="8">At-Tawba | التَّوۡبَةِ</option><option value="9">Yunus | يُونُسَ</option><option value="10">Hud | هُودٍ</option><option value="11">Yusuf | يُوسُفَ</option><option value="12">Ar-Ra'd | الرَّعۡدِ</option><option value="13">Ibrahim | إِبۡرَاهِيمَ</option><option value="14">Al-Hijr | الحِجۡرِ</option><option value="15">An-Nahl | النَّحۡلِ</option><option value="16">Al-Israa | الإِسۡرَاءِ</option><option value="17">Al-Kahf | الكَهۡفِ</option><option value="18">Maryam | مَرۡيَمَ</option><option value="19">Taa-Haa | طه</option><option value="20">Al-Anbiyaa | الأَنبِيَاءِ</option><option value="21">Al-Hajj | الحَجِّ</option><option value="22">Al-Muminoon | المُؤۡمِنُونَ</option><option value="23">An-Noor | النُّورِ</option><option value="24">Al-Furqaan | الفُرۡقَانِ</option><option value="25">Ash-Shu'araa | الشُّعَرَاءِ</option><option value="26">An-Naml | النَّمۡلِ</option><option value="27">Al-Qasas | القَصَصِ</option><option value="28">Al-Ankaboot | العَنكَبُوتِ</option><option value="29">Ar-Room | الرُّومِ</option><option value="30">Luqman | لُقۡمَانَ</option><option value="31">As-Sajda | السَّجۡدَةِ</option><option value="32">Al-Ahzaab | الأَحۡزَابِ</option><option value="33">Saba | سَبَإٍ</option><option value="34">Faatir | فَاطِرٍ</option><option value="35">Yaseen | يسٓ</option><option value="36">As-Saaffaat | الصَّافَّاتِ</option><option value="37">Saad | صٓ</option><option value="38">Az-Zumar | الزُّمَرِ</option><option value="39">Ghafir | غَافِرٍ</option><option value="40">Fussilat | فُصِّلَتۡ</option><option value="41">Ash-Shura | الشُّورَىٰ</option><option value="42">Az-Zukhruf | الزُّخۡرُفِ</option><option value="43">Ad-Dukhaan | الدُّخَانِ</option><option value="44">Al-Jaathiya | الجَاثِيَةِ</option><option value="45">Al-Ahqaf | الأَحۡقَافِ</option><option value="46">Muhammad | مُحَمَّدٍ</option><option value="47">Al-Fath | الفَتۡحِ</option><option value="48">Al-Hujuraat | الحُجُرَاتِ</option><option value="49">Qaaf | قٓ</option><option value="50">Adh-Dhaariyat | الذَّارِيَاتِ</option><option value="51">At-Tur | الطُّورِ</option><option value="52">An-Najm | النَّجۡمِ</option><option value="53">Al-Qamar | القَمَرِ</option><option value="54">Ar-Rahmaan | الرَّحۡمَٰن</option><option value="55">Al-Waaqia | الوَاقِعَةِ</option><option value="56">Al-Hadid | الحَدِيدِ</option><option value="57">Al-Mujaadila | المُجَادلَةِ</option><option value="58">Al-Hashr | الحَشۡرِ</option><option value="59">Al-Mumtahana | المُمۡتَحنَةِ</option><option value="60">As-Saff | الصَّفِّ</option><option value="61">Al-Jumu'a | الجُمُعَةِ</option><option value="62">Al-Munaafiqoon | المُنَافِقُونَ</option><option value="63">At-Taghaabun | التَّغَابُنِ</option><option value="64">At-Talaaq | الطَّلَاقِ</option><option value="65">At-Tahrim | التَّحۡرِيمِ</option><option value="66">Al-Mulk | المُلۡكِ</option><option value="67">Al-Qalam | القَلَمِ</option><option value="68">Al-Haaqqa | الحَاقَّةِ</option><option value="69">Al-Ma'aarij | المَعَارِجِ</option><option value="70">Nooh | نُوحٍ</option><option value="71">Al-Jinn | الجِنِّ</option><option value="72">Al-Muzzammil | المُزَّمِّلِ</option><option value="73">Al-Muddaththir | المُدَّثِّرِ</option><option value="74">Al-Qiyaama | القِيَامَةِ</option><option value="75">Al-Insaan | الإِنسَانِ</option><option value="76">Al-Mursalaat | المُرۡسَلَاتِ</option><option value="77">An-Naba | النَّبَإِ</option><option value="78">An-Naazi'aat | النَّازِعَاتِ</option><option value="79">Abasa | عَبَسَ</option><option value="80">At-Takwir | التَّكۡوِيرِ</option><option value="81">Al-Infitaar | الانفِطَارِ</option><option value="82">Al-Mutaffifin | المُطَفِّفِينَ</option><option value="83">Al-Inshiqaaq | الانشِقَاقِ</option><option value="84">Al-Burooj | البُرُوجِ</option><option value="85">At-Taariq | الطَّارِقِ</option><option value="86">Al-A'laa | الأَعۡلَىٰ</option><option value="87">Al-Ghaashiya | الغَاشِيَةِ</option><option value="88">Al-Fajr | الفَجۡرِ</option><option value="89">Al-Balad | البَلَدِ</option><option value="90">Ash-Shams | الشَّمۡسِ</option><option value="91">Al-Lail | اللَّيۡلِ</option><option value="92">Ad-Dhuhaa | الضُّحَىٰ</option><option value="93">Ash-Sharh | الشَّرۡحِ</option><option value="94">At-Tin | التِّينِ</option><option value="95">Al-Alaq | العَلَقِ</option><option value="96">Al-Qadr | القَدۡرِ</option><option value="97">Al-Bayyina | البَيِّنَةِ</option><option value="98">Az-Zalzala | الزَّلۡزَلَةِ</option><option value="99">Al-Aadiyaat | العَادِيَاتِ</option><option value="100">Al-Qaari'a | القَارِعَةِ</option><option value="101">At-Takaathur | التَّكَاثُرِ</option><option value="102">Al-Asr | العَصۡرِ</option><option value="103">Al-Humaza | الهُمَزَةِ</option><option value="104">Al-Fil | الفِيلِ</option><option value="105">Quraish | قُرَيۡشٍ</option><option value="106">Al-Maa'un | المَاعُونِ</option><option value="107">Al-Kawthar | الكَوۡثَرِ</option><option value="108">Al-Kaafiroon | الكَافِرُونَ</option><option value="109">An-Nasr | النَّصۡرِ</option><option value="110">Al-Masad | المَسَدِ</option><option value="111">Al-Ikhlaas | الإِخۡلَاصِ</option><option value="112">Al-Falaq | الفَلَقِ</option><option value="113">An-Naas | النَّاسِ</option>
-->