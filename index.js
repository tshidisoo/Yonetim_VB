class DatabaseQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.answeredQuestions = new Set();
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
        this.updateScore();
    }

    setupEventListeners() {
        document.getElementById('prev-btn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('submit-btn').addEventListener('click', () => this.submitAnswer());
        document.getElementById('restart-btn').addEventListener('click', () => this.restart());

        // Option click handlers
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', () => {
                if (!this.answeredQuestions.has(this.currentQuestion)) {
                    this.selectOption(option.dataset.option);
                }
            });
        });
    }

    loadQuestion() {
        const question = this.questions[this.currentQuestion];
        document.getElementById('question-text').textContent = question.question;
        document.getElementById('question-counter').textContent = `${this.currentQuestion + 1}/${this.questions.length}`;

        if (question.type === 'multiple-choice') {
            document.getElementById('multiple-choice').style.display = 'block';
            document.getElementById('code-writing').style.display = 'none';
            
            const options = document.querySelectorAll('.option');
            options.forEach((option, index) => {
                option.textContent = question.options[index];
                option.className = 'option';
                
                // Show previous answer if exists
                if (this.userAnswers[this.currentQuestion] === option.dataset.option) {
                    option.classList.add('selected');
                    if (this.answeredQuestions.has(this.currentQuestion)) {
                        if (option.dataset.option === question.correct) {
                            option.classList.add('correct');
                        } else {
                            option.classList.add('incorrect');
                        }
                    }
                }
            });

            // Show feedback if question was answered
            if (this.answeredQuestions.has(this.currentQuestion)) {
                this.showFeedback();
            }
        } else if (question.type === 'code') {
            document.getElementById('multiple-choice').style.display = 'none';
            document.getElementById('code-writing').style.display = 'block';
            document.getElementById('code-input').value = this.userAnswers[this.currentQuestion] || '';
        }

        this.updateNavigation();
    }

    selectOption(selectedOption) {
        const question = this.questions[this.currentQuestion];
        const options = document.querySelectorAll('.option');
        
        options.forEach(option => {
            option.classList.remove('selected');
            if (option.dataset.option === selectedOption) {
                option.classList.add('selected');
            }
        });

        this.userAnswers[this.currentQuestion] = selectedOption;
        this.answeredQuestions.add(this.currentQuestion);

        // Show feedback immediately
        if (selectedOption === question.correct) {
            this.score++;
            this.updateScore();
        }
        this.showFeedback();
    }

    showFeedback() {
        const question = this.questions[this.currentQuestion];
        const options = document.querySelectorAll('.option');
        
        options.forEach(option => {
            if (option.dataset.option === question.correct) {
                option.classList.add('correct');
            } else if (option.dataset.option === this.userAnswers[this.currentQuestion]) {
                option.classList.add('incorrect');
            }
            option.disabled = true;
        });

        // Add feedback message
        let feedbackDiv = document.querySelector('.feedback');
        if (!feedbackDiv) {
            feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'feedback';
            document.getElementById('multiple-choice').appendChild(feedbackDiv);
        }

        const isCorrect = this.userAnswers[this.currentQuestion] === question.correct;
        feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedbackDiv.textContent = isCorrect ? '✓ Doğru!' : '✗ Yanlış! Doğru cevap: ' + question.options[question.correct.charCodeAt(0) - 65];
    }

    updateScore() {
        document.getElementById('score').textContent = `Puan: ${this.score}`;
    }

    calculateScore() {
        const results = {
            correct: this.score,
            wrong: this.answeredQuestions.size - this.score,
            total: this.questions.length,
            percentage: Math.round((this.score / this.questions.length) * 100)
        };
        return results;
    }

    showResults() {
        const results = this.calculateScore();
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('result-section').style.display = 'block';

        const finalScore = document.getElementById('final-score');
        finalScore.innerHTML = `
            <div class="score-display">
                <div class="score-circle">
                    <span>${results.percentage}%</span>
                </div>
                <div class="score-details">
                    <p><strong>Doğru Cevaplar:</strong> ${results.correct}</p>
                    <p><strong>Yanlış Cevaplar:</strong> ${results.wrong}</p>
                    <p><strong>Toplam Puan:</strong> ${results.correct}/${results.total}</p>
                </div>
            </div>
        `;
    }

    restart() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.answeredQuestions.clear();
        
        document.getElementById('result-section').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        
        this.loadQuestion();
        this.updateScore();
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
        this.showResults();
    }

    updateNavigation() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        const restartBtn = document.getElementById('restart-btn');

        prevBtn.disabled = this.currentQuestion === 0;
        
        if (this.currentQuestion === this.questions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
            restartBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
            restartBtn.style.display = 'none';
        }
    }
}

// Initialize the quiz
const quiz = new DatabaseQuiz();
quiz.init();