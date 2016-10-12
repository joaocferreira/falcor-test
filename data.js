var falcor = require('falcor');
var $ref = falcor.Model.ref;

var eventsData = {
    locationsById: {
      1: {
        city: "Salt Lake City",
        state: "Utah"
      },
      2: {
        city: "Las Vegas",
        state: "Nevada"
      },
      3: {
        city: "Minneapolis",
        state: "Minnesota"
      },
      4: {
        city: "Walker Creek Ranch",
        state: "California"
      }
    },
    events: [
     {
        name: "ng-conf",
        description: "The worlds best Angular Conference",
        location: $ref('locationsById[1]'),
        host: "ng guy"
      },
      {
        name: "React Rally",
        description: "Conference focusing on Facebook's React",
        location: $ref('locationsById[1]'),
        host: "react guy"
      },
      {
        name: "ng-Vegas",
        description: "Two days jam-packed with Angular goodness with a focus on Angular 2",
        location: $ref('locationsById[2]'),
        host: "ng guy"
      },
      {
        name: "Midwest JS",
        description: "Midwest JS is a premier technology conference focused on the JavaScript ecosystem.",
        location: $ref('locationsById[3]'),
        host: "js guy"
      },
      {
        name: "NodeConf",
        description: "NodeConf is the longest running community driven conference for the Node community.",
        location: $ref('locationsById[4]'),
        host: "node guy"
      }
    ]
};

module.exports = eventsData;
