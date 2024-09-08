const surveyQuestions = {
    "Kesehatan Masyarakat di Pedesaan": [
        { type: "text", label: "Berapa usia Anda?" },
        { type: "text", label: "Apa wilayah/lokasi Anda?" },
        { type: "text", label: "Apa pendapat Anda tentang fasilitas kesehatan?" },
        { type: "radio", label: "Apakah Anda memiliki akses ke layanan medis?", options: ["Ya", "Tidak"] },
        { type: "checkbox", label: "Masalah kesehatan apa yang pernah Anda alami?", options: ["Diabetes", "Hipertensi", "Penyakit Jantung"] },
        { type: "number", label: "Berapa kali Anda mengunjungi dokter dalam setahun terakhir?" },
        { type: "date", label: "Kapan pemeriksaan medis terakhir Anda?" },
        { type: "text", label: "Apakah Anda merasa ada kekurangan dalam fasilitas kesehatan di daerah Anda?" },
        { type: "radio", label: "Apakah Anda pernah menggunakan layanan telemedicine?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Negara asal anda" },
    ],
    "Kualitas Pendidikan di Sekolah Dasar": [
        { type: "text", label: "Bagaimana Anda menilai kualitas kurikulum di sekolah dasar?" },
        { type: "text", label: "Apakah fasilitas sekolah memadai?" },
        { type: "text", label: "Seberapa puas Anda dengan kepuasan siswa?" },
        { type: "text", label: "Seberapa puas Anda dengan kepuasan orang tua?" },
        { type: "text", label: "Apa pendapat Anda tentang metode pengajaran di sekolah?" },
        { type: "radio", label: "Apakah Anda merasa kurikulum saat ini sesuai dengan kebutuhan siswa?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Negara asal anda" },
    ],
    "Perilaku Konsumen di E-Commerce": [
        { type: "text", label: "Apa kebiasaan belanja Anda di e-commerce?" },
        { type: "text", label: "Produk apa yang sering Anda beli secara online?" },
        { type: "text", label: "Bagaimana pengalaman Anda menggunakan platform e-commerce?" },
        { type: "radio", label: "Apakah Anda lebih suka berbelanja secara online dibandingkan di toko fisik?", options: ["Ya", "Tidak"] },
        { type: "checkbox", label: "Apa alasan utama Anda berbelanja online?", options: ["Harga", "Kemudahan", "Ketersediaan Produk"] },
        { type: "text", label: "Usia Anda" },
    ],
    "Kepuasan Pelanggan terhadap Layanan Transportasi": [
        { type: "text", label: "Bagaimana Anda menilai kenyamanan layanan transportasi?" },
        { type: "text", label: "Seberapa bersih layanan transportasi menurut Anda?" },
        { type: "text", label: "Apakah layanan transportasi dapat diandalkan?" },
        { type: "radio", label: "Apakah Anda merasa tarif transportasi wajar?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa saran Anda untuk meningkatkan kualitas layanan transportasi?" },
        { type: "text", label: "Berapa Usia Anda?" },
    ],
    "Penggunaan Energi di Rumah Tangga": [
        { type: "text", label: "Jenis energi apa yang paling sering Anda gunakan di rumah?" },
        { type: "text", label: "Seberapa efisien penggunaan energi di rumah Anda?" },
        { type: "text", label: "Seberapa sadar Anda tentang lingkungan terkait penggunaan energi?" },
        { type: "radio", label: "Apakah Anda menggunakan energi terbarukan di rumah?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa langkah yang Anda ambil untuk mengurangi konsumsi energi di rumah?" },
        { type: "text", label: "Negara asal anda" },
    ],
    "Dampak Pandemi terhadap Pekerjaan": [
        { type: "text", label: "Bagaimana pandemi COVID-19 mempengaruhi pekerjaan Anda?" },
        { type: "text", label: "Apakah Anda bekerja dari jarak jauh selama pandemi?" },
        { type: "text", label: "Bagaimana pandemi mempengaruhi kesehatan mental Anda?" },
        { type: "radio", label: "Apakah Anda merasa lebih stres selama pandemi?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa yang paling Anda rindukan dari masa pra-pandemi?" },
        { type: "text", label: "Negara asal anda" },
    ],
    "Pengalaman Pengguna Aplikasi Mobile": [
        { type: "text", label: "Bagaimana antarmuka aplikasi mobile menurut Anda?" },
        { type: "text", label: "Fungsionalitas apa yang paling Anda butuhkan dalam aplikasi mobile?" },
        { type: "text", label: "Apa masalah teknis yang Anda hadapi dengan aplikasi mobile?" },
        { type: "radio", label: "Apakah Anda merasa aplikasi mobile ini mudah digunakan?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa fitur tambahan yang Anda inginkan di aplikasi mobile?" },
        { type: "text", label: "Negara asal anda" },
    ],
    "Penerimaan Teknologi Baru di Masyarakat": [
        { type: "text", label: "Seberapa besar penerimaan Anda terhadap teknologi baru?" },
        { type: "text", label: "Manfaat apa yang Anda rasakan dari teknologi baru?" },
        { type: "text", label: "Kendala apa yang Anda hadapi dalam adopsi teknologi baru?" },
        { type: "radio", label: "Apakah Anda merasa nyaman dengan perubahan teknologi?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa teknologi terbaru yang paling Anda minati?" },
        { type: "text", label: "Negara asal anda" },
    ],
    "Dampak Urbanisasi terhadap Lingkungan": [
        { type: "text", label: "Apa dampak urbanisasi terhadap lingkungan sekitar Anda?" },
        { type: "text", label: "Bagaimana polusi di area urban menurut Anda?" },
        { type: "text", label: "Bagaimana perubahan penggunaan lahan mempengaruhi ekosistem lokal?" },
        { type: "radio", label: "Apakah Anda merasa urbanisasi meningkatkan kualitas hidup?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa solusi yang Anda usulkan untuk mengurangi dampak negatif urbanisasi?" },
        { type: "text", label: "Usia anda" },
        { type: "text", label: "Negara asal anda" },
    ],
    "Kesejahteraan Mental Remaja": [
        { type: "text", label: "Apa faktor-faktor stres utama dalam hidup Anda?" },
        { type: "text", label: "Seberapa baik dukungan sosial yang Anda terima?" },
        { type: "text", label: "Apakah Anda memiliki akses yang memadai ke layanan kesehatan mental?" },
        { type: "radio", label: "Apakah Anda merasa layanan kesehatan mental memadai?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa yang Anda lakukan untuk mengatasi stres sehari-hari?" },
        { type: "text", label: "Negara asal anda" },
    ],
    "Kesadaran Keamanan Siber": [
        { type: "text", label: "Seberapa besar kesadaran Anda tentang keamanan siber?" },
        { type: "text", label: "Apa praktik perlindungan data pribadi yang Anda terapkan?" },
        { type: "radio", label: "Apakah Anda merasa cukup aman saat beraktivitas online?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa langkah yang Anda ambil untuk meningkatkan keamanan online Anda?" },
        { type: "text", label: "Usia anda" },
    ],
    "Kualitas Udara di Kawasan Industri": [
        { type: "text", label: "Bagaimana Anda menilai kualitas udara di kawasan industri?" },
        { type: "text", label: "Apa sumber utama polusi udara di kawasan industri?" },
        { type: "text", label: "Bagaimana polusi udara mempengaruhi kesehatan masyarakat?" },
        { type: "radio", label: "Apakah Anda merasa kualitas udara membaik?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa langkah yang Anda lakukan untuk mengurangi polusi udara?" },
        { type: "text", label: "Usia anda" },
    ],
    "Pengaruh Media Sosial terhadap Produktivitas": [
        { type: "text", label: "Apa pengaruh media sosial terhadap produktivitas Anda?" },
        { type: "text", label: "Bagaimana media sosial mempengaruhi kehidupan sehari-hari Anda?" },
        { type: "radio", label: "Apakah media sosial membuat Anda merasa lebih terhubung?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa platform media sosial yang paling sering Anda gunakan?" },
        { type: "text", label: "Usia anda" },
    ],
    "Akses ke Layanan Kesehatan Mental": [
        { type: "text", label: "Seberapa mudah akses Anda ke layanan kesehatan mental?" },
        { type: "text", label: "Apa faktor yang mempengaruhi penggunaan layanan kesehatan mental?" },
        { type: "radio", label: "Apakah Anda merasa akses ke layanan kesehatan mental cukup?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa kendala utama yang Anda hadapi dalam mengakses layanan kesehatan mental?" },
        { type: "text", label: "Usia anda" },
    ],
    "Kesadaran Lingkungan di Sekolah": [
        { type: "text", label: "Seberapa besar kesadaran lingkungan di sekolah Anda?" },
        { type: "text", label: "Apa kegiatan ramah lingkungan yang dilakukan oleh sekolah?" },
        { type: "text", label: "Bagaimana partisipasi siswa dalam program lingkungan?" },
        { type: "radio", label: "Apakah Anda merasa program lingkungan di sekolah efektif?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa saran Anda untuk meningkatkan kesadaran lingkungan di sekolah?" },
        { type: "text", label: "Negara asal anda" },
    ],
    "Perilaku Berbelanja Online selama Musim Liburan": [
        { type: "text", label: "Bagaimana perilaku berbelanja online Anda selama musim liburan?" },
        { type: "text", label: "Apa tren belanja dan pengeluaran Anda selama musim liburan?" },
        { type: "radio", label: "Apakah Anda merasa belanja online lebih praktis dibandingkan belanja langsung?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa yang Anda beli paling sering selama musim liburan?" },
        { type: "text", label: "Negara asal anda" },
    ],
    "Kesetaraan Akses Teknologi di Pedesaan": [
        { type: "text", label: "Bagaimana kesetaraan akses teknologi di daerah pedesaan?" },
        { type: "text", label: "Apa dampak akses teknologi terhadap pendidikan dan ekonomi?" },
        { type: "radio", label: "Apakah Anda merasa teknologi baru dapat diakses oleh semua lapisan masyarakat?", options: ["Ya", "Tidak"] },
        { type: "text", label: "Apa tantangan utama dalam meningkatkan akses teknologi di daerah pedesaan?" },
        { type: "text", label: "Negara asal anda" },
        { type: "text", label: "Usia anda" },
    ]
};

