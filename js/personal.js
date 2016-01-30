$(document).ready(function() {
    var userObjects = [];
    // start JSON retrieval here
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
                }
                    userObjects.push(user);

                }
                // $('#photo').attr("src",userObjects[0].coverpicURL);
                // $('.detail p').text((userObjects[0]).about);
                loadDataToCards(userObjects)
                console.log("success get: ", userObjects[0].coverpicURL);
            },
            error: function(err)
            {
                console.log("error"+err);
            }    
    });
    var addcard = function(userObjects){
        var outer = '<div class="row card"></div>';
        var inner1 = '<div class="col-md-4"></div>';
        var inner2 = '<div class="col-md-8"></div>';
        for(var i=0; i < userObjects.length; i++){
            var image = '<img class="img-responsive img-rounded'
        }
    }
    var loadDataToCards = function(faceData) {
        var face = faceData;
        var card = $(".list").children(".card");
        for (var i = 0; i < face.length ; i++) {
            console.log(card[i]);
            var card = $(card[i]);
            var face = face[i];
            card.find("img").attr("src", face.coverpicURL);
        }
    };
    
});