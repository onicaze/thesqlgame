document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const surveyKey = urlParams.get('surveyKey');
    const lessonKey = urlParams.get('lessonKey');
    const reviewMySurvey = localStorage.getItem('review_my_survey');
    const multipurpose = document.getElementById("multipurpose_main");

    if (lessonKey !== null) {
        const lessonName = localStorage.getItem(`lesson_${lessonKey}_name`);
        const lessonDetails = localStorage.getItem(`lesson_${lessonKey}_details`);
        const lessonPdf = localStorage.getItem(`lesson_${lessonKey}_pdf`);

    console.log(lessonName);
    if (lessonName && lessonDetails) {
        multipurpose.innerHTML = `
            <div class="survey-card">
                <div class="row">
                    <div class="col-md-12">
                        <a href="profile.html" id='back' class="btn btn-primary">Back</a>
                    </div>
                </div>
                <div class="row row-1">
                    <div class="col-md-12">
                        <h1 id="lesson-title" class="display-6 mb-2">${lessonName}</h1>
                        <p id="lesson-description" class="mb-4">${lessonDetails}</p>
                    </div>
                </div>
                <div class="row download_button_bar">
                    <div class="col-md-12 button-container">
                        <a id="finish-button" href='profile.html' target="_blank" class="btn btn-primary">Finish Reading</a>
                    </div>
                </div>
            </div>`;
    } else {
        multipurpose.innerHTML = '<p>Lesson details not found.</p>';
    }} else if (surveyKey !== null) {
        const surveyName = localStorage.getItem(`survey_${surveyKey}_name`);
        const surveyDetails = localStorage.getItem(`survey_${surveyKey}_details`);
        const surveyGraphic = localStorage.getItem(`survey_${surveyKey}_graphic`);
        const surveyPdf = localStorage.getItem(`survey_${surveyKey}_pdf`);
        const surveyAuthor = localStorage.getItem(`survey_${surveyKey}_author`);
        const surveyPage = localStorage.getItem(`survey_${surveyKey}_page`);
        const surveyCats = localStorage.getItem(`survey_${surveyKey}_cats`);


        console.log(surveyName);

         if (surveyCats === "download") {
            multipurpose.innerHTML = `
                <div class="survey-card">
                    <div class="row ">
                        <div class="col-md-12">
                            <a href="library.html" id='back' class="btn btn-primary">Back</a>
                        </div>
                    </div>
                    <div class="row row-1">
                        <div class="col-md-3">
                        <img id="survey-image" src="${surveyGraphic}" alt="${surveyName}" class="img-fluid rounded">
                        </div>
                        <div class="col-md-9">
                            <h1 id="survey-title" class="display-6 mb-2">${surveyName}</h1>
                            <p id="author-name" class="mb-4">${surveyAuthor}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-12">
                            <p id="survey-description" class="mb-4">${surveyDetails}</p>
                        </div>
                    </div>
                    <div class="row download_button_bar">
                        <div class="col-md-12">
                        <a id="download-pdf" href='https://drive.google.com/uc?export=download&id=${surveyPdf}' target="_blank" class="btn btn-primary">Download PDF</a>
                        </div>
                    </div>
                    </div>
                </div>`;
        } else if (surveyCats === "available") {

            localStorage.setItem('local-item',surveyName);
            localStorage.setItem('local-author',surveyAuthor);
            localStorage.setItem('local-image',surveyGraphic);
            multipurpose.innerHTML = `
                <div class="survey-card">
                <div class="row ">
                    <div class="col-md-12">
                        <a href="library.html" id='back' class="btn btn-primary">Back</a>
                    </div>
                </div>
                <div class="row row-1">
                    <div class="col-md-3">
                    <img id="survey-image" src="${surveyGraphic}" alt="${surveyName}" class="img-fluid rounded">
                    </div>
                    <div class="col-md-9">
                        <h1 id="survey-title" class="display-6 mb-2">${surveyName}</h1>
                        <p id="author-name" class="mb-4">${surveyAuthor}</p>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-12">
                        <p id="survey-description" class="mb-4">${surveyDetails}</p>
                    </div>
                </div>
                <div class="row download_button_bar ">
                    <div class="col-md-12">
                    <a id="take-survey-btn" href='avsurvey.html' class="btn btn-success">Take Survey</a>
                    </div>
                </div>
                </div>
            </div>`;
        } else {
            multipurpose.innerHTML = '<p>Survey details not found.</p>';
        }
    } else if (reviewMySurvey == 'review_my_survey'){

        const multipurpose = document.getElementById("multipurpose_main");
        const mySurvey = [{
                image : "#",
                name: "Survei: Kepuasan Layanan Publik",
                create_date: "15 Agustus 2024",
                due_date: "15 November 2024",
            },{
                image: "#",
                name: "Survei: Tingkat Kebahagiaan Siswa",
                create_date: "2 September 2023",
                due_date: "2 Desember 2024",
            },{
                image: "#",
                name: "Survei: Perilaku Penggunaan Media Sosial",
                create_date: "20 Juli 2023",
                due_date: "20 Oktober 2024",
            }
        ]

        const selectedSurvey = localStorage.getItem('selectedSurvey');


        multipurpose.innerHTML = selectedSurvey;

        if(selectedSurvey == 'your_survey_2') {
            multipurpose.innerHTML = `
                <div class="survey-card">
                <div class="row">
                    <div class="col-md-12">
                        <a href="profile.html" id="back" class="btn btn-primary">Back</a>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-3">
                        <img id="survey-image" src="#" alt="Survey Image" class="img-fluid rounded">
                    </div>
                    <div class="col-md-9">
                        <div class="row">
                            <h1 id="survey-title" class="display-6 mb-2">${mySurvey[1]['name']}</h1>
                            <p id="author-name" class="mb-4">By You</p>
                        </div>
                        <div class="col-md-4">
                            <p id="create-date"><strong>Dibuat</strong><br> ${mySurvey[1]['create_date']}</p>
                        </div>
                        <div class="col-md-4">
                            <p id="closed-date"><strong>Ditutup</strong><br> 8 September 2023</p>
                        </div>
                        <div class="col-md-4">
                            <p id="due-date"><strong>Submisi Kesimpulan</strong><br></p>
                            <p style="color:green";>SUBMITTED</p>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row" style='object-align:center;justify-content:center;'>
                <h3>Rekapan Jawaban</h3>
                    <div class="col-md-4 pt-2" style="box-shadow:2px 3px 3px rgba(0,0,0,0.2);background-color:#600ab6; color:white;text-align:center;align-items:center; border-radius:5px;width:14rem; margin-right:3rem; margin-bottom:1rem;">
                        <p><strong>Responden</strong><br>178</p>
                    </div>
                    <div class="col-md-4 pt-2" style="box-shadow:2px 3px 3px rgba(0,0,0,0.2);background-color:#600ab6; color:white;text-align:center;align-items:center; border-radius:5px; width:14rem; margin-right:3rem; margin-bottom:1rem;">
                        <p><strong>Jumlah Pertanyaan</strong><br>3</p>
                    </div>
                    <div class="col-md-4 pt-2" style="box-shadow:2px 3px 3px rgba(0,0,0,0.2);background-color:#600ab6; color:white;text-align:center;align-items:center; border-radius:5px; width:14rem; margin-right:3rem; margin-bottom:1rem;">
                        <p><strong>Validasi Jawaban</strong><br>Lokasi dan Umur</p>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <h3>Pertanyaan pada Survei Anda</h3>
                    <div id='pertanyaan_item'>
                        <p><strong>1. Sebagai siswa, bagaimana kenyamanan anda selama di sekolah?</strong><br></p>
                        <p>Mayoritas sebesar 65% menjawab <strong>Sangat Baik</strong></p>
                    </div>
                    <div id='pertanyaan_item'>
                        <p><strong>2. Apa yang menjadi prioritas dalam lingkungan sekolah yang nyaman?</strong><br></p>
                        <p>Jawaban teratas: <strong>Fasilitas dan kurikulum/materi pelajaran yang memadai.</strong></p>
                    </div>
                    <div id='pertanyaan_item'>
                        <p><strong>3. Apakah nilai anda pada rapot akhir mendapatkan nilai bagus?</strong><br></p>
                        <p>Mayoritas 84% menjawab <strong>Iya</strong></p>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-12">
                        <div class="progress">
                            <div id="progress-bar" class="progress-bar progress-bar-custom" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-12 button-container">
                        <button id="download-pdf" class="btn btn-primary btn-submit-pdf " style='border:none;'>Lihat Laporan Anda</button>
                    </div>
                </div>
                </div>`;
        } else if(selectedSurvey == 'your_survey_1'){
            multipurpose.innerHTML = `
            <div class="survey-card">
            <div class="row">
                <div class="col-md-12">
                    <a href="profile.html" id="back" class="btn btn-primary">Back</a>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-3">
                    <img id="survey-image" src="#" alt="Survey Image" class="img-fluid rounded">
                </div>
                <div class="col-md-9">
                    <div class="row">
                        <h1 id="survey-title" class="display-6 mb-2">${mySurvey[0]['name']}</h1>
                        <p id="author-name" class="mb-4">By You</p>
                    </div>
                    <div class="col-md-4">
                        <p id="create-date"><strong>Dibuat</strong><br> ${mySurvey[0]['create_date']}</p>
                    </div>
                    <div class="col-md-4">
                        <p id="closed-date"><strong>Ditutup</strong><br> 15 September 2024</p>
                    </div>
                    <div class="col-md-4">
                        <p id="due-date"><strong>Submisi Kesimpulan</strong><br> ${mySurvey[0]['due_date']}</p>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row" style='object-align:center;justify-content:center;'>
            <h3>Rekapan Jawaban Sementara</h3>
                <div class="col-md-4 pt-2" style="box-shadow:2px 3px 3px rgba(0,0,0,0.2);background-color:#600ab6; color:white;text-align:center;align-items:center; border-radius:5px;width:14rem; margin-right:3rem;margin-bottom:1rem;">
                    <p><strong>Responden</strong><br>54</p>
                </div>
                <div class="col-md-4 pt-2" style="box-shadow:2px 3px 3px rgba(0,0,0,0.2);background-color:#600ab6; color:white;text-align:center;align-items:center; border-radius:5px; width:14rem; margin-right:3rem;margin-bottom:1rem;">
                    <p><strong>Jumlah Pertanyaan</strong><br>2</p>
                </div>
                <div class="col-md-4 pt-2" style="box-shadow:2px 3px 3px rgba(0,0,0,0.2);background-color:#600ab6; color:white;text-align:center;align-items:center; border-radius:5px; width:14rem; margin-right:3rem;margin-bottom:1rem;">
                    <p><strong>Validasi Jawaban</strong><br>Lokasi</p>
                </div>
            </div>
            <hr>
            <div class="row">
                <h3>Pertanyaan pada Survei Anda</h3>
                <div id='pertanyaan_item'>
                    <p><strong>1. Bagaimana layanan publik di daerah anda?</strong><br></p>
                    <p>Mayoritas sebesar 72% menjawab <strong>3: Baik</strong></p>
                </div>
                <div id='pertanyaan_item'>
                    <p><strong>2. Saran untuk memperbaiki layanan publik di daerah anda?</strong><br></p>
                    <p>Jawaban terbaru: <strong> Memberikan layanan akses digital untuk masyarakat</strong></p>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-12">
                    <div class="progress">
                        <div id="progress-bar" class="progress-bar progress-bar-custom" role="progressbar" style="width: 30%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-12 button-container">
                    <button id="submit-pdf-btn" class="btn btn-danger btn-submit-pdf ">Submit PDF</button>
                </div>
            </div>
            </div>`
    }}
});
