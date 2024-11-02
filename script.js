☐ let score = 0;
let totalScore = 0;
let energy = 0;
let level = 1;
let referrals = 0;
const maxEnergy = 2000;

// احفظ النقاط والبيانات في المتصفح
function saveGame() {
    localStorage.setItem("score", score);
    localStorage.setItem("totalScore", totalScore);
    localStorage.setItem("level", level);
    localStorage.setItem("referrals", referrals);
}

function loadGame() {
    score = parseInt(localStorage.getItem("score")) || 0;
    totalScore = parseInt(localStorage.getItem("totalScore")) || 0;
    level = parseInt(localStorage.getItem("level")) || 1;
    referrals = parseInt(localStorage.getItem("referrals")) || 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("score").innerText = score;
    document.getElementById("total-score").innerText = totalScore;
    document.getElementById("level").innerText = level;
    document.getElementById("referrals").innerText = referrals;

    // تحديث شريط الطاقة
    const energyPercentage = (energy / maxEnergy) * 100;
    document.querySelector(".energy-progress").style.width = `${energyPercentage}%`;
}

function earnPoints() {
    let pointsPerClick = 1;
    if (score >= 5000) {
        pointsPerClick = 5;
    } else if (score >= 1000) {
        pointsPerClick = 2;
    }
    score += pointsPerClick;
    totalScore += pointsPerClick;
    energy += 50;

    // التحقق من المستوى
    level = Math.floor(totalScore / 2000) + 1;

    saveGame();
    updateDisplay();
}

function goToEarnPage() {
    window.location.href = "earn.html"; // صفحة المهام
}

function connectWallet() {
    alert("Please connect your Telegram wallet!");
}

function getReferralCode() {
    alert("Your referral code is: EXC" + totalScore.toString().padStart(5, '0'));
}

function addReferral() {
    referrals += 1;
    score += 500;
    totalScore += 500;
    saveGame();
    updateDisplay();
}

// تحميل البيانات عند بدء اللعبة
loadGame();

// اضف حدث النقر على الصورة
document.getElementById("click-image").addEventListener("click", earnPoints);
