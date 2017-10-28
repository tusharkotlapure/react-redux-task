export function getCookie(w){
  let cName = "";
  let pCOOKIES = [];
  pCOOKIES = document.cookie.split('; ');
  for(let bb = 0; bb < pCOOKIES.length; bb++){
    let NmeVal = [];
    NmeVal = pCOOKIES[bb].split('=');
    if(NmeVal[0] === w){
      cName = unescape(NmeVal[1]);
    }
  }
  return cName;
}

export function printCookies(w){
  let cStr = "";
  let pCOOKIES = [];
  pCOOKIES = document.cookie.split('; ');
  for(let bb = 0; bb < pCOOKIES.length; bb++){
    let NmeVal = [];
    NmeVal = pCOOKIES[bb].split('=');
    if(NmeVal[0]){
      cStr += NmeVal[0] + '=' + unescape(NmeVal[1]) + '; ';
    }
  }
  return cStr;
}

export function setCookie(name, value, expires, path, domain, secure){
  let cookieStr = name + "=" + escape(value) + "; ";

  if(expires){
    cookieStr += "expires=" + expires + "; ";
  }
  if(path){
    cookieStr += "path=" + path + "; ";
  }
  if(domain){
    cookieStr += "domain=" + domain + "; ";
  }
  if(secure){
    cookieStr += "secure; ";
  }

  document.cookie = cookieStr;
}


// Retrieve locally save data
export function getLocalData(label) {
	if(label && localStorage[label]) {
			return JSON.parse(localStorage[label]);
	} else {
			return '';
	}
}

// Store data locally
export function storeLocally(label, data) {
  let localData = getLocalData(label);

  // Check if parameters are provided
	if(label && data !== null && typeof data === 'object') {

    // Check if the localStorage  alread
    if(localData) {

      for (let prop in data) {
        localData[prop] = data[prop];
      }

      localStorage.setItem(label, JSON.stringify(localData));

    } else {
      localStorage.setItem(label, JSON.stringify(data));
    }

	}
}
