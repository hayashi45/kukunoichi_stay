document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector("#burgerBG"); 
  const nav = document.querySelector("#nav-list");
  const navLinks = nav.querySelectorAll("a"); // ナビゲーション内の全てのリンクを取得

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active"); // ハンバーガーメニューを閉じる
    });
    
  });
  
});
