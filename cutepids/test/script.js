const quizData = [
    {
        question: '1 + 1 = ',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'b'
    },
    {
        question: 'Hãy chọn từ đúng:',
        a: 'chính tã',
        b: 'chín tả',
        c: 'chính tả',
        d: 'chín tã',
        correct: 'c'
    },
    {
        question: 'Hãy chọn từ đúng:',
        a: 'xán lạn',
        b: 'sáng lạn',
        c: 'xáng lạng',
        d: 'sáng lạng',
        correct: 'a'
    },
    {
        question: '550 / 2 =',
        a: '225',
        b: 'ai bít',
        c: 'chịu',
        d: '275',
        correct: 'd'
    },
    {
        question: 'A đứng kế B, D đứng giữa A và C, C đang ?',
        a: 'đứng kế D',
        b: 'đứng trên bục giảng',
        c: 'đứng ngồi không yên',
        d: 'đứng kế A',
        correct: 'a'
    },
    {
        question: 'Hãy nhập mật mã:',
        a: '30041975',
        b: '03021930',
        c: '05092019',
        d: '30022002',
        correct: 'c'
    },
    {
        question: 'Cho H2O hòa tan vào nước, hiện tượng gì xảy ra?',
        a: 'Nổ',
        b: 'Kết tủa cầu vồng',
        c: 'Không hiện tượng',
        d: 'Cháy',
        correct: 'c'
    },
    {
        question: 'Con nào hay sai chính tả:',
        a: 'Doraemon',
        b: 'Naruto',
        c: 'Conan',
        d: 'Pink Fuk',
        correct: 'd'
    },
    {
        question: 'Hãy chọn 1 loại gia vị:',
        a: 'Muối',
        b: 'Sugar',
        c: 'Chanh',
        d: 'Tiêu',
        correct: 'b'
    },
    {
        question: 'Món lẩu mà đội tuyển VN thích ăn:',
        a: 'Lẩu cá kèo',
        b: 'Lẩu nướng',
        c: 'Lẩu thái',
        d: 'Lẩu vịt',
        correct: 'c'
    },
    {
        question: 'Hãy chọn loại cô giáo mà bạn muốn',
        a: 'Không sai chính tả',
        b: 'Biết chơi domino',
        c: 'Thương yêu học sinh',
        d: 'Tất cả những ý trên',
        correct: 'd'
    },
    {
        question: 'Ai là Captain?',
        a: 'Steve Rogers',
        b: 'Thanh Thảo',
        c: 'Thanos',
        d: 'chịu',
        correct: 'b'
    },
    {
        question: 'Ai thông minh hơn học sinh lớp 5',
        a: 'Học sinh lớp 6',
        b: 'Giáo viên lớp 5',
        c: 'Kim Mỹ',
        d: 'Con nhà người ta',
        correct: 'c'
    },
    {
        question: 'ABCD + BCDA + CDAB + DABC = 26664, A+B+C+D=',
        a: '21',
        b: '22',
        c: '23',
        d: '24',
        correct: 'd'
    },
    {
        question: 'AA x aa = ',
        a: 'AAaa',
        b: '100%Aa',
        c: 'aa x AA',
        d: 'biết chết liền',
        correct: 'b'
    },
    {
        question: '1+2(3+4)-5*0=',
        a: '0',
        b: '5',
        c: '10',
        d: '15',
        correct: 'd'
    },
    {
        question: 'Ai là đại gia?',
        a: 'Donald Trump',
        b: 'Jeff Bezos',
        c: 'Thúy Vân',
        d: 'Iron man',
        correct: 'c'
    },
    {
        question: 'Điền vào chỗ trống: "Uống nước nhớ ..."',
        a: 'nguồn',
        b: 'lớp',
        c: 'kẻ trồng cây',
        d: 'làm bài tập',
        correct: 'a'
    },
    {
        question: 'Điền vào chỗ trống: "Đắng cay ngọt ..."',
        a: 'ngào',
        b: 'bùi',
        c: 'bu*i',
        d: 'lịm',
        correct: 'b'
    },
    {
        question: 'Công thức tính điện trở',
        a: 'R=U/I',
        b: 'R=UI',
        c: 'R=P/I',
        d: 'R=PI',
        correct: 'a'
    },
    {
        question: 'Công thức tính số mol',
        a: 'n=m.M',
        b: 'n=m+M',
        c: 'n=m-M',
        d: 'n=m/M',
        correct: 'd'
    },
    {
        question: '101110',
        a: '24',
        b: '26',
        c: '46',
        d: '48',
        correct: 'c'
    },
    {
        question: 'Đâu là bài hát nổi tiếng của Sơn Tùng MTP',
        a: 'Hãy trao cho anh',
        b: 'Âm thầm ăn chực',
        c: 'Lạc lối',
        d: 'Cơn mưa xa dần',
        correct: 'a'
    },
    {
        question: '1/1/2019 là thứ ba, 1/1/2020 là thứ mấy',
        a: 'Thứ hai',
        b: 'Thứ ba',
        c: 'Thứ tư',
        d: 'Thứ năm',
        correct: 'c'
    },
    {
        question: 'Which month of the year has the 31th day?',
        a: 'Feb',
        b: 'Apr',
        c: 'Jan',
        d: 'Aug',
        correct: 'd'
    },
    {
        question: 'Con gì ngày nào than hết tiền?',
        a: 'Con bò',
        b: 'Con heo',
        c: 'Con gà',
        d: 'Con đỗ nghèo khỉ',
        correct: 'd'
    },
    {
        question: 'Số tự nhiên nhỏ nhất chia hết cho 10, 20 và 25?',
        a: '50',
        b: '100',
        c: '200',
        d: '250',
        correct: 'b'
    },
    {
        question: 'Có 4 nhóm máu A, B, AB, O. Người có nhóm máu nào có thể tiếp nhận được bất kỳ nhóm máu nào trong số các nhóm máu còn lại.',
        a: 'AB',
        b: 'A',
        c: 'B',
        d: 'O',
        correct: 'a'
    },
    {
        question: 'Mix yellow paint and red paint together. What color do you get?',
        a: 'Orange',
        b: 'Black',
        c: 'Pink',
        d: 'Blue',
        correct: 'a'
    },
    {
        question: 'Từ 1 đến 150 có bao nhiêu chữ số 0?',
        a: '14',
        b: '15',
        c: '16',
        d: '17',
        correct: 'c'
    },
    {
        question: 'Con số đáng thương nhất',
        a: '0',
        b: '1',
        c: '13',
        d: '2002',
        correct: 'd'
    },
    {
        question: 'Cho 6,4g đồng vào trong lọ chứa 100ml HCl 2M, khối lượng đồng đã phản ứng là',
        a: '0g',
        b: '1,6g',
        c: '3,2g',
        d: '6,4g',
        correct: 'a'
    },
    {
        question: 'Môn học nhàn nhất',
        a: 'Toán',
        b: 'Sinh',
        c: 'Lý',
        d: 'Hóa',
        correct: 'b'
    },
    {
        question: 'Nhân vật gắn liền với nón bảo hiểm',
        a: 'Linda',
        b: 'Ninja Lead',
        c: 'Hải Yến',
        d: 'Biker',
        correct: 'c'
    },
    {
        question: 'Cùng chơi nối từ nào: đẹp',
        a: 'đẽ',
        b: 'xinh',
        c: 'trai',
        d: 'gái',
        correct: 'a'
    },
    {
        question: 'Loại tôm ngon nhất là',
        a: 'Tôm sú',
        b: 'Tôm hùm',
        c: 'Tôm tích',
        d: 'Tôm càng xanh',
        correct: 'b'
    },
    {
        question: 'Nước nào nhiều trai nhất',
        a: 'Mý',
        b: 'Pháp',
        c: 'Nga',
        d: 'Anh',
        correct: 'd'
    }
]

