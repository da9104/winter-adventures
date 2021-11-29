//
function startTime()
{
    var today=new Date();
    //                   1    2    3    4    5    6    7    8    9   10    11  12   13   14   15   16   17   18   19   20   21   22   23   24   25   26   27   28   29   30   31   32   33
    var suffixes = ['','st','nd','rd','th','th','th','th','th','th','th','th','th','th','th','th','th','th','th','th','th','st','nd','rd','th','th','th','th','th','th','th','st','nd','rd'];

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    document.getElementById('date').innerHTML=(weekday[today.getDay()] + ',' + " " + today.getDate()+'<sup>'+suffixes[today.getDate()]+'</sup>' + ' of' + " " + month[today.getMonth()] + " " + today.getFullYear() + ' Time Now ' + today.toLocaleTimeString());
    t=setTimeout(function(){startTime()},500);
}

startTime();

let hearMap = function() {
        var platform = new H.service.Platform({
            apikey: window.apikey
          });   
          var defaultLayers = platform.createDefaultLayers();
          // Instantiate the map using the vecor map with the
          // default style as the base layer:
          var map = new H.Map(document.getElementById('map'),
                     defaultLayers.vector.normal.map,
                      {
                        // 47.33005540703697, 2.0282207569078317
                        center: { lng: 2.0282207569078317, lat: 47.33005540703697 },
                        zoom: 10,
                        pixelRatio: window.devicePixelRatio || 1
                      });
                      var ui = H.ui.UI.createDefault(map, defaultLayers);
                      var bubble = new H.ui.InfoBubble({ lng: 2.0282207569078317, lat: 47.33005540703697 }, {
                       content: '<i class="fas fa-skiing fa-3x"></i> <br/> <b>La Tania</b> <br>  '
                       });
                      ui.addBubble(bubble);
      }
 hearMap();
    
