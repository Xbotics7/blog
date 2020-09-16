let params = (new URL(document.location)).searchParams;
let name = params.get("id");

const elTitle = document.getElementById('elTitle');
const elDate = document.getElementById('elDate');
const elImage = document.getElementById('elPostImage');
const elTopDesc = document.getElementById('elTopDesc');
const elBottomDesc = document.getElementById('elBottomDesc');
const elSummary = document.getElementById('elSummary');

console.log("./assets/post/1.png");
if(name == "1"){
    elTitle.innerHTML = "Nomtes updated with many new Icon, Bookmark support, Videos support and more...";
    elDate.innerHTML = "17 Sep 2020";
    elImage.src = "./assets/post/1.jpg";
    elTopDesc.innerHTML = "Cheems is an Ironic Doge character popular on /r/dogelore. It is known for liking cheeseburgers, which it pronounces \"Cheemsburbger.\" Memes featuring Cheems are usually based upon the character humorously misspelling various words, particularly by including extra M letters.";
    elSummary.innerHTML = "• 'New' Videos for respective subjects are now finally available to watch.<br>\
    • 'New' Bookmark is finally available to use. Bookmark your notes, book, videos for easy access.<br>\
    • 'New' Added Dropdown button in Subjects page where you can quickly access notes, videos, books etc of respective subjects.<br>\
    • ''New'' Added Option to check syllabus.<br>\
    • ''New'' Added Changelog UI.<br>\
    • Re-designed Subject Info Page.<br>\
    • Updated Home Page UI .<br>\
    • Bugs Fixes and Performance Improvements.<br>\
    ";
    elBottomDesc.innerHTML = "New updates are coming in android applications in which there  are many new lectures video selected by topper and teachers.”Bookmark” is now available to pin notes ,book ,etc and now its easier to remember where you left. Accessing notes, books, videos ,etc are easier than before .Redesigned UI for better user interaction and also minor bugs are fixed."

    
}