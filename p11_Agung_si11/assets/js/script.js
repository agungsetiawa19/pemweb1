// menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a)  =>
  // Jika diklik akan menjalankan fungsi computerChoice
  a.addEventListener("click", (element) => {
    computerChoice(element);
  })
);
  function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap elemt result dengan queryselector untuk menampung
    // nilai hasil dari gema
    let pilihanComputer = document.querySelector("#result")

    // memuat array untuk komputer
    let choices = ["rock","paper","Scissors"];

    // pilihan random untuk komputer
    pilihanComputer.innerHTML = 
    choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    // Jika pilihan komputer sama dengan pilihan user (Draw)
    if (pilihanUser == pilihanComputer) {
        alert("Draw");
    }

    // Jika pilihan user yang menang 
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("You Win");
    }else if (pilihanUser == "paper" && pilihanComputer == "Rock") {
        alert("You Win");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "paper") {
        alert("You Win");
    }

    // Jika pilihan komputer yang menang 
    if (pilihanUser == "Rock" && pilihanComputer == "paper") {
        alert("You Win");
    }else if (pilihanUser == "paper" && pilihanComputer == "Scissors") {
        alert("You Win");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Rock") {
        alert("You Win");
    }
  }