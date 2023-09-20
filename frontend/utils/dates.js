// gives you your current date
const today = new Date();
const yyyy = today.getFullYear().toString().substr(-2);
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

export const formattedToday = mm + "/" + dd + "/" + yyyy;
