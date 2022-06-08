
const search = ()=>{

  // WE  have converted to lower case so that there is no  problem when search is applied in capitalixed or uncaitalized or any other case
  var filter =  document.getElementById('searchInput').value.toLowerCase();
  var list= document.getElementsByTagName('li')
  var headings= document.getElementsByTagName('h2')
  var codebox= document.querySelectorAll('.code')



for (let index = 0; index < headings.length; index++) {
  // INNER text of headings
  let innerTextHeadings=headings[index].innerText;

 

// Checking if the searched string is present in the headings.innerText

  if (innerTextHeadings.toLowerCase().indexOf(filter)>-1) {
      //When  string is present the +ve index is 
    list[index].style.display="";
   

  } else {
    // If string is not present then the index is -1
      list[index].style.display="none";
      
  }
 }

 

}





