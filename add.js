
let names=new Array();
let authors=new Array();
let statuss=new Array();







function update(){
    event.preventDefault();
    let status;
    let name=document.getElementById("name").value;
    let author=document.getElementById("author").value;
    document.getElementsByName('stat').forEach(radio=>{
        if(radio.checked){
            status=radio.value;
        }
    });
    names.push(name);
    authors.push(author);
    statuss.push(status);
    
alert("Books Updated")
    
   



     
}
function show(){
   

   document.getElementById("result1").innerHTML=null;
  for(let data=0;data<names.length;data++){

    //console.log(`Number:${data+1};Book name : ${names[data]}, Author : ${authors[data]}, Status: ${statuss[data]}`);
    
    document.getElementById("result1").innerHTML+=` ${data+1} : Book name : ${names[data]} , Author : ${authors[data]} , Status: ${statuss[data]}`+`<BR> <BR>`;
}
//document.getElementById("result1").innerHTML+="<button>POP</button>";



}
function pop(){
    names.pop();
    authors.pop();
    statuss.pop();
}
function shift(){
    names.shift();
    authors.shift();
    statuss.shift();
}
function front(){
    names.unshift(prompt("Enter Book Name"));
    authors.unshift(prompt("Author Name"));
    statuss.unshift(prompt("Status"));


}

   