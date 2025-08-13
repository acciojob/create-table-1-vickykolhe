function insert_Row() {
    //Write your code here
	let tab=document.getElementById("sampleTable");
	 let newRow = tab.insertRow(0); 

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
  
  
}
