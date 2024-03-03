
function add_Td() {
    let table = document.querySelector("table"); // Get the table
    const row = document.createElement("tr"); // the the roe
    // for each row create 5 new cells
    for (let i = 0; i < 5; i++) {
        const cell = document.createElement("td");
        row.appendChild(cell); // append the cell to row
    }
    table.appendChild(row); // append the row to the table
    }
function show_modal() {
    // show the modal when clicked Add_btn
    document.getElementById('form01').style.display='block';

// Clicking Add_btn will show and hide the modal when clicked.

//    if (document.getElementById('form01').style.display == 'none') {
    // document.getElementById('form01').style.display='block';
//    } else {
//         document.getElementById('form01').style.display='none';
//    }

}
function close_modal() {
    var modal = document.getElementById('form01');
    //Hide the modal when the span is clicked
    modal.style.display='none';
    // Hide the modal when clicking on anywhere outside of the modal window
     window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
      }
}

function remove_row() {
    
}