let arr = [];
const quizAmount = 10;
const quizLength = quizData.length;
const show = document.getElementById("container");
const answerEls = document.querySelectorAll(".answer");
const quest = document.getElementById("q_text");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const timer = document.getElementById("timer");

let countQuiz = -1;
let currentQuiz = getRandomInt(quizLength);
let score = 0;
const time = 20;

let count;

function loadQuiz()
{
    deselectedAnswers();
    const quiz = quizData[currentQuiz];
    arr[currentQuiz]=true;
    quest.innerHTML = `${countQuiz+1}. ${quiz.question}`;
    a_text.innerHTML = quiz.a;
    b_text.innerHTML = quiz.b;
    c_text.innerHTML = quiz.c;
    d_text.innerHTML = quiz.d;
}

function getSelected()
{
    let ans = undefined;
    answerEls.forEach((answerEl) => 
        {
            if(answerEl.checked)
            {
                ans = answerEl.id;
            }
        });
    
    return ans;
}

function nextQuiz()
{
    countQuiz++;
    if (countQuiz<quizAmount)
    {
        resetTime();
        while (arr[currentQuiz])
        {
            currentQuiz = getRandomInt(quizLength);
        }
        loadQuiz();
    }
    else
    {
        if (score<5)
        {
            show.innerHTML = `<h2 id="endgame">Cảm ơn bạn đã dành thời gian để chơi cái trò chơi xàm xí này. Số điểm bạn đạt được là ${score}/${quizAmount}. Quá tệ hehe :D</h2><button onclick="location.reload();" id="submit">Chơi lại</button>`;
        }else
        {
            show.innerHTML = `<h2 id="endgame">Cảm ơn bạn đã dành thời gian để chơi cái trò chơi xàm xí này. Số điểm bạn đạt được là ${score}/${quizAmount}.</h2><button onclick="location.reload();" id="submit">Chơi lại</button>`;
        }  
    }
}

function deselectedAnswers()
{
    answerEls.forEach((answerEl) =>
    {
        answerEl.checked = false;
    });
}

function getRandomInt(max)
{
    return Math.floor(Math.random() * Math.floor(max));
}

function resetTime()
{
    timer.innerHTML = ``;
    clearInterval(count);
    timeleft = time;
    count = setInterval(() =>
    {
        if (timeleft>0)
        {
            timer.innerHTML = `Thời gian còn lại: ${timeleft}`;
        }else if (timeleft === 0)
        {
			clearInterval(count);
            nextQuiz();
        }
        timeleft--;
    }, 1000);
}

submitBtn.addEventListener("click", () => 
{
    const answer = getSelected();
    if (answer)
    {
        if (countQuiz!=-1)
        {
            if (answer === quizData[currentQuiz].correct) score++;
        }else
        {
            for (let i = 0; i < quizData.length; i++)
            {
                arr[i] = false;
            }
        }
        nextQuiz();
    }
});