var falcorExpress = require('falcor-express');
var Router = require('falcor-router');

var express = require('express');
var _ = require('lodash');
var app = express();

app.use(express.static('.'));

var eventsData = require('./data');

app.use('/model.json', falcorExpress.dataSourceRoute(function(req, res) {
	return new Router([
		{
			route: 'events[{integers:eventsIds}]["name", "description", "location"]',
			get: function(pathSet) {

        console.log('pathSet ', pathSet);

        var results = [];
        var showEventRecord = true;

				pathSet.eventsIds.forEach(function(eventId) {
					pathSet[2].map(function(key) {

						var eventRecord = eventsData.events[eventId];

            console.log('key ', key);

            if (showEventRecord) {

              console.log('eventRecord ', eventRecord);
              showEventRecord = false;
            }

						results.push({
							path: ['events', eventId, key],
							value: eventRecord[key]
						});
					});
				});
        console.log('results ', results);
				return results;
			}
		}, {
      route: "locationsById[{integers:locationId}]['city', 'state']",
      get: function(pathSet) {

        console.log('pathSet ', pathSet);

        var results = [];

        pathSet.locationId.forEach(function(locationId) {
          pathSet[2].map(function(key) {

            var location = eventsData.locationsById[locationId];
            results.push({
              path: ['locationsById', locationId, key],
              value: location[key]
            });
          });
        });
        return results;
      }
    }
	]);
}));

app.listen(3000);
console.log('Listening on http://localhost:3000');

