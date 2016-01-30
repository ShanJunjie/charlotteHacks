var userObjects = [];

$(document).ready(function() {
    $("#submit").on("click",function(){
        // i = gerElementById("");
        // window.location.href = "personal.html";
        $.ajax({
            type: 'GET',
            url: './facebookOutput.txt',
            dataType:'json',
            success: function(data){
                console.log(data);
                console.log(data[0].userName);
                for (var i = 0; i < data.length; i++) {
                    var user = {
                        posts: []
                    };
                    user.userName = data[i].userName;
                    user.latitude = data[i].latitude;
                    user.longtitude = data[i].longitude;
                    user.about = data[i].about;
                    user.coverpicURL = data[i].coverPicURL;
                    for(var j = 0; j<4;j++){
                        user.posts[j] = data[i].posts[j].message;
                };
                    userObjects.push(user);
                    var idk = 0 ;
                    $('#photo').attr("src",userObjects[idk].coverpicURL);
                    $('.detail p').text((userObjects[idk]).about);
                    $('.post .leftpost').text((userObjects[idk]).about)
                    console.log("success get: ", userObjects[0].coverpicURL);
                    genList(idk);
                }

            },
            error: function(err)
            {
                console.log("error"+err);
            }
        });

    });

});


function genList(idx){
  console.log("success genList");
  var s1 = '<div class="row post">   <div class="col-md-6 leftpost show-read-more">';
  var s2 = '</div>   <div class="col-md-6 picture"><img id="picture" src="';
  var s3 = '"></div> </div>';

  var html = '';
  for (var i = 0; i < userObjects[idx].post.length; i++) {
    html += s1 + userObjects[idx].post[i].message + s2 + userObjects[idx].post[i].pictureURL + s3 ;
  }
  document.getElementById("postList").innerHTML = html;
  console.log("success genList finished");
}
