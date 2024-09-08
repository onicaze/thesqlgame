document.addEventListener('DOMContentLoaded', () => {

    // Semua gambar pd. array surveyList dibuat/digenerate oleh getimg.ai
    const surveyList = [
        {
            id: 1,
            survey_cats: "download",
            name: "Survei Kesejahteraan Masyarakat di Perkotaan",
            details: "Survei ini bertujuan untuk mengukur tingkat kesejahteraan masyarakat yang tinggal di kawasan perkotaan di Indonesia. Fokus dari survei ini mencakup aspek ekonomi, sosial, kesehatan fisik dan mental, serta akses terhadap layanan umum seperti pendidikan, transportasi, dan kesehatan. Selain itu, survei ini mengevaluasi bagaimana urbanisasi dan perkembangan kota mempengaruhi kualitas hidup warga. Hasil survei ini akan digunakan untuk membantu pemerintah dan organisasi non-profit dalam merancang kebijakan yang lebih baik terkait pembangunan perkotaan.",
            graphic: "https://img1.getimg.ai/generated/img-bAfNF17ZikvcBpJZ5s5Nm.jpeg",
            author: "Andi Suryanto",
            page: "library/surveys/kesejahteraan-masyarakat.html",
            pdf: "1saa2pdOXd30823ZP-OD4TlEKLqQLunHs",
            category: "survey_item"
        },
        {
            id: 2,
            survey_cats: "download",
            name: "Survei Kebijakan Pengelolaan Sampah di Lingkungan Perkotaan",
            details: "Survei ini dirancang untuk mengevaluasi efektivitas kebijakan pengelolaan sampah yang telah diterapkan di beberapa kota besar di Indonesia. Melalui survei ini, kami mengumpulkan pendapat masyarakat mengenai cara mereka mengelola sampah rumah tangga, partisipasi mereka dalam program daur ulang, serta persepsi mereka terhadap fasilitas pengelolaan sampah yang disediakan oleh pemerintah. Survei ini juga menyelidiki tantangan utama yang dihadapi masyarakat dalam menerapkan kebiasaan ramah lingkungan sehari-hari.",
            graphic: "https://img1.getimg.ai/generated/img-gg6HCz2eFiCrDcfspwtCO.jpeg",
            author: "Maria Santoso",
            page: "library/surveys/pengelolaan-sampah.html",
            pdf: "1l6k2dHny9utgFlc8-0t4-7SE8m-dyeBR",
            category: "survey_item"
        },
        {
            id: 3,
            survey_cats: "download",
            name: "Survei Akses Pendidikan di Daerah Terpencil",
            details: "Survei ini bertujuan untuk memahami tantangan yang dihadapi oleh anak-anak di daerah terpencil dalam mendapatkan akses pendidikan yang memadai. Kami akan mengeksplorasi masalah seperti infrastruktur sekolah, akses ke bahan ajar, kualifikasi guru, dan faktor-faktor sosial ekonomi yang mempengaruhi tingkat pendidikan. Survei ini juga mencakup wawancara dengan siswa, guru, dan orang tua untuk mendapatkan pandangan mendalam tentang kesulitan dan harapan mereka terkait pendidikan.",
            graphic: "https://img1.getimg.ai/generated/img-6PRjKXLc3CsDbi0vqulZe.jpeg",
            author: "Budi Prasetyo",
            page: "library/surveys/akses-pendidikan.html",
            pdf: "1t_68nhWKNuCsJOIrGI-4-j9pqtVvUW7y",
            category: "survey_item"
        },
        {
            id: 4,
            survey_cats: "download",
            name: "Survei Partisipasi Politik Masyarakat",
            details: "Survei ini berfokus pada tingkat partisipasi politik masyarakat di berbagai daerah, terutama menjelang pemilu dan pilkada. Kami mengukur pemahaman masyarakat tentang proses pemilihan umum, partisipasi mereka dalam kampanye politik, serta kepercayaan mereka terhadap institusi demokrasi. Selain itu, survei ini juga melihat bagaimana faktor-faktor seperti usia, tingkat pendidikan, dan akses informasi memengaruhi keterlibatan politik. Hasil survei ini akan menjadi bahan kajian bagi partai politik dan organisasi masyarakat sipil.",
            graphic: "https://img1.getimg.ai/generated/img-tObkAY2frx4D0ZHNQ07Uv.jpeg",
            author: "Dewi Hartanto",
            page: "library/surveys/partisipasi-politik.html",
            pdf: "1XkGoJEkBk_m19rOOIxAe763lXYqttK2N",
            category: "survey_item"
        },
        {
            id: 5,
            survey_cats: "download",
            name: "Survei Dampak Sosial Media terhadap Generasi Muda",
            details: "Survei ini berfokus pada dampak penggunaan media sosial terhadap kesejahteraan mental, sosial, dan akademik generasi muda di Indonesia. Dengan meningkatnya penggunaan media sosial di kalangan remaja, survei ini bertujuan untuk memahami bagaimana platform digital memengaruhi interaksi sosial, tekanan dari media, serta pandangan mereka tentang dunia. Kami juga mengukur tingkat kecanduan media sosial dan bagaimana ini berkorelasi dengan kesehatan mental, termasuk kecemasan dan depresi.",
            graphic: "https://img1.getimg.ai/generated/img-5scf5CUK0oS8Z19FY6bCV.jpeg",
            author: "Siti Aminah",
            page: "library/surveys/dampak-sosial-media.html",
            pdf: "130YJvbb0QsIzASxfGGe9o59j-MFBDWnJ",
            category: "survey_item"
        },
        {
            id: 6,
            survey_cats: "download",
            name: "Survei Persepsi Masyarakat terhadap Kesehatan Lingkungan",
            details: "Survei ini mengkaji persepsi masyarakat mengenai isu-isu kesehatan lingkungan seperti polusi udara, pengelolaan air bersih, dan sanitasi. Survei ini melibatkan warga dari berbagai latar belakang ekonomi untuk mengetahui sejauh mana mereka menyadari pentingnya lingkungan yang sehat serta bagaimana kebiasaan sehari-hari mereka memengaruhi lingkungan sekitar. Data dari survei ini akan digunakan untuk mempromosikan kampanye kesehatan lingkungan yang lebih efektif.",
            graphic: "https://img1.getimg.ai/generated/img-5z3Lv6hkQF9bTDhm6EQv7.jpeg",
            author: "Ahmad Fadhil",
            page: "library/surveys/kesehatan-lingkungan.html",
            pdf: "162Ig1iJJdDjLNZhsCoqGD3iW3F-lYZ8-",
            category: "survey_item"
        },
        {
            id: 7,
            survey_cats: "download",
            name: "Survei Kesetaraan Gender di Dunia Kerja",
            details: "Survei ini bertujuan untuk memahami persepsi dan pengalaman karyawan terkait kesetaraan gender di tempat kerja. Fokus survei meliputi kesempatan karir, kebijakan cuti, perbedaan gaji antara pria dan wanita, serta pengalaman terkait diskriminasi gender. Kami juga mengevaluasi bagaimana perusahaan berupaya menciptakan lingkungan kerja yang inklusif dan adil untuk semua gender.",
            graphic: "https://img1.getimg.ai/generated/img-AovVacmsniRLvyiqY9FVs.jpeg",
            author: "Nur Aini",
            page: "library/surveys/kesetaraan-gender.html",
            pdf: "16HJzK-tEzcjkIxuNqR-J12vfHlrSXIQ9",
            category: "survey_item"
        },
        {
            id: 8,
            survey_cats: "download",
            name: "Survei Kondisi Layanan Kesehatan Masyarakat",
            details: "Survei ini mengkaji pengalaman masyarakat dalam mengakses layanan kesehatan di berbagai fasilitas kesehatan, baik swasta maupun pemerintah. Kami mengumpulkan data tentang kualitas layanan, waktu tunggu, biaya yang dikeluarkan, serta bagaimana masyarakat menilai profesionalisme tenaga medis. Survei ini juga mengeksplorasi hambatan yang dihadapi masyarakat, terutama di daerah pedesaan, dalam mendapatkan layanan kesehatan yang berkualitas.",
            graphic: "https://img1.getimg.ai/generated/img-Uagdo40gIVk6ZpWM16T2o.jpeg",
            author: "Rina Saraswati",
            page: "library/surveys/layanan-kesehatan.html",
            pdf: "1q_2567V8kpGhUvbK9YDRA_fM1PkY4UxS",
            category: "survey_item"
        },
        {
            id: 9,
            survey_cats: "download",
            name: "Survei Kesejahteraan Lansia di Indonesia",
            details: "Survei ini meneliti kesejahteraan sosial dan ekonomi lansia di berbagai wilayah di Indonesia. Fokus survei meliputi dukungan keluarga, akses terhadap layanan kesehatan, serta kondisi keuangan lansia. Survei ini juga melihat bagaimana kebijakan sosial dapat ditingkatkan untuk mendukung kesejahteraan lansia di masa mendatang, terutama dalam menghadapi perubahan demografis dan ekonomi.",
            graphic: "https://img1.getimg.ai/generated/img-1GjR7S5SiW1CVwGD1frbo.jpeg",
            author: "Bagas Suhartono",
            page: "library/surveys/kesejahteraan-lansia.html",
            pdf: "1PbGNr88QHN7wlkquntbZITOP7eCinVcj",
            category: "survey_item"
        },
        {
            id: 10,
            survey_cats: "download",
            name: "Survei Pemberdayaan Komunitas Lokal",
            details: "Survei ini berfokus pada upaya pemberdayaan komunitas lokal, terutama di daerah terpencil dan pedesaan. Kami mengevaluasi program-program yang telah diterapkan oleh pemerintah dan organisasi non-pemerintah dalam meningkatkan kualitas hidup komunitas lokal, seperti program pemberdayaan ekonomi, pelatihan keterampilan, serta akses ke teknologi. Survei ini juga menyoroti tantangan yang dihadapi dalam memberdayakan komunitas, termasuk keterbatasan infrastruktur dan pendanaan.",
            graphic: "https://img1.getimg.ai/generated/img-ZqUmmnVLCaLZ4NrfGEY7f.jpeg",
            author: "Fajar Rahman",
            page: "library/surveys/pemberdayaan-komunitas.html",
            pdf: "1QHbI6_olkhRxsH8XviewMOVyTrHGlCjG",
            category: "survey_item"
        },
        {
            id: 11,
            survey_cats: "download",
            name: "Survei Penggunaan Energi Terbarukan di Indonesia",
            details: "Survei ini bertujuan untuk mengumpulkan data mengenai penggunaan energi terbarukan di kalangan masyarakat Indonesia. Kami akan mengeksplorasi sejauh mana masyarakat menggunakan sumber energi seperti tenaga surya, angin, dan bioenergi, serta faktor-faktor yang mempengaruhi adopsi teknologi ini.",
            graphic: "https://img1.getimg.ai/generated/img-edrF0l64hzh6CwLLwI2Nq.jpeg",
            author: "Rahmat Abdullah",
            page: "library/surveys/energi-terbarukan.html",
            pdf: "1QSLGDUus73sfXb2DoweEdjeWDc39-dNT",
            category: "survey_item"
        },
        {
            id: 12,
            survey_cats: "download",
            name: "Survei Kesehatan Mental di Tempat Kerja",
            details: "Survei ini mengeksplorasi kondisi kesehatan mental karyawan di tempat kerja, termasuk tingkat stres, keseimbangan kerja-kehidupan, dan dukungan perusahaan terhadap kesehatan mental. Survei ini juga melihat bagaimana kesehatan mental memengaruhi produktivitas dan kepuasan kerja.",
            graphic: "https://img1.getimg.ai/generated/img-AovVacmsniRLvyiqY9FVs.jpeg",
            author: "Yuli Setiawan",
            page: "library/surveys/kesehatan-mental-kerja.html",
            pdf: "1WU-avDAwvB66SrfEbaE4UbEAJGCH9Xy6",
            category: "survey_item"
        },
        {
            id: 13,
            survey_cats: "download",
            name: "Survei Pola Makan Sehat di Kalangan Anak Muda",
            details: "Survei ini berfokus pada kebiasaan makan generasi muda di Indonesia, termasuk konsumsi makanan cepat saji, sayuran, buah-buahan, dan kebiasaan minum. Survei ini juga meneliti bagaimana media sosial mempengaruhi pola makan dan persepsi tentang diet sehat.",
            graphic: "https://img1.getimg.ai/generated/img-YwDFScz6LyuesHuJ6qmtW.jpeg",
            author: "Sri Mulyani",
            page: "library/surveys/pola-makan-anak-muda.html",
            pdf: "1ttspU1I94zJ0JyPlpz9LQU41BG9mohCf",
            category: "survey_item"
        },
        {
            id: 14,
            survey_cats: "download",
            name: "Survei Peran Teknologi dalam Pendidikan",
            details: "Survei ini mengkaji bagaimana teknologi digunakan dalam proses pendidikan di sekolah-sekolah Indonesia. Fokus utama meliputi penggunaan perangkat digital, pembelajaran jarak jauh, serta aplikasi edukasi. Kami juga mengevaluasi dampak teknologi terhadap kualitas pembelajaran dan interaksi siswa-guru.",
            graphic: "https://img1.getimg.ai/generated/img-6PRjKXLc3CsDbi0vqulZe.jpeg",
            author: "Eka Purnama",
            page: "library/surveys/teknologi-pendidikan.html",
            pdf: "1E-Gw1NxwzWTsgUFsRyNFWSzES1fnvZaa",
            category: "survey_item"
        },
        {
            id: 15,
            survey_cats: "download",
            name: "Survei Kepuasan Pelanggan Terhadap Layanan E-Commerce",
            details: "Survei ini bertujuan untuk mengevaluasi tingkat kepuasan pelanggan terhadap layanan e-commerce di Indonesia. Survei ini meneliti aspek-aspek seperti kemudahan berbelanja, pengiriman, kualitas produk, serta pelayanan pelanggan.",
            graphic: "https://img1.getimg.ai/generated/img-56JbdZXEqvAwJ0Ov944AS.jpeg",
            author: "Dian Wijaya",
            page: "library/surveys/ecommerce-kepuasan-pelanggan.html",
            pdf: "1rQqqmUjehT9ESxun1cXChQbw11jkACRY",
            category: "survey_item"
        },
        {
            id: 16,
            survey_cats: "download",
            name: "Survei Persepsi Masyarakat Terhadap Transportasi Umum",
            details: "Survei ini mengeksplorasi persepsi masyarakat mengenai penggunaan transportasi umum di kota-kota besar Indonesia. Fokus utama meliputi kenyamanan, keamanan, keterjangkauan, dan aksesibilitas layanan transportasi umum.",
            graphic: "https://img1.getimg.ai/generated/img-CZ4jUN6rifLAkDtukQB2s.jpeg",
            author: "Fauzi Rahman",
            page: "library/surveys/transportasi-umum.html",
            pdf: "1F0AjtmNQtDkC0mamgLEgRtVMjWTwJrMQ",
            category: "survey_item"
        },    
        {
            id: 17,
            survey_cats: "available",
            name: "Kesehatan Masyarakat di Pedesaan",
            details: "Survei ini bertujuan untuk menggali pandangan masyarakat pedesaan mengenai akses dan kualitas layanan kesehatan yang tersedia di daerah mereka. Melalui survei ini, kami ingin memahami sejauh mana masyarakat memiliki akses terhadap layanan medis, frekuensi kunjungan ke dokter, serta masalah kesehatan yang mereka alami. Survei ini juga mencakup pertanyaan terkait penggunaan layanan telemedicine dan bagaimana masyarakat menilai kekurangan dalam fasilitas kesehatan di daerah mereka.",
            graphic: "https://img1.getimg.ai/generated/img-5z3Lv6hkQF9bTDhm6EQv7.jpeg",
            author: "Dr. Andika Wijaya",
            category: "survey_item"
          },
          {
            id: 18,
            survey_cats: "available",
            name: "Kualitas Pendidikan di Sekolah Dasar",
            details: "Survei ini berfokus pada evaluasi kualitas pendidikan di tingkat sekolah dasar. Tujuannya adalah untuk mendapatkan pandangan dari berbagai pihak mengenai kurikulum, fasilitas sekolah, serta tingkat kepuasan siswa dan orang tua terhadap proses pendidikan. Selain itu, survei ini juga menilai apakah metode pengajaran saat ini sesuai dengan kebutuhan siswa serta memadai untuk mencapai tujuan pendidikan.",
            graphic: "https://img1.getimg.ai/generated/img-6PRjKXLc3CsDbi0vqulZe.jpeg",
            author: "Prof. Sri Hartati",
            category: "survey_item"
          },
          {
            id: 19,
            survey_cats: "available",
            name: "Perilaku Konsumen di E-Commerce",
            details: "Survei ini bertujuan untuk mengumpulkan informasi tentang perilaku konsumen saat berbelanja di platform e-commerce. Melalui survei ini, kami ingin memahami kebiasaan belanja online, produk yang sering dibeli, serta pengalaman pengguna dalam menggunakan platform e-commerce. Survei ini juga mengkaji preferensi konsumen antara berbelanja online dan di toko fisik serta alasan utama konsumen memilih belanja online.",
            graphic: "https://img1.getimg.ai/generated/img-56JbdZXEqvAwJ0Ov944AS.jpeg",
            author: "Rizki Pratama",
            category: "survey_item"
          },
          {
            id: 20,
            survey_cats: "available",
            name: "Kepuasan Pelanggan terhadap Layanan Transportasi",
            details: "Survei ini dirancang untuk mengevaluasi tingkat kepuasan pelanggan terhadap layanan transportasi yang mereka gunakan. Fokus survei ini adalah untuk mengetahui pendapat pelanggan mengenai kenyamanan, kebersihan, dan keandalan layanan transportasi, serta penilaian terhadap tarif yang dikenakan. Selain itu, survei ini juga mengumpulkan saran dari pelanggan untuk meningkatkan kualitas layanan transportasi di masa mendatang.",
            graphic: "https://img1.getimg.ai/generated/img-5z3Lv6hkQF9bTDhm6EQv7.jpeg",
            author: "Dewi Kurniawan",
            category: "survey_item"
          },
          {
            id: 21,
            survey_cats: "available",
            name: "Penggunaan Energi di Rumah Tangga",
            details: "Survei ini bertujuan untuk mengkaji pola penggunaan energi di rumah tangga serta kesadaran masyarakat terhadap lingkungan terkait penggunaan energi. Melalui survei ini, kami ingin mengetahui jenis energi yang paling sering digunakan, efisiensi penggunaan energi, serta langkah-langkah yang diambil masyarakat untuk mengurangi konsumsi energi. Selain itu, survei ini juga mengevaluasi sejauh mana rumah tangga telah mengadopsi energi terbarukan.",
            graphic: "https://img1.getimg.ai/generated/img-5z3Lv6hkQF9bTDhm6EQv7.jpeg",
            author: "Budi Santoso",
            category: "survey_item"
          },
          {
            id: 22,
            survey_cats: "available",
            name: "Dampak Pandemi terhadap Pekerjaan",
            details: "Survei ini ditujukan untuk memahami bagaimana pandemi COVID-19 mempengaruhi pekerjaan dan kesehatan mental masyarakat. Survei ini mengkaji pengalaman bekerja jarak jauh selama pandemi, tingkat stres yang dirasakan, serta aspek-aspek lain yang mempengaruhi kesejahteraan selama masa pandemi. Responden juga diminta untuk berbagi apa yang paling mereka rindukan dari masa pra-pandemi.",
            graphic: "https://img1.getimg.ai/generated/img-AovVacmsniRLvyiqY9FVs.jpeg",
            author: "Intan Pratiwi",
            category: "survey_item"
          },
          {
            id: 23,
            survey_cats: "available",
            name: "Pengalaman Pengguna Aplikasi Mobile",
            details: "Survei ini bertujuan untuk mengevaluasi pengalaman pengguna dalam menggunakan aplikasi mobile. Fokus survei ini adalah pada antarmuka, fungsionalitas yang dibutuhkan, serta masalah teknis yang dihadapi pengguna. Selain itu, survei ini juga mengumpulkan pendapat pengguna mengenai kemudahan penggunaan aplikasi serta fitur tambahan yang mereka harapkan.",
            graphic: "https://img1.getimg.ai/generated/img-5scf5CUK0oS8Z19FY6bCV.jpeg",
            author: "Fajar Wijaya",
            category: "survey_item"
          },
          {
            id: 24,
            survey_cats: "available",
            name: "Penerimaan Teknologi Baru di Masyarakat",
            details: "Survei ini bertujuan untuk memahami tingkat penerimaan masyarakat terhadap teknologi baru dan kendala yang mereka hadapi dalam adopsi teknologi. Melalui survei ini, kami ingin mengetahui manfaat yang dirasakan masyarakat dari teknologi baru, serta sejauh mana mereka merasa nyaman dengan perubahan teknologi yang cepat. Survei ini juga mengidentifikasi teknologi terbaru yang paling diminati oleh masyarakat.",
            graphic: "https://img1.getimg.ai/generated/img-rfsM6PFH3zjFT2LjGqXEK.jpeg",
            author: "Rahmat Hidayat",
            category: "survey_item"
          },
          {
            id: 25,
            survey_cats: "available",
            name: "Dampak Urbanisasi terhadap Lingkungan",
            details: "Survei ini dirancang untuk mengevaluasi dampak urbanisasi terhadap lingkungan sekitar. Fokus survei ini adalah untuk mengetahui pandangan masyarakat mengenai polusi di area urban, perubahan penggunaan lahan, dan dampaknya terhadap ekosistem lokal. Responden juga diminta untuk memberikan solusi yang mereka usulkan untuk mengurangi dampak negatif urbanisasi.",
            graphic: "https://img1.getimg.ai/generated/img-bAfNF17ZikvcBpJZ5s5Nm.jpeg",
            author: "Siti Nurhayati",
            category: "survey_item"
          },
          {
            id: 26,
            survey_cats: "available",
            name: "Kesejahteraan Mental Remaja",
            details: "Survei ini bertujuan untuk mengidentifikasi faktor-faktor yang mempengaruhi kesejahteraan mental remaja. Melalui survei ini, kami ingin mengetahui tingkat dukungan sosial yang diterima remaja, akses mereka terhadap layanan kesehatan mental, serta strategi yang mereka gunakan untuk mengatasi stres. Survei ini juga menilai apakah layanan kesehatan mental saat ini memadai untuk memenuhi kebutuhan remaja.",
            graphic: "https://img1.getimg.ai/generated/img-bOkr00PeiSFiEtL2TGLNP.jpeg",
            author: "Dr. Fitri Andayani",
            category: "survey_item"
          },
          {
            id: 27,
            survey_cats: "available",
            name: "Kesadaran Keamanan Siber",
            details: "Survei ini berfokus pada tingkat kesadaran masyarakat terhadap keamanan siber dan praktik perlindungan data pribadi. Tujuan survei ini adalah untuk mengidentifikasi langkah-langkah yang diambil oleh masyarakat untuk meningkatkan keamanan online mereka, serta tingkat rasa aman yang mereka rasakan saat beraktivitas online. Survei ini juga mengevaluasi sejauh mana masyarakat menerapkan praktik perlindungan data pribadi dalam kehidupan sehari-hari.",
            graphic: "https://img1.getimg.ai/generated/img-rfsM6PFH3zjFT2LjGqXEK.jpeg",
            author: "Ahmad Sulaiman",
            category: "survey_item"
          },
          {
            id: 28,
            survey_cats: "available",
            name: "Kualitas Udara di Kawasan Industri",
            details: "Survei ini bertujuan untuk menilai kualitas udara di kawasan industri dan dampaknya terhadap kesehatan masyarakat. Fokus survei ini adalah pada sumber utama polusi udara di kawasan industri, serta langkah-langkah yang diambil masyarakat untuk mengurangi polusi udara. Survei ini juga mengevaluasi pandangan masyarakat mengenai perbaikan kualitas udara di lingkungan mereka.",
            graphic: "https://img1.getimg.ai/generated/img-I6Oymd68Uq3pi1Mz5gKyr.jpeg",
            author: "Rina Fauziah",
            category: "survey_item"
          },
          {
            id: 29,
            survey_cats: "available",
            name: "Pengaruh Media Sosial terhadap Produktivitas",
            details: "Survei ini berfokus pada pengaruh media sosial terhadap produktivitas individu dalam kehidupan sehari-hari. Tujuan survei ini adalah untuk mengidentifikasi bagaimana media sosial mempengaruhi pola kerja, kehidupan sosial, serta keseimbangan antara pekerjaan dan kehidupan pribadi. Responden juga diminta untuk memberikan pandangan mereka mengenai platform media sosial yang paling sering mereka gunakan dan pengaruhnya terhadap produktivitas.",
            graphic: "https://img1.getimg.ai/generated/img-AovVacmsniRLvyiqY9FVs.jpeg",
            author: "Maya Kartika",
            category: "survey_item"
          },
          {
            id: 30,
            survey_cats: "available",
            name: "Akses ke Layanan Kesehatan Mental",
            details: "Survei ini dirancang untuk mengevaluasi akses masyarakat terhadap layanan kesehatan mental dan faktor-faktor yang mempengaruhi penggunaan layanan tersebut. Fokus survei ini adalah untuk memahami sejauh mana masyarakat merasa bahwa akses ke layanan kesehatan mental memadai, serta kendala utama yang mereka hadapi dalam mengakses layanan ini. Survei ini juga mengidentifikasi faktor-faktor yang mempengaruhi penggunaan layanan kesehatan mental.",
            graphic: "https://img1.getimg.ai/generated/img-Uagdo40gIVk6ZpWM16T2o.jpeg",
            author: "Nurul Aisyah",
            category: "survey_item"
        },
        {
            id: 31,
            survey_cats: "available",
            name: "Kesadaran Lingkungan di Sekolah",
            details: "Survei ini berfokus pada tingkat kesadaran lingkungan di sekolah dan partisipasi siswa dalam kegiatan ramah lingkungan. Tujuan survei ini adalah untuk mengetahui pandangan siswa mengenai pentingnya pelestarian lingkungan, serta langkah-langkah yang telah mereka ambil untuk melindungi lingkungan di sekolah. Survei ini juga mengevaluasi efektivitas program-program lingkungan di sekolah.",
            graphic: "https://img1.getimg.ai/generated/img-6PRjKXLc3CsDbi0vqulZe.jpeg",
            author: "Lina Putri",
            category: "survey_item"
        }
    ];


    const surveyListElement = document.getElementById('survey-list');
    const searchInput = document.querySelector('.searchdiv input[type="text"]');
    const searchButton = document.querySelector('.search-btn');
    const paginationElement = document.getElementById('pagination-container').querySelector('.pagination');
    const availableCheckbox = document.getElementById('available-checkbox');
    const downloadCheckbox = document.getElementById('download-checkbox');
    
    const itemsPerPage = 12;
    let currentPage = 1;

    const highlightText = (text, term) => {
        const regex = new RegExp(`(${term})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    };

    const renderSurveys = (surveys, searchTerm, page) => {
        surveyListElement.innerHTML = '';
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, surveys.length);
        const paginatedSurveys = surveys.slice(startIndex, endIndex);

        paginatedSurveys.forEach((survey) => {
            const surveyItem = document.createElement('div');
            surveyItem.className = 'survey-item';

            let overlayText = '';
            if (survey.survey_cats === "download") {
                overlayText = 'PDF Download';
            } else if (survey.survey_cats === "available") {
                overlayText = 'Survey';
            }

        localStorage.setItem(`survey_${survey.id}_name`,survey.name);
        localStorage.setItem(`survey_${survey.id}_details`,survey.details);
        localStorage.setItem(`survey_${survey.id}_graphic`,survey.graphic);
        localStorage.setItem(`survey_${survey.id}_pdf`,survey.pdf);
        localStorage.setItem(`survey_${survey.id}_author`,survey.author);
        localStorage.setItem(`survey_${survey.id}_cats`, survey.survey_cats);

            if (overlayText) {
                surveyItem.innerHTML = `
                    <div class="card shadow-sm">
                    <a href="multipurpose.html?surveyKey=${survey.id}" style="text-decoration:none;">
                        <div class="position-relative">
                            <img src="${survey.graphic}" alt="${survey.name}" class="card-img-top">
                            <div class="download-overlay">${overlayText}</div>
                            <div class="see-details-overlay">See Details</div>
                        </div>
                        <div class="card-body survey-details">
                            <div class="row card_title">
                                <h2 class="card-title text-primary" style="vertical-align:center;">${highlightText(survey.name, searchTerm)}</h2>
                            </div>
                            <p class="card-text text-muted">${highlightText(survey.details, searchTerm)}</p>
                            <div class="d-flex justify-content-between button-container mt-4">
                                <a class="btn btn-primary see-details-btn" style="border:0;" href="multipurpose.html?surveyKey=${survey.id}">See Details</a>
                                ${survey.survey_cats === "download" ? `<a class="btn download-btn" style="border:0;" href="https://drive.google.com/uc?export=download&id=${survey.pdf}" download><i class="fa-solid fa-download"></i></a>` : ''}
                            </div>
                        </div>
                    </div>
                `;
            } else {
                surveyItem.innerHTML = 'error!';
            }

            surveyListElement.appendChild(surveyItem);
        });

        renderPaginationControls(surveys.length, page);
    };

    const renderPaginationControls = (totalItems, page) => {
        paginationElement.innerHTML = '';
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        const prevItem = document.createElement('li');
        prevItem.className = `page-item ${page === 1 ? 'disabled' : ''}`;
        prevItem.innerHTML = `<a class="page-link" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>`;
        prevItem.addEventListener('click', () => {
            if (page > 1) {
                currentPage = page - 1;
                filterSurveys(searchInput.value);
            }
        });
        paginationElement.appendChild(prevItem);

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = `page-item ${i === page ? 'active' : ''}`;
            pageItem.innerHTML = `<a class="page-link">${i}</a>`;
            pageItem.addEventListener('click', () => {
                if (i !== page) {
                    currentPage = i;
                    filterSurveys(searchInput.value);
                }
            });
            paginationElement.appendChild(pageItem);
        }

        const nextItem = document.createElement('li');
        nextItem.className = `page-item ${page === totalPages ? 'disabled' : ''}`;
        nextItem.innerHTML = `<a class="page-link" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>`;
        nextItem.addEventListener('click', () => {
            if (page < totalPages) {
                currentPage = page + 1;
                filterSurveys(searchInput.value);
            }
        });
        paginationElement.appendChild(nextItem);
    };

    const filterSurveys = (term) => {
        let filteredSurveys = surveyList.filter(survey =>
            survey.name.toLowerCase().includes(term.toLowerCase()) ||
            survey.details.toLowerCase().includes(term.toLowerCase())
        );
        
        if (availableCheckbox.checked && downloadCheckbox.checked) {
        } else if (availableCheckbox.checked) {
            filteredSurveys = filteredSurveys.filter(survey => survey.survey_cats === 'available');
        } else if (downloadCheckbox.checked) {
            filteredSurveys = filteredSurveys.filter(survey => survey.survey_cats === 'download');
        }
    
        renderSurveys(filteredSurveys, term, currentPage);
    };

    searchButton.addEventListener('click', () => {
        filterSurveys(searchInput.value);
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            filterSurveys(searchInput.value);
        }
    });

    searchInput.addEventListener('input', () => {
        filterSurveys(searchInput.value);
    });

    availableCheckbox.addEventListener('change', () => {
        filterSurveys(searchInput.value);
    });

    downloadCheckbox.addEventListener('change', () => {
        filterSurveys(searchInput.value);
    });

    renderSurveys(surveyList, '', currentPage);
});