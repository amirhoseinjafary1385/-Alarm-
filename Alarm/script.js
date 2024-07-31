// const timerRef = document.querySelector(".current-time");
// const hourInput = document.getElementById("hour-input");
// const minuteInput = document.getElementById("minute-input");
// const activeAlarms = document.querySelector(".alarms-list");
// const setAlarm = document.getElementById("set");
// const clearAllButton = document.querySelector(".clear");
// const alarmSound = new Audio("./alarm.mp3");

// let alarmIndex = 0;
// let alarmsArray = [];
// let initialHour = 0;
// let initialMinute = 0;



// //تابع کمکی برای اضافه کردن صفر پیشوند به مقادیر یک رقمی"
// const appendZero = (value) => (value < 10 ? "0" + value : value);


// // عملکرد نمایش زمان و راه اندازی آلارم ها

// const displayTimer = () => {
//     const date = new Date();
//     const currentTime = date.toLocaleTimeString("en-US", { hour12: false });
//     timerRef.textContent = currentTime;

//     // بررسی کنید که آیا زمان راه اندازی آلارم ها فرا رسیده است

//     alarmsArray.forEach((alarm) => {
//         if (alarm.isActive && alarm.time === currentTime.slice(0, 5)) {
//             alarmSound.play();
//         }
//     });
// };


// //تابعی براای درست کردن صدای زنگ جدید...
// const createAlarm = (hour, minute) => {
//     alarmIndex += 1;
  
//     const alarmObj = {
//         id: `${alarmIndex}_${hour}_${minute}`,
//         time: `${appendZero(hour)}:${appendZero(minute)}`,
//         isActive: false
//     };



// // const createAlarm = (hour, minute) => {
// //     alarmIndex += 1;

// //     // Create an alarm object
// //     const alarmObj = {
// //         id: `${alarmIndex}_${hour}_${minute}`,
// //         time: `${appendZero(hour)}:${appendZero(minute)}`,
// //         isActive: false
// //     };


//     // زنگ هشدار را به آرایه اضافه کنید و نمایش رابط کاربری آن را ایجاد کنید

//     alarmsArray.push(alarmObj);
//     const alarmDiv = document.createElement("div");
//     alarmDiv.className = "alarm";
//     alarmDiv.dataset.id = alarmObj.id;
//     alarmDiv.innerHTML = `<span>${alarmObj.time}</span>`;

//     // یک چک باکس برای فعال/غیرفعال کردن زنگ هشدار ایجاد کنید

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.addEventListener("change", () => toggleAlarm(alarmObj));
//     alarmDiv.appendChild(checkbox);

//     //ساختن دکمه حذف برای زنگ هشدار
//     const deleteButton = document.createElement("button");
//     //FOntAwesome
//     deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
//     deleteButton.className = "deleteButton";
//     deleteButton.addEventListener("click", () => deleteAlarm(alarmObj));
//     alarmDiv.appendChild(deleteButton);

//     //رابط کاربری زنگ هشدار را به لیست هشدارهای فعال اضافه کنید
//     activeAlarms.appendChild(alarmDiv);
// };

// createAlarm(15, 58);

// // عملکرد تغییر وضعیت فعال زنگ هشدار
// const toggleAlarm = (alarm) => {
//     alarm.isActive = !alarm.isActive;
//     if (alarm.isActive) {
//         const currentTime = new Date().toLocaleTimeString("en-US", { hour12: false }).slice(0, 5);
//         if (alarm.time === currentTime) {
//             alarmSound.play();
//         }
//     }else{
//         alarmSound.pause();
//     }
// };

// //تابعی برای حذف این زنک هشدار


// const deleteAlarm = (alarm) => {
//     const index = alarmsArray.indexOf(alarm);
//     if (index > -1) {
//         alarmsArray.splice(index, 1);
//         document.querySelector(`[data-id="${alarm.id}"]`).remove();
//     }
// };
// //----------------------
// // شنونده رویداد برای پاک کردن زنگ هشدار جدید

// clearAllButton.addEventListener("click", () => {
//     alarmsArray = [];
//     activeAlarms.innerHTML = "";
// });

// // شنونده رویداد برای تنظیم کردن زنگ هشدار جدید
// setAlarm.addEventListener("click", () => {

   

//     //مسِله داریم!
//     let hour = parseInt(hourInput.value) || 0;
//     let minute = parseInt(minuteInput.value) || 0;

//     // مقادیر ورودی را تأیید کنید
//     if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
//         alert("Invalid hour or minute. Please enter values within the valid range!");
//         return;
//     }

