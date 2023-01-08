function set_new_colors(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let tab = tabs[0];
        console.log(tab.id);
        const cap_data = {cap_color: document.getElementById("cap-color").value, bg_color: document.getElementById("cap-bg-color").value};
        const message = {pl_type : "caption_update", data: cap_data};
        chrome.tabs.sendMessage(tab.id, message);
      });
}

function download_vid(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let tab = tabs[0];
        console.log(tab.id);
        const message = {pl_type : "download_video", data: null};
        chrome.tabs.sendMessage(tab.id, message);
      });
}

function toggle_pip(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let tab = tabs[0];
        console.log(tab.id);
        const message = {pl_type : "pip_toggle", data: null};
        chrome.tabs.sendMessage(tab.id, message);
      });
    
}

// function get_DOM_info(){
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     let tab = tabs[0];
//     console.log(tab.id);
//     const message = {pl_type : "get_info", data: null};
//     chrome.tabs.sendMessage(tab.id, message, function (response) {
//       console.log(response.cap_color);
//     });
//   });
// }

function check_url(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let tab = tabs[0];
    if (!tab.url.includes("https://leccap.engin.umich.edu/leccap/player/r/")){
      const content = "<h2>Open a UMICH lecture to access lecture tools</h2>"
      document.getElementsByTagName('body')[0].innerHTML = content;
    }
  });
}

check_url();


document.getElementById("set-cap-color-but").addEventListener("click", set_new_colors);

document.getElementById("download_vid").addEventListener("click", download_vid);


document.getElementById("pip_toggle").addEventListener("click", toggle_pip);



