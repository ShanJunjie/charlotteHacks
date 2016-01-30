      $.ajax({
        url: APIEndpoint + '/restaurants/short',
        crossDomain: true,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          console.log('data got\t', data);
          if(data.status==200){
              res_json = data.data;
          }

        },
        error: function() {
          console.log('data got failed!');
        }
      });