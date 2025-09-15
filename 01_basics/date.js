const newDate=new Date();
console.log(newDate.toLocaleDateString());

console.log(newDate.toLocaleTimeString());

console.log(newDate.toISOString())

console.log(newDate.toDateString())

console.log(newDate.toLocaleString("en-IN",{
    weekday: "long",   // "Sunday"
    year: "numeric",   // "2025"
    month: "long",     // "September"
    day: "numeric",    // "14"
    hour: "2-digit",   // "07"
    minute: "2-digit", // "15"
    second: "2-digit", // "32"
    hour12: true       // 12-hour format
}));

