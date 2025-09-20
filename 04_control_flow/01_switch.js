

const month = "Feb";

//let's understand switch case with working

switch (month.toLowerCase()) {
    case "jan":
        console.log("Janaury");
        break;
    case "feb":
        console.log("February");
        //break;         //If we don't use break after specific case execute then all other cases will execute only left is default case
        //It's called fall through behaviour
    case "mar":
        console.log("March");
        break
    default:
        console.log("Enter valid month");
        break;
}