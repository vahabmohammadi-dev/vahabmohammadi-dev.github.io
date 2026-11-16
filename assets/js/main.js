 (function () {
    var email = "vahabmohammadi.dev@gmail.com";
    var status = document.getElementById("status");
    document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("copy").addEventListener("click", function () {
      function done(ok) { status.textContent = ok ? "Email address copied" : "Copy failed. Select the address above and copy it."; }
      try {
        navigator.clipboard.writeText(email).then(function () { done(true); }, function () { done(false); });
      } catch (e) { done(false); }
    });

    document.getElementById("print").addEventListener("click", function () {
      try { window.print(); } catch (e) { status.textContent = "Use your browser's Print command and choose Save as PDF."; }
    });
   // NEW: انتخاب دکمه تغییر تم
var themeToggle = document.getElementById("themeToggle");

// NEW: خواندن تم ذخیره شده
var savedTheme = localStorage.getItem("theme");

// NEW: تنظیم تم اولیه (پیش‌فرض تاریک)
var currentTheme = savedTheme || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);

// NEW: تنظیم متن دکمه
function updateThemeButton() {
    themeToggle.querySelector("#themeIcon").textContent =
        currentTheme === "dark" ? "☀️" : "🌙";

    themeToggle.querySelector("#themeText").textContent =
        currentTheme === "dark" ? "Light Mode" : "Dark Mode";
}

// NEW: تغییر تم با کلیک
themeToggle.addEventListener("click", function () {
    currentTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", currentTheme);

    // NEW: ذخیره انتخاب کاربر
    localStorage.setItem("theme", currentTheme);

    updateThemeButton();
});
  })();