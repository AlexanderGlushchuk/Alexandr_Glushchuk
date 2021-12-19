XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
class Web_API
{
    Upload() {
      let data = "some data";

      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "https://content.dropboxapi.com/2/files/upload");
      xhr.setRequestHeader("Dropbox-API-Arg", "{\"path\": \"/file.txt\",\"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}");
      xhr.setRequestHeader("Content-Type", "application/octet-stream");
      xhr.setRequestHeader("Authorization", "Bearer sl.A-YrkA7ECUgB4D3mQNRuIHS04Gf-x8zRHgEpfwShouVKF2sEzgP_CMg8Lz-IotXO-yKeWeSUrF718Xo6Ze5BJhPJaPFFAfHCCb_9xpiz8FHPYIgUI3F9-FVFXLOeaiQXUW921gCa");
      
      xhr.send(data);
    }

    GetFileMetadata() {
      let data = JSON.stringify({
        "file": "/file.txt",
        "actions": []
      });
      
      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "https://api.dropboxapi.com/2/sharing/get_file_metadata");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "Bearer sl.A-YrkA7ECUgB4D3mQNRuIHS04Gf-x8zRHgEpfwShouVKF2sEzgP_CMg8Lz-IotXO-yKeWeSUrF718Xo6Ze5BJhPJaPFFAfHCCb_9xpiz8FHPYIgUI3F9-FVFXLOeaiQXUW921gCa");
      
      xhr.send(data);
    }

    DeleteFile() {
      let data = JSON.stringify({
        "path": "/file.txt"
      });
      
      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "https://api.dropboxapi.com/2/files/delete_v2");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "Bearer sl.A-YrkA7ECUgB4D3mQNRuIHS04Gf-x8zRHgEpfwShouVKF2sEzgP_CMg8Lz-IotXO-yKeWeSUrF718Xo6Ze5BJhPJaPFFAfHCCb_9xpiz8FHPYIgUI3F9-FVFXLOeaiQXUW921gCa");
      
      xhr.send(data);
    }
}

API=new Web_API();
setTimeout(API.Upload,7000);
setTimeout(function(){console.log('\n')},9000);
setTimeout(API.GetFileMetadata,8000);
setTimeout(function(){console.log('\n')},10000);
setTimeout(API.DeleteFile,11000);
setTimeout(function(){console.log('\n')},12000);