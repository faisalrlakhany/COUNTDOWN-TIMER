# ⏳ Countdown Timer — "Coming Soon" Page

A sleek **launch countdown timer** built with **vanilla HTML, CSS, and JavaScript**. It shows days, hours, minutes, and seconds remaining until a target date, over a full-screen background image with a dark overlay — perfect for "We Are Coming Soon" landing pages.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 Project Type

| | |
|---|---|
| **Category** | Frontend UI component / Landing page |
| **Type** | Static single-page countdown (no routing) |
| **Purpose** | Count down to a product launch, event, or deadline |
| **Dependencies** | None |
| **Build Tools** | None — runs directly in the browser |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (Flexbox, background image, overlay, media queries) |
| Logic | Vanilla JavaScript (`Date`, `setInterval`) |
| Fonts | Google Fonts — Poppins |
| Assets | WebP background image |
| Hosting | Any static host (GitHub Pages, Netlify, Vercel) |

---

## ✨ Features

- 🗓️ **Live countdown** — days, hours, minutes, and seconds
- 🔄 **Updates every second** via `setInterval`
- 🖼️ **Full-screen hero background** with a dark overlay for readability
- 💗 **Pink neon accents** with hover glow effects on the numbers
- 📱 **Fully responsive** — 768px, 480px breakpoints; numbers wrap into a 2×2 grid on mobile
- ⚙️ **Easy to customize** — one constant controls the target date

---

## ⚙️ How It Works

```js
const endDate = "28 Feburary 2026 6:30 PM";

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000; // difference in seconds

  if (diff < 0) return; // stop when the countdown is over

  inputs[0].value = Math.floor(diff / 3600 / 24);      // days
  inputs[1].value = Math.floor(diff / 3600) % 24;      // hours
  inputs[2].value = Math.floor(diff / 60) % 60;        // minutes
  inputs[3].value = Math.floor(diff) % 60;             // seconds
}

clock();
setInterval(clock, 1000);
```

1. The target date is read from the `endDate` constant.
2. The difference between the target and the current time is calculated in seconds.
3. Seconds are converted into days, hours, minutes, and seconds using division and modulo.
4. `setInterval` re-runs the calculation every 1000 ms.

> **Tip:** For reliable cross-browser parsing, use an ISO-style date such as `"2026-02-28T18:30:00"` instead of a long text date, and zero-pad each value with `String(value).padStart(2, "0")` for a cleaner look.

---

## 📁 Project Structure

```
COUNTDOWN-TIMER/
├── index.html                    # Hero layout + timer inputs
├── css/
│   └── custom.css                # Background, overlay, neon styling, breakpoints
├── js/
│   └── app.js                    # Date math + 1-second interval
└── images/
    └── background-image.webp     # Full-screen background
```

---

## 🚀 Getting Started

No installation required.

```bash
git clone https://github.com/faisalrlakhany/COUNTDOWN-TIMER.git
cd COUNTDOWN-TIMER
```

Open `index.html` in your browser (or use VS Code **Live Server**).

**Change the target date:** edit the first line of `js/app.js`:

```js
const endDate = "2026-12-31T23:59:59";
```

---

## 🧠 Concepts Practiced

- JavaScript `Date` arithmetic and time conversion
- `setInterval` for real-time UI updates
- Modulo math to split total seconds into days/hours/minutes/seconds
- CSS background images, overlays, and Flexbox centering
- Responsive layouts with media queries

---

## 👨‍💻 Author

**Faisal Raza Lakhany**
GitHub: [@faisalrlakhany](https://github.com/faisalrlakhany)
