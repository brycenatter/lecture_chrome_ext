function open_vid_for_download(){
    let vid_url = document.getElementById('tempvideoid').src;
    window.open(vid_url, "_blank");
}
function update_cap_colors(text_color, bg_color){
    if(!document.getElementById("captions")){
        alert("Enable Clossed Captions");
        
    }
    else{
        document.getElementById("captions").style.background = bg_color;
        document.getElementById("captions").style.color = text_color;
    }
    
}

function set_font_size(size){
    document.getElementById('captions').style.fontSize = size;
}

function pip_toggle() {
    let video = document.getElementById("tempvideoid");
    if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
    }
    else if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
      } 
}







chrome.runtime.onMessage.addListener(gotMessage)
function gotMessage (message, sender, sendResponse) {
    if(message.pl_type == "caption_update"){
        update_cap_colors(message.data.cap_color, message.data.bg_color);
    }
    else if(message.pl_type == "font_size_update"){
        set_font_size(message.data.font_size);  
    }
    else if(message.pl_type == "download_video"){
        open_vid_for_download();
    }
    else if(message.pl_type == "pip_toggle"){
       pip_toggle();
    }
    else if(message.pltype == "get_info"){
        let message = {
            cap_color: document.getElementById("captions").style.color,
            cap_bg_color: document.getElementById("captions").style.color,
            //change later
            font_size: "28px"
        }
        sendResponse(message);
    }

    
}