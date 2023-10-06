let fetchBtn = document.getElementById('fetchBtn'); 
fetchBtn.addEventListener('click', buttonClickHandler); 

function buttonClickHandler() { 
    
    // Instantiate an xhr object 
    var xhr = new XMLHttpRequest(); 
    
    // What to do when response is ready 
    xhr.onreadystatechange = () => { 
        if(xhr.readyState === 4) { 
            if(xhr.status === 200) { 
                document.getElementById("txt").innerHTML = 
                xhr.responseText; 
            } else { 
                console.log('Error Code: ' + xhr.status); 
                console.log('Error Message: ' + xhr.statusText); 
            } 
        } 
    } 
    xhr.open('GET', 'data.php'); 
    
    // Send the request 
    xhr.send(); 
} 