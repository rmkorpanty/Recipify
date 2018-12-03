//path used for base parameter
var path = "https://api.edamam.com/search";
//input used for data paramater
var input = {
    "app_id": "e3c7ddcf",
    "app_key": "727de6be546f259943e44a2626184186"
};

//takes the text box text from website
function getInputText(){
    console.log('user typed in the from :' , document.getElementById("inputSearch").value)
    return document.getElementById("inputSearch").value;
}

//adds the text to the input object
function inputUpdate(){
    var stuff = getInputText();
    var final;
    var stuffArray = stuff.split(/[^A-Za-z]/);
    final = stuffArray.join("+");
    input["q"] = final;
}

function buildQueryString(data) {
    inputUpdate();
    var keyValPairs = [];
    var paramKeys = Object.keys(data);
    for (var i=0; i < paramKeys.length; ++i) {
        keyValPairs.push((paramKeys[i]) + "=" + data[paramKeys[i]]);
    }
    return '?' + keyValPairs.join('&');
}

function buildGETRequestURL(base, data) {
    var queryParameters = buildQueryString(data);
    var fullURL = base + queryParameters;
    return fullURL;
}

//uses parsed data from python server to set values for next page variables
function setValues(results){

 //json_avail = JSON.parse(results)
 //console.log('server said ', json_avail)
 //using jquery to replace html tags tex

//sending results to next page
sessionStorage.setItem('user_data', results);
window.location.href = 'results.html';
}
function pythonRequests(data){
  console.log('making python requests')

  var requesting = new XMLHttpRequest();

  console.log('sending data to server: ', data)
  // requesting.send(JSON.stringify(data));
  requesting.onreadystatechange = function handleResponse() {
      if (this.readyState == 4 && this.status == 200) {
        //requests done
      console.log('requesting completed to python')



      setValues(requesting.response)
      //routing to different page after parsing

      }
  }

  requesting.open("POST", 'http://127.0.0.1:5000/syn');
  requesting.send(data);

}


function makeXMLHttpGETRequest(url){
    console.log('making a request to: ', url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function handleResponse() {
        if (this.readyState == 4 && this.status == 200) {
          //requests done
        console.log('requesting completed to Edamame')
        pythonRequests(xhttp.response);
        }
    }
    xhttp.open("GET", url);
    xhttp.send();
}


function doEverything(url, data) {
    var fullURL = buildGETRequestURL(url, data);
    makeXMLHttpGETRequest(fullURL);
}
