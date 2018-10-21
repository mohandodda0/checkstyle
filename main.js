$(function() {
        var events = []

    $('#calendar').fullCalendar({
      
 selectable: true,  
      defaultView: 'month',

      header: {
	left: 'title', 
        right: 'addEventButton'
      },
      
      customButtons: {
        addEventButton: {
          text: 'add event...',

          click: function() {

            var titl = prompt('Enter the title');
            var dateStr = prompt('Enter a date in YYYY-MM-DD format');
            var date = moment(dateStr);
            var event = {title: titl, start: date, allDay: true};
            events.push(event);
            if (date.isValid()) {
              $('#calendar').fullCalendar('renderEvent', {
                title: titl,
                start: date,
                allDay: true
              });
              alert('Great. Now, update your database...');
            } else {
              alert('Invalid date.');
            }
          }
        }
      }

    });

  });
