const root = "http://localhost:3000"

function calculateFontSize() {
    const dynamicFontContainers = document.getElementsByClassName('dynamicFontSizing');
    console.log('here');
    for(container in dynamicFontContainers){
        const height = container.clientHeight;
        console.log(height);
        //const height = container.clientWidth;
        //container.fontSize = '5px';
    }
};

clks = 0;

function myFunc() {
    clks += 1;
    console.log(clks + " request sent, need some patience young grasshopper");

    //create a http request object
    var xhttp = new XMLHttpRequest();

    //define the call back function and what it does
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            console.log(xhttp.responseText);
            console.log(JSON.parse(xhttp.response).msg);
            console.log(JSON.parse(xhttp.responseText)["num"]);
        }
        else if(this.readyState == 4 && this.status != 200){
            console.log();
        }
    }

    //send the http requrest to the desired url/route on server end to fetch
    //its data then send it proper
    xhttp.open("GET", "testVar", true);
    xhttp.send();
};

function aboutMe() {
    /*
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(xhttp.response);
            document.open();
            document.write(xhttp.response);
            document.close();
        }
        else if(this.readyState == 4) {
            console.log(xhttp.response);
        }
    }

    xhttp.open("GET", "AboutMe", true);
    xhttp.send();
    */

    window.location.assign(root+"/aboutMe");
};

function projects() {
    window.location.assign(root+"/projects");
};

function contact() {
    window.location.assign(root+"/contact");
};

function homepage() {
    window.location.assign(root+"/");
};

/*
window.onload = function() {
    calculateFontSize();
};

document.addEventListener('DOMContentLoaded', function() {
    calculateFontSize();
});

window.onresize = function() {
    calculateFontSize();
};
*/