//     // بررسی کنید که آیا زنگ هشداری با همان زمان وجود دارد یا خیر
//     if (!alarmsArray.some(alarm => alarm.time === `${appendZero(hour)}:${appendZero(minute)}`)) {
//         createAlarm(hour, minute);
//     }
    

//     //ورودی های فیلد را پاک کردن.
//     [hourInput.value, minuteInput.value] = ["", ""];
// });
// // فیلدهای تایمر و ورودی را مقداردهی اولیه کنید

// window.onload = () => {
//     setInterval(displayTimer, 1000);
//     [hourInput.value, minuteInput.value] = ["", ""];
// };





const timerRef = document.querySelector(".current-time");
const hourInput = document.getElementById("hour-input");
const minuteInput = document.getElementById("minute-input");
const activeAlarms = document.querySelector(".alarms-list");
const setAlarm = document.getElementById("set");
const clearAllButton = document.querySelector(".clear");
const alarmSound = new Audio("./1.mp3");

let alarmIndex = 0;
let alarmsArray = [];
let initialHour = 0;
let initialMinute = 0;
// تابع کمکی برای اضافه کردن صفر پیشوند به مقادیر یک رقمی
const appendZero = (value) => (value < 10 ? "0" + value : value);

const displayTimer = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // تبدیل ساعت 24 ساعته به 12 ساعته

    const currentTime = `${appendZero(hours)}:${appendZero(minutes)}:${appendZero(seconds)} ${period}`;
    timerRef.textContent = currentTime;

    alarmsArray.forEach((alarm) => {
        if (alarm.isActive && alarm.time === `${appendZero(hours)}:${appendZero(minutes)} ${period}`) {
            alarmSound.play();
        }
    });
};

// تابع برای درست کردن صدای زنگ جدید
const createAlarm = (hour, minute) => {
    alarmIndex += 1;

    const period = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12; // تبدیل ساعت 24 ساعته به 12 ساعته

    const alarmObj = {
        id: `${alarmIndex}_${hour}_${minute}`,
        time: `${appendZero(formattedHour)}:${appendZero(minute)} ${period}`,
        isActive: false
    };

    alarmsArray.push(alarmObj);
    const alarmDiv = document.createElement("div");
    alarmDiv.className = "alarm";
    alarmDiv.dataset.id = alarmObj.id;
    alarmDiv.innerHTML = `<span>${alarmObj.time}</span>`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => toggleAlarm(alarmObj));
    alarmDiv.appendChild(checkbox);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener("click", () => deleteAlarm(alarmObj));
    alarmDiv.appendChild(deleteButton);

    activeAlarms.appendChild(alarmDiv);
};

createAlarm(7, 30);

createAlarm(9, 0);
createAlarm(10, 0);

// عملکرد تغییر وضعیت فعال زنگ هشدار
const toggleAlarm = (alarm) => {
    alarm.isActive = !alarm.isActive;
    if (alarm.isActive) {
        const currentTime = new Date().toLocaleTimeString("en-US", { hour12: false }).slice(0, 5);
        if (alarm.time === currentTime) {
            alarmSound.play();
        }
    } else {
        alarmSound.pause();
    }
};

// تابع برای حذف زنگ هشدار
const deleteAlarm = (alarm) => {
    const index = alarmsArray.indexOf(alarm);
    if (index > -1) {
        alarmsArray.splice(index, 1);
        document.querySelector(`[data-id="${alarm.id}"]`).remove();
    }
};

// شنونده رویداد برای پاک کردن زنگ هشدار جدید
clearAllButton.addEventListener("click", () => {
    alarmsArray = [];
    activeAlarms.innerHTML = "";
});

// شنونده رویداد برای تنظیم کردن زنگ هشدار جدید
setAlarm.addEventListener("click", () => {
    let hour = parseInt(hourInput.value) || 0;
    let minute = parseInt(minuteInput.value) || 0;

    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
        alert("Invalid hour or minute. Please enter values within the valid range!");
        return;
    }

    if (!alarmsArray.some(alarm => alarm.time === `${appendZero(hour % 12 || 12)}:${appendZero(minute)} ${hour >= 12 ? 'PM' : 'AM'}`)) {
        createAlarm(hour, minute);
    }

    [hourInput.value, minuteInput.value] = ["", ""];
});
  
// فیلدهای تایمر و ورودی را مقداردهی اولیه کنید
window.onload = () => {
    setInterval(displayTimer, 1000);
    [hourInput.value, minuteInput.value] = ["", ""];
};