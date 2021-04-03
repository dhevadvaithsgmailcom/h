studentarray = [];
function submit(){
var displaystudent =[];
for(var i=1;i<=4;i++){
    var nameofthestudent=document.getElementById("name_of_the_student_"+i).value;
    console.log(nameofthestudent);studentarray.push(nameofthestudent);
}
console.log(studentarray);var lengthofarray=studentarray.length;
console.log(lengthofarray);
for (var k=0;k<lengthofarray;k++){
    displaystudent.push("<h4> name - "+studentarray[k]+"</h4>");
    console.log(displaystudent);}
console.log(displaystudent);
document.getElementById("display_name_with_commas").innerHTML=displaystudent;
var removecommas=displaystudent.join(" ");
console.log(removecommas);
document.getElementById("display_name_without_commas").innerHTML=removecommas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){studentarray.sort();
console.log(studentarray);var studentarraysort=[];
console.log(studentarray);var lengthofarray=studentarray.length;
console.log(lengthofarray);
for (var k=0;k<lengthofarray;k++){
    studentarraysort.push("<h4> name - "+studentarray[k]+"</h4>");
    console.log(studentarraysort);}
    var removecommas=studentarraysort.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML=removecommas;}