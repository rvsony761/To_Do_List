// // Get the input field
// const input = document.getElementById("taskInput");

// // Add check toggle to circles
// document.querySelectorAll(".check-circle").forEach(circle => {
//   circle.addEventListener("click", () => {
//     circle.classList.toggle("bg-green-500"); // fill the circle
//   });
// });

// // Optional: Add task on button click
// function addTask() {
//   if (input.value.trim() === "") return;

//   const ul = document.querySelector("ul");

//   const li = document.createElement("li");
//   li.className = "flex items-center space-x-2";

//   const circle = document.createElement("div");
//   circle.className = "h-3 w-3 border-2 border-gray-400 rounded-full flex items-center justify-center check-circle ml-5";
//   circle.addEventListener("click", () => {
//     circle.classList.toggle("bg-green-500");
//   });

//   const span = document.createElement("span");
//   span.textContent = input.value;

//   li.appendChild(circle);
//   li.appendChild(span);
//   ul.appendChild(li);

//   input.value = "";
// }

const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container")
function addTask()
{
    if(inputbox.value.trim()==='')
    {
        alert("Please Enter a task");
        return;
    }
    else
    {   
       // We are creating the Css here For new List that will created by Add now button
       const ul=document.querySelector('ul');
       const li=document.createElement('li');
       li.className="flex items-center space-x-2"

       //To create a Circle 
       const circle=document.createElement('div');
       circle.className="h-4 w-4 border-2 border-gray-400 rounded-full flex items-center justify-center check-circle ml-5";
       
       //Add check toggle to circles
       document.querySelectorAll(".check-circle").forEach(circle => {
         circle.addEventListener("click", () => {
           circle.classList.toggle("bg-green-500"); // fill the circle
         });
       });

       circle.addEventListener("click", () => {
         circle.classList.toggle("bg-green-500");
        });
       // to show to text
       const span=document.createElement("span");
       span.textContent=inputbox.value;
       li.appendChild(circle);
       li.appendChild(span);
       ul.appendChild(li);

       let cross = document.createElement("span");
       cross.className = " mr-10 text-red-500 cursor-pointer font-bold hover:text-red-700 ";
       cross.innerText = "\u00d7"; // Unicode for ×
       li.appendChild(cross);
       cross.addEventListener("click", () => {
           li.remove();
       });
       inputbox.value="";

    }
}