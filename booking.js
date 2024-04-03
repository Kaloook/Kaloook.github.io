const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
console.log(page1);
console.log(page2);
console.log(page3);
console.log(page4);
const ProgressBar = document.querySelector("progress");

const summaryName = document.getElementById("summary-name");
const summaryTime= document.getElementById("sumarry-time");
const summaryPeople = document.getElementById("summary-people");
const summaryemail = document.getElementById("summary-email");

const formData = document.getElementById("collected-data");


function showPage(pageNumber){
    switch(pageNumber){
        case 1: 
            page1.style.display ='block';
            page2.style.display ='none';
            page3.style.display ='none';
            page4.style.display ='none';
            ProgressBar.value=10;
            break;

        case 2:   
            page1.style.display ='none';
            page2.style.display ='block';
            page3.style.display ='none';
            page4.style.display ='none';
            ProgressBar.value=25;
        break;
        
        case 3:   
            page1.style.display ='none';
            page2.style.display ='none';
            page3.style.display ='block';
            page4.style.display ='none';
            ProgressBar.value=50;
            break;
        case 4:  
        page1.style.display ='none';
        page2.style.display ='none';
        page3.style.display ='none';
        page4.style.display ='block'
        updateSummary();
        break;
        default : 
            break;
    } 
}

function getFormData(){
    const  Fname = document.getElementById("first-name").value;
    const  lname = document.getElementById("last-name").value;

    const  vEmail = document.getElementById("Email").value;
    const  vtime = document.getElementById("when").value;
    const  vpeople = document.getElementById("people").value;

    return data ={
        name: Fname + " "+ lname,
        email: vEmail,
        time:vtime,
        people:vpeople
    };
  }
function updateSummary(){
    const data =getFormData();

    summaryName.innerHTML=data.name;
    summaryemail.innerHTML=data.email;
    summaryPeople.innerHTML=data.people;
    summaryTime.innerHTML=data.time;

}


function submitData(){

    const data =getFormData();
    const dataRow=document.createElement("tr");
    const cellname=document.createElement("td");
    const celltime=document.createElement("td");
    const cellEmail=document.createElement("td");
    const cellpeople=document.createElement("td");
    
    dataRow.appendChild(cellname);
    dataRow.appendChild(celltime);
    dataRow.appendChild(cellEmail);
    dataRow.appendChild(cellpeople);



    cellname.innerHTML=data.name;
    celltime.innerHTML=data.time;
    cellEmail.linnerHTML=data.email;
    cellpeople.innerHTML=data.people;
    
    formData.appendChild(dataRow);


}



function adReplay(){
    let ad =document.getElementById("miter10ad");
    let copy = ad.cloneNode(true);
    ad.replaceWith(copy);
}


