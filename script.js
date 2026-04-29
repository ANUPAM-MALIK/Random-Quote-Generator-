const btn1=document.getElementById("btn");
const quoteElement=document.getElementById("quote")
const authorE1=document.getElementById("author");
const apiUrl="http://api.quotable.io/random"
async function getquote(){
    try {  
    btn1.innerText="Loading...";
    const response=await fetch(apiUrl);
    const data= await response.json();
    
    const quoteContent=data.content;
    const quoteAuthor=data.author;
    quoteElement.innerText=quoteContent;
    authorE1.innerText= "~ "+ quoteAuthor
    btn1.disabled=false;
    btn1.innerText="Generate a new one";
    btn1.disabled=false;
    
    console.log(data);
        
    } catch (error) {
        console.log(error);
        quoteElement.innerText= "An error happened, try again later";
        authorE1.innerText= "An error happened";
        
    }


}
btn1.addEventListener("click",getquote); 