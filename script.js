function addNewWorkExperienceField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workExperienceField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");

    let workExperienceOb = document.getElementById("workExperience");
    let workExperienceAddButtonOb=document.getElementById("workExperienceAddButton");    
    workExperienceOb.insertBefore(newNode, workExperienceAddButtonOb);

}

function addNewAcedemicQualificationField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("acedemicQualificationField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");

    let acedemicQualificationOb = document.getElementById("acedemicQualification");
    let acedemicQualificationAddButtonOb=document.getElementById("acedemicQualificationAddButton");    
    acedemicQualificationOb.insertBefore(newNode, acedemicQualificationAddButtonOb);

}

function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    let workExperienceArray= document.getElementsByClassName("workExperienceField");
    let str="";
    for(let i of workExperienceArray){
        str = str + `<li> ${i.value}</li>`;
    }
    document.getElementById("workExperienceT").innerHTML=str;

    let acedemicQualificationArray= document.getElementsByClassName("acedemicQualificationField");
    let str1="";
    for(let i of acedemicQualificationArray){
        str1 = str1 + `<li> ${i.value}</li>`;
    }
    document.getElementById("acedemicQualificationT").innerHTML=str1;

    document.getElementById("cv-form").style.display='none';
    
}   


function printCV(){
   window.print(); 
}