
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

![To-Do Preview](https://github.com/rvsony761/To_Do_List/blob/ace45b10db82512b2346015396e900600bdd8f71/To%20do%20List%201st.jpg)

![Task Added](https://github.com/rvsony761/To_Do_List/blob/00ed8434315c3907fb6c6a0bf023179454154466/to%20do%20list%202nd.jpg)

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
