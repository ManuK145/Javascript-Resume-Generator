//User can click the button and add more work experience fields
function addNewWorkExperienceField(){

    //Using linked lists
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

//User can click the button and add more acedemic qualification fields
function addNewAcedemicQualificationField(){

    //Using linked lists
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

//Take the information filled in "Generate CV" fomr and put it in CV template fields
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
    for(let e of workExperienceArray){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("workExperienceT").innerHTML=str;

    let acedemicQualificationArray= document.getElementsByClassName("acedemicQualificationField");
    let str1="";
    for(let e of acedemicQualificationArray){
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("acedemicQualificationT").innerHTML=str1;

    //Prompts user to select image from system and adds it to CV
    let file=document.getElementById("imgField").files[0];
    console.log(file);
    let reader= new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function(){
        document.getElementById("imgTemplate").src=reader.result;
    }
   


    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}   

//Prints the CV by opening print window.
function printCV(){
   window.print(); 
}