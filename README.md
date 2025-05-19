
# 📝 To-Do List Web App

A simple and elegant To-Do List built using **HTML**, **Tailwind CSS**, and **JavaScript**. This project allows users to add tasks, mark them as completed with a green check circle, and remove them when no longer needed.

## 🚀 Features

- Add new tasks via input box and "Add now" button.
- Visual circle indicator to mark tasks as done (toggles green when clicked).
- Delete tasks using a red "×" button.
- Responsive design with Tailwind CSS utility classes.
- Scrollable task list with a max height to keep layout tidy.

## 📁 Project Structure

```
project/
│
├── index.html          # Main HTML file for layout and structure
├── script.js           # JavaScript logic for adding, marking, and deleting tasks
└── \src\output.css     # Tailwind CSS file (compiled)
```

## 🛠️ Technologies Used

- **HTML5** – Markup for the layout
- **Tailwind CSS** – For styling (via `output.css`)
- **JavaScript** – For dynamic DOM manipulation and interactivity

## 📷 UI Preview

![Preview](https://imgs.search.brave.com/9frGX_yZ7fz-Z0W--iitzVQJa5-QLOuMvSSENae1qlw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzkyLzAyLzkx/LzM2MF9GXzExOTIw/MjkxNzNfVDNudEVx/YkxjR1pzZjdKNVVm/WHA0TVh0VW9vRXh1/S2QuanBn)

## 💡 How to Run

1. Clone the repository or download the project files.
2. Make sure Tailwind CSS is properly linked via the `output.css` file in `/src`.
3. Open `index.html` in any modern browser.
4. Start adding tasks and managing your To-Do list!

> 💡 Note: Make sure to build Tailwind CSS if you're editing styles. You can generate `output.css` using:
```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

## 🔧 Future Enhancements

- Add local storage support to persist tasks.
- Add categories or priorities.
- Add due date or reminders.

## 📄 License

This project is open-source and free to use.

---

Feel free to customize and build upon it! 🚀