window.onload = function() {
const surveyId = localStorage.getItem('local-item');

if (surveyId) {
    const surveyTitleElement = document.getElementById('surveyTitle');
    const surveyAuthorCreate = document.getElementById('surveyAuthorcreate');

    if (surveyQuestions[surveyId]) {

        const author = localStorage.getItem('local-author');
        const image = localStorage.getItem('local-image');
        const questions = surveyQuestions[surveyId];
        surveyTitleElement.textContent = `Survey ${surveyId.replace(/-/g, ' ')}`;
        surveyTitleElement.classList.add('survey_being_filled_title');
        surveyAuthorCreate.innerHTML = "Created by "+author;

        const background = document.getElementById('survey_display');

        background.style.backgroundImage = `url(${image})`;

        const surveyContainer = document.getElementById('surveyForm');  

        questions.forEach((question) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');

            const labelElement = document.createElement('label');
            labelElement.textContent = question.label;

            if (question.type === 'text' || question.type === 'number' || question.type === 'date') {
                const inputElement = document.createElement('input');
                inputElement.type = question.type;
                inputElement.classList.add('form-control');
                questionElement.appendChild(labelElement);
                questionElement.appendChild(inputElement);
            } else if (question.type === 'radio' || question.type === 'checkbox') {
                const optionsContainer = document.createElement('div');
                optionsContainer.classList.add('options');

                question.options.forEach((option) => {
                    const inputElement = document.createElement('input');
                    inputElement.type = question.type;
                    inputElement.name = question.label;
                    inputElement.value = option;

                    const optionLabel = document.createElement('label');
                    optionLabel.innerHTML = `<input type="${question.type}" name="${question.label}" value="${option}"> <span>${option}</span>`;

                    optionsContainer.appendChild(optionLabel);
                });

                questionElement.appendChild(labelElement);
                questionElement.appendChild(optionsContainer);
            }

            surveyContainer.appendChild(questionElement);
        });

        const submitButtonContainer = document.createElement('div');
        submitButtonContainer.classList.add('form-group', 'text-center', 'mt-4');
        
        const submitHyperlink = document.createElement('a');
        submitHyperlink.href = "library.html";
        const submitButton = document.createElement('button');
        submitButton.type = 'button';
        submitButton.classList.add('btn', 'btn-primary');
        submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Submit';
        
        submitHyperlink.appendChild(submitButton);
        submitButtonContainer.appendChild(submitHyperlink);
        surveyContainer.appendChild(submitButtonContainer);

    } else {
        console.error("Survey data not found for the given survey ID.");
    }
} else {
    console.error("Survey ID not found in localStorage.");
}
};