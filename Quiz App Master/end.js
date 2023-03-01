const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('https://js-quiz-dusky.vercel.app');
};

$('#saveScoreBtn').click(function(e){
    html2canvas(document.getElementById("capture_area")).then(function(canvas) {
        const el = document.createElement("a")
        el.href = canvas.toDataURL("image/jpeg")
        el.download = '토잘알 퀴즈 점수.jpg' //다운로드 할 파일명 설정
        el.click()
    });
});
