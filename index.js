class DatabaseQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.questions = [
            // Çoktan seçmeli sorular (30 adet)
            {
                type: 'multiple-choice',
                question: 'MySQL\'de bir veritabanını yedeklemek için hangi komut kullanılır?',
                options: [
                    'mysql -u kullanici -p',
                    'mysqldump -u kullanici -p',
                    'mysqlbackup -u kullanici -p',
                    'mysqlex -u kullanici -p'
                ],
                correct: 'B'
            },
            {
                type: 'multiple-choice',
                question: 'Aşağıdaki komutlardan hangisi MySQL\'de yedek dosyasını geri yüklemek için kullanılır?',
                options: [
                    'mysqldump -u kullanici -p < yedek.sql',
                    'mysql -u kullanici -p < yedek.sql',
                    'mysqlrestore -u kullanici -p < yedek.sql',
                    'mysqllib -u kullanici -p < yedek.sql'
                ],
                correct: 'B'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de yeni kullanıcı oluşturmak için hangi komut kullanılır?',
                options: [
                    'ADD USER',
                    'NEW USER',
                    'CREATE USER',
                    'INSERT USER'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de bir kullanıcıya tüm yetkileri vermek için hangi komut kullanılır?',
                options: [
                    'GIVE ALL PRIVILEGES',
                    'GRANT ALL PRIVILEGES',
                    'SET ALL PRIVILEGES',
                    'ADD ALL PRIVILEGES'
                ],
                correct: 'B'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de yetki değişikliklerinin hemen devreye girmesi için hangi komut kullanılır?',
                options: [
                    'REFRESH PRIVILEGES',
                    'UPDATE PRIVILEGES',
                    'FLUSH PRIVILEGES',
                    'RELOAD PRIVILEGES'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de kullanıcı silmek için hangi komut kullanılır?',
                options: [
                    'DELETE USER',
                    'REMOVE USER',
                    'DROP USER',
                    'CLEAR USER'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de "%" işareti neyi ifade eder?',
                options: [
                    'Localhost bağlantısı',
                    'Herhangi bir IP adresinden bağlantı',
                    'Sadece güvenli bağlantılar',
                    'Yönetici bağlantıları'
                ],
                correct: 'B'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de bir kullanıcının yetkilerini görmek için hangi komut kullanılır?',
                options: [
                    'VIEW GRANTS',
                    'SHOW GRANTS',
                    'LIST GRANTS',
                    'GET GRANTS'
                ],
                correct: 'B'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de kullanıcıdan yetki geri almak için hangi komut kullanılır?',
                options: [
                    'REMOVE',
                    'DELETE',
                    'REVOKE',
                    'CANCEL'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de SELECT yetkisi neyi sağlar?',
                options: [
                    'Veri ekleme',
                    'Veri silme',
                    'Veri okuma',
                    'Veri güncelleme'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de INSERT yetkisi neyi sağlar?',
                options: [
                    'Veri okuma',
                    'Veri ekleme',
                    'Veri silme',
                    'Tablo oluşturma'
                ],
                correct: 'B'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de UPDATE yetkisi neyi sağlar?',
                options: [
                    'Veri silme',
                    'Veri ekleme',
                    'Veri güncelleme',
                    'Tablo silme'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de DELETE yetkisi neyi sağlar?',
                options: [
                    'Veri silme',
                    'Veri ekleme',
                    'Tablo oluşturma',
                    'Veritabanı oluşturma'
                ],
                correct: 'A'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de DROP yetkisi neyi sağlar?',
                options: [
                    'Veri silme',
                    'Veri ekleme',
                    'Veritabanı/tablo silme',
                    'Kullanıcı oluşturma'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de veritabanı yedeklemek için hangi komut kullanılır?',
                options: [
                    'BACKUP DATABASE',
                    'EXPORT DATABASE',
                    'SAVE DATABASE',
                    'DUMP DATABASE'
                ],
                correct: 'A'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de veritabanı geri yüklemek için hangi komut kullanılır?',
                options: [
                    'IMPORT DATABASE',
                    'LOAD DATABASE',
                    'RESTORE DATABASE',
                    'RECOVER DATABASE'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de kullanıcı eklemenin ilk adımı nedir?',
                options: [
                    'Database User oluşturmak',
                    'Login oluşturmak',
                    'Yetki vermek',
                    'Rol atamak'
                ],
                correct: 'B'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de LOGIN oluşturmak için hangi komut kullanılır?',
                options: [
                    'ADD LOGIN',
                    'NEW LOGIN',
                    'CREATE LOGIN',
                    'INSERT LOGIN'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de veritabanı kullanıcısı oluşturmak için hangi komut kullanılır?',
                options: [
                    'ADD USER',
                    'NEW USER',
                    'CREATE USER',
                    'INSERT USER'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de db_owner rolü neyi sağlar?',
                options: [
                    'Sadece okuma yetkisi',
                    'Sadece yazma yetkisi',
                    'Tüm veritabanı işlemleri',
                    'Sadece tablo oluşturma'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de db_datareader rolü neyi sağlar?',
                options: [
                    'Tüm tabloları okuma yetkisi',
                    'Tüm tablolara yazma yetkisi',
                    'Tablo oluşturma yetkisi',
                    'Kullanıcı yönetimi yetkisi'
                ],
                correct: 'A'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de db_datawriter rolü neyi sağlar?',
                options: [
                    'Tüm tabloları okuma yetkisi',
                    'Tüm tablolara yazma yetkisi',
                    'Tablo silme yetkisi',
                    'Veritabanı yedekleme yetkisi'
                ],
                correct: 'B'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de tablo düzeyinde yetki vermek için hangi komut kullanılır?',
                options: [
                    'GIVE',
                    'GRANT',
                    'ALLOW',
                    'PERMIT'
                ],
                correct: 'B'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de REFERENCES yetkisi neyi sağlar?',
                options: [
                    'Veri okuma',
                    'Veri yazma',
                    'Yabancı anahtar ilişkisi tanımlama',
                    'Tablo silme'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de CONTROL yetkisi neyi sağlar?',
                options: [
                    'Sadece okuma yetkisi',
                    'Sadece yazma yetkisi',
                    'Tüm izinleri kapsar',
                    'Sadece silme yetkisi'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de kullanıcıyı rolden çıkarmak için hangi komut kullanılır?',
                options: [
                    'sp_addrolemember',
                    'sp_droprolemember',
                    'sp_removerolemember',
                    'sp_deleterolemember'
                ],
                correct: 'B'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de tablo düzeyinde yetki iptal etmek için hangi komut kullanılır?',
                options: [
                    'DENY',
                    'CANCEL',
                    'REVOKE',
                    'REMOVE'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de --databases parametresi ne işe yarar?',
                options: [
                    'Tek veritabanı yedekler',
                    'Birden fazla veritabanını yedeklemeye olanak tanır',
                    'Sadece tabloları yedekler',
                    'Kullanıcı bilgilerini yedekler'
                ],
                correct: 'B'
            },
            {
                type: 'multiple-choice',
                question: 'MySQL\'de CREATE yetkisi neyi sağlar?',
                options: [
                    'Veri ekleme',
                    'Veri silme',
                    'Veritabanı ve tablo oluşturma',
                    'Kullanıcı silme'
                ],
                correct: 'C'
            },
            {
                type: 'multiple-choice',
                question: 'MSSQL\'de EXECUTE yetkisi neyi sağlar?',
                options: [
                    'Veri okuma',
                    'Tablo oluşturma',
                    'Saklı yordam veya fonksiyon çalıştırma',
                    'Kullanıcı oluşturma'
                ],
                correct: 'C'
            },
            // Kod yazma soruları (3 adet)
            {
                type: 'code-writing',
                question: 'MySQL\'de "personel" adında bir kullanıcı oluşturun. Şifre "per123" olsun ve herhangi bir IP\'den bağlanabilsin. Sonrasında bu kullanıcıya "sirket" veritabanındaki "calisanlar" tablosunda SELECT ve INSERT yetkisi verin. Değişiklikleri uygulayın.',
                correctAnswer: `CREATE USER 'personel'@'%' IDENTIFIED BY 'per123';
GRANT SELECT, INSERT ON sirket.calisanlar TO 'personel'@'%';
FLUSH PRIVILEGES;`
            },
            {
                type: 'code-writing',
                question: 'MSSQL\'de "yonetici" adında bir login oluşturun (şifre: "Yon123!"). Sonra "SatisDB" veritabanında bu login için kullanıcı oluşturun ve db_datawriter rolünü atayın.',
                correctAnswer: `CREATE LOGIN yonetici WITH PASSWORD = 'Yon123!';
USE SatisDB;
GO
CREATE USER yonetici FOR LOGIN yonetici;
EXEC sp_addrolemember 'db_datawriter', 'yonetici';`
            },
            {
                type: 'code-writing',
                question: 'MySQL\'de "okul" veritabanını "C:\\backup\\okul_yedek.sql" dosyasına yedekleyin. Kullanıcı adı "admin" olsun.',
                correctAnswer: `mysqldump -u admin -p --databases okul > C:\\backup\\okul_yedek.sql`
            }
        ];
        
        this.init();
    }

    init() {
        this.loadQuestion();
        this.setupEventListeners();
    }

    setupEventListeners() {
        const options = document.querySelectorAll('.option');
        const nextBtn = document.getElementById('next-btn');
        const prevBtn = document.getElementById('prev-btn');
        const submitBtn = document.getElementById('submit-btn');
        const restartBtn = document.getElementById('restart-btn');

        options.forEach(option => {
            option.addEventListener('click', () => this.selectOption(option));
        });

        nextBtn.addEventListener('click', () => this.nextQuestion());
        prevBtn.addEventListener('click', () => this.prevQuestion());
        submitBtn.addEventListener('click', () => this.submitAnswer());
        restartBtn.addEventListener('click', () => this.restart());
    }

    loadQuestion() {
        const question = this.questions[this.currentQuestion];
        const questionText = document.getElementById('question-text');
        const multipleChoice = document.getElementById('multiple-choice');
        const codeWriting = document.getElementById('code-writing');
        const questionCounter = document.getElementById('question-counter');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        const prevBtn = document.getElementById('prev-btn');

        questionText.textContent = question.question;
        questionCounter.textContent = `${this.currentQuestion + 1}/${this.questions.length}`;

        if (question.type === 'multiple-choice') {
            multipleChoice.style.display = 'block';
            codeWriting.style.display = 'none';
            
            const options = document.querySelectorAll('.option');
            options.forEach((option, index) => {
                option.textContent = question.options[index];
                option.classList.remove('selected', 'correct', 'incorrect');
                option.disabled = false;
            });
        } else {
            multipleChoice.style.display = 'none';
            codeWriting.style.display = 'block';
            
            const codeInput = document.getElementById('code-input');
            codeInput.value = this.userAnswers[this.currentQuestion] || '';
        }

        // Navigation buttons
        prevBtn.disabled = this.currentQuestion === 0;
        
        if (this.currentQuestion === this.questions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }

    selectOption(selectedOption) {
        const options = document.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        selectedOption.classList.add('selected');
        
        this.userAnswers[this.currentQuestion] = selectedOption.dataset.option;
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.saveCurrentAnswer();
            this.currentQuestion++;
            this.loadQuestion();
        }
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.saveCurrentAnswer();
            this.currentQuestion--;
            this.loadQuestion();
        }
    }

    saveCurrentAnswer() {
        const question = this.questions[this.currentQuestion];
        
        if (question.type === 'code-writing') {
            const codeInput = document.getElementById('code-input');
            this.userAnswers[this.currentQuestion] = codeInput.value;
        }
    }

    submitAnswer() {
        this.saveCurrentAnswer();
        this.calculateScore();
        this.showResults();
    }

    calculateScore() {
        this.score = 0;
        
        this.questions.forEach((question, index) => {
            if (question.type === 'multiple-choice') {
                if (this.userAnswers[index] === question.correct) {
                    this.score++;
                }
            } else {
                // Kod yazma soruları için basit karşılaştırma
                const userAnswer = (this.userAnswers[index] || '').toLowerCase().replace(/\s+/g, ' ').trim();
                const correctAnswer = question.correctAnswer.toLowerCase().replace(/\s+/g, ' ').trim();
                
                if (userAnswer.includes('create user') && userAnswer.includes('grant') && userAnswer.includes('flush privileges') && index === 30) {
                    this.score++;
                } else if (userAnswer.includes('create login') && userAnswer.includes('create user') && userAnswer.includes('sp_addrolemember') && index === 31) {
                    this.score++;
                } else if (userAnswer.includes('mysqldump') && userAnswer.includes('admin') && userAnswer.includes('okul') && index === 32) {
                    this.score++;
                }
            }
        });
    }

    showResults() {
        const quizContainer = document.getElementById('quiz-container');
        const resultSection = document.getElementById('result-section');
        const finalScore = document.getElementById('final-score');
        const detailedResults = document.getElementById('detailed-results');
        const scoreElement = document.getElementById('score');

        quizContainer.style.display = 'none';
        resultSection.style.display = 'block';

        const percentage = Math.round((this.score / this.questions.length) * 100);
        finalScore.textContent = `${this.score}/${this.questions.length} (${percentage}%)`;
        scoreElement.textContent = `Puan: ${this.score}`;

        let resultsHTML = '';
        this.questions.forEach((question, index) => {
            const isCorrect = question.type === 'multiple-choice' 
                ? this.userAnswers[index] === question.correct
                : this.checkCodeAnswer(index);
            
            resultsHTML += `
                <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <strong>Soru ${index + 1}:</strong> ${question.question}<br>
                    <strong>Sizin Cevabınız:</strong> ${this.getUserAnswerText(question, index)}<br>
                    ${question.type === 'multiple-choice' ? `<strong>Doğru Cevap:</strong> ${question.options[question.correct.charCodeAt(0) - 65]}` : `<strong>Örnek Doğru Cevap:</strong> <pre>${question.correctAnswer}</pre>`}
                </div>
            `;
        });

        detailedResults.innerHTML = resultsHTML;
    }

    checkCodeAnswer(index) {
        const userAnswer = (this.userAnswers[index] || '').toLowerCase().replace(/\s+/g, ' ').trim();
        
        switch(index) {
            case 30:
                return userAnswer.includes('create user') && userAnswer.includes('grant') && userAnswer.includes('flush privileges');
            case 31:
                return userAnswer.includes('create login') && userAnswer.includes('create user') && userAnswer.includes('sp_addrolemember');
            case 32:
                return userAnswer.includes('mysqldump') && userAnswer.includes('admin') && userAnswer.includes('okul');
            default:
                return false;
        }
    }

    getUserAnswerText(question, index) {
        if (question.type === 'multiple-choice') {
            const userAnswer = this.userAnswers[index];
            return userAnswer ? question.options[userAnswer.charCodeAt(0) - 65] : 'Cevap verilmedi';
        } else {
            return this.userAnswers[index] || 'Kod yazılmadı';
        }
    }

    restart() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        
        const quizContainer = document.getElementById('quiz-container');
        const resultSection = document.getElementById('result-section');
        const scoreElement = document.getElementById('score');
        
        quizContainer.style.display = 'block';
       resultSection.style.display = 'none';
       scoreElement.textContent = 'Puan: 0';
       
       this.loadQuestion();
   }
}

// Quiz'i başlat
document.addEventListener('DOMContentLoaded', () => {
   new DatabaseQuiz();
});