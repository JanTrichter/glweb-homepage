// Create the request object
let req = new XMLHttpRequest();

// listen for state changes on the object
req.onreadystatechange = () => {
    if(req.status == 200 && req.readyState == 4) {
        // get the dom element where the text is inserted
        const answerElement = document.querySelector('#request');
        answerElement.innerText = req.responseText;
        console.log(req.responseText + req.responseType);
    }
}

const request = () => {
    // req.open('POST', 'https://lern.es/glweb/AJAX/ajax36.php/', true);
    // req.withCredentials = true;
    // // req.setRequestHeader('Authorization', 'Basic ' + btoa('student:JavaScript'));
    // req.send();
    fetch('https://lern.es/glweb/AJAX/ajax36.php/', {
        method: 'POST',
        credentials: 'include', 
        headers: new Headers({
            'Authorization': `Basic ${btoa('student:JavaScript')}`,
            'Access-Control-Allow-Origin': 'lern.es'
        })
    })
    .then(response => console.log(response))
    .then(data => console.log(data));
    console.log('test');
}