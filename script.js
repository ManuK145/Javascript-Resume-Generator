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
}