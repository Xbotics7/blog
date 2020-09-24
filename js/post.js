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
    elTitle.innerHTML = "Nomtes updated with new Icon, Bookmark support, Videos support and more...";
    elDate.innerHTML = "17 Sep 2020";
    elImage.src = "./assets/post/1.jpg";
    elTopDesc.innerHTML = "In August this year we launched our first android application “NOMTES”, all in one notes app for BCA students which are in ipu college where they can easily access quality notes, books, syllabus, Question paper, lectures videos of all subjects.<br><br>\
    We have been working hard since then to continuously improve the app. Nomtes didn’t had all the features we planned for in the first version and therefore, we are very excited to announce the new update which includes all the features missing in the first version and more. There are new features, updated UI and more in this update. It is more beautiful, powerful and fast than before.<br><br>\
    Here’s a quick list of some of the changes which we have made in the new update.\
";
    elSummary.innerHTML = "• 'New' A brand new Re-designed Nomtes App Icon.<br>\
    • 'New' Videos for respective subjects are now finally available to use. Watch different lectures videos of subjects within app easily.<br>\
    • 'New' Bookmark is finally available to use. Bookmark your notes, book, videos for easy access.<br>\
    • 'New' Added Dropdown button in Subjects page where you can quickly access notes, videos, books etc of respective subjects.<br>\
    • ''New'' Added Option to check syllabus.<br>\
    • ''New'' Added Changelog UI.<br>\
    • Re-designed Subject Info Page.<br>\
    • Updated Home Page UI .<br>\
    • Bugs Fixes and Performance Improvements.<br>\
    ";
    
    elBottomDesc.innerHTML= "There’s a link right below where you can download and install the latest update.<br>\
    Let us know what do you think of the update. Any kind of feedback is very much appreciated. .<br>\
    There’s more to come soon. So, Stay Tuned! .<br><br>\
    Thank you very much!\
    ";
    
}