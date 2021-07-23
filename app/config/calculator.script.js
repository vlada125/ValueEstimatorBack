let companyKey = document.currentScript.getAttribute('key');
let identify = companyKey.split('-')[1]
let width = "320px";
let allow = false;

let xhr = new XMLHttpRequest();

xhr.open('GET', `https://arvioliidi.com/api/get-popup-text/${identify}`, true);
// xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://test-postgres-testging.herokuapp.com');

// xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// xhr.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// xhr.setRequestHeader('Access-Control-Allow-Credentials', true);
xhr.send(identify);
xhr.onreadystatechange = processRequest;

function processRequest(e)
{
  if (xhr.readyState == 4 && xhr.status == 200)
  {
    let response = JSON.parse(xhr.responseText);
    if (response.data)
    {
      allow = true;
      const { popupText, popupCol } = response.data;
      if (popupText)
      {
        showButton.innerHTML = popupText;
      }
      if (popupCol)
      {
        showButton.style.backgroundColor = popupCol;
      }
    } else {
      showButton.style.display = "none";
    }
  }
}

let body = document.getElementsByTagName('body')[0];
let sideDiv = document.createElement('div');
sideDiv.setAttribute("id", "side_div");
sideDiv.style.cssText = `
  display: block;
  position: fixed;
  visibility: hidden;
  inset: auto 10px 250px auto;
  z-index: 2147483647;

  transition: opacity 1s;
  width: 45px !important;
  height: 160px !important;
  border-radius: 12px;
  opacity: 0;
`;


let showDiv = document.createElement('div');
showDiv.style.cssText = `
  width: 100%;
  height: 100%;
  position: relative;
`;

let iframe = document.createElement('iframe');
iframe.src = `https://arvioliidi.com/${companyKey}`;
iframe.allowtransparency = "true";
iframe.style.cssText = `
  width: 100%;
  height: 100%;
  background: none transparent;
  border-radius: 12px;
  border: none;
  visibility: hidden;
`;
let showButton = document.createElement('div');
  
  showButton.innerHTML = "Value Estimator";
  
  showButton.style.cssText = `
    position: absolute;
    top: 0;
    right: -70px;
    border: none;
    color: #fff;
    background: #000000;
    text-align: center;
    width: 45px;
    height: 160px;
    box-shadow: 0px 1px 5px 1px grey;
    border-radius: 5px 5px 0 0;
    cursor: pointer;
    overflow: hidden;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    width: 160px;
    height: 45px;
    margin-left: -58px;
    margin-top: 57px;
    text-align: center;
    font-size: 17px;
    font-family: FuturaStd;
    line-height: 45px;
  }
  `;

let closeButton = document.createElement('div');
closeButton.innerHTML = "✕";

closeButton.style.cssText = `
  position: absolute;
  border: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  top: 5px;
  right: 10px;
  color: rgb(255, 255, 255);
  background-color: red;
  font-size: 12px;
  display: none;
  cursor: pointer;
`;

closeButton.onclick = function (evt) {
  closeButton.style.display = "none";
  
  showButton.style.display = "block";

  iframe.style.visibility = 'hidden';

  sideDiv.style.cssText = `
    display: block;
    position: fixed;
    inset: auto 10px 250px auto;
    z-index: 2147483647;
    width: 45px !important;
    height: 160px !important;
    border-radius: 12px;
  `;
}

showButton.onclick = function (evt) {
  closeButton.style.display = "flex";
  
  showButton.style.display = "none";
  sideDiv.style.cssText = `
    display: block;
    position: fixed;
    inset: auto 10px 10px auto;
    z-index: 2147483647;
    transition: all 0.5s;
    width: ${width};
    height: 675px;
    border-radius: 12px;
    box-shadow: 1px 0px 5px rgb(2 2 2 / 63%);
    background: white;
    overflow: hidden;
    opacity: 1;
  `;
  
  iframe.style.visibility = 'visible';
}

window.onresize = function (e) {
  if (window.innerWidth < 400) {
    width = "100%"
  } else {
    width = "320px"
  }
  sideDiv.style.width = width;
}

sideDiv.appendChild(showDiv);
showDiv.appendChild(iframe);
showDiv.appendChild(showButton);
showDiv.appendChild(closeButton);
body.appendChild(sideDiv);

iframe.onload = function () {
  setTimeout(() => {
    sideDiv.style.visibility = 'visible';
    sideDiv.style.opacity = '1';
  }, 1000);
};

