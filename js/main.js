


var nameInput=document.getElementById("name");
var urlInput=document.getElementById("URLInput");
  
var alertulr=document.getElementById("alertURL")

var bookMarks=[];

if( localStorage.getItem("bookmark")!=null ){
     bookMarks= JSON.parse( localStorage.getItem("bookmark")  )
disblay(); 
  }


  function addBook() {
    var book={
    name:nameInput.value,
    url:urlInput.value
    }


    if( validatUrl(book)){
      
        urlInput.classList.remove("is-invalid");
        urlInput.classList.add("is-valid")
        alertulr.classList.remove("alert" , "alert-danger")
        alertulr.classList.add("alert" , "alert-info")
        document.getElementById("alertURL").innerHTML="This is valied , right"
        
        bookMarks.push(book);
    
        localStorage.setItem( "bookmark" , JSON.stringify(bookMarks) )
        disblay();
        clearItems();
    
    }
    else{
    urlInput.classList.add("is-invalid")
    alertulr.classList.add("alert" , "alert-danger")
document.getElementById("alertURL").innerHTML="This is invalied URL , pleas try again"

       alert("URL is valied")
    }
    

}
    
    
    function validatUrl(book){
        var regix = /^https?:\/\//g;
    
     
    if(regix.test(book.url)){
       
       
        return true;
    }
    else{
        return false;
    }


    }


   
// ////////////////////////////////////////////////////////////

function disblay() {

var cartona="";

for(var i=0 ; i<bookMarks.length ; i++ ){
var number=i+1;
cartona+=`
<tr>
<td>${number}</td>
<td>${bookMarks[i].name}</td>
<td> <a href="${bookMarks[i].url}" target="_blank" class="btn btn-primary">Visit</a>
</td>
<td><button onclick="deleteItem(${i})" class="btn btn-danger" >Delete</button>
</td>
</tr>
`
}

document.getElementById("tablebody").innerHTML=cartona;
}

function clearItems(){
    nameInput.value=""
    urlInput.value=""

}


function deleteItem(i){

  bookMarks.splice( i , 1 );
  localStorage.setItem( "bookmark" , JSON.stringify(bookMarks) )

disblay();
}




