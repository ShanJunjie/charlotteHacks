$.ready(function() {
    var myObjects = {};
    // start JSON retrieval here
    $.ajax({
            type: 'GET',
            url: 'fakePeople.json',
            crossDomain: true,
            dataType:'json',
            success: function(data){
                myObjects = JSON.parse(data);
                console.log("success get");
                console.log(myObjects);
            },
            error: function(err)
            {
                console.log("error"+err);
            }    
    });
    
});