var RocknrollcallYeoman = window.RocknrollcallYeoman = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');

RocknrollcallYeoman.applicationName = "Rock 'n' Roll Call";

Ember.Handlebars.helper('hotttnesss-badge', function(value, options) {
  var h = parseFloat(value);
  var hotttnesss_num = Math.round(h * 100);
  var hotttnesss_css = Math.ceil(h * 10) - 1;
  var html = "<h4>Hotness: ";
  if (hotttnesss_num > 0) {
    html += '<i class="hotttnesss">';
    for (var i=0;i<hotttnesss_css;i++) {
      html += '<i class="glyphicon glyphicon-fire hotttnesss'+i+'"></i>';
    }
    html += "</i>";
    html += '<span class="hotttnesss-badge">'+hotttnesss_num+'</span></h4>';
  } else {
    html += "0</h4>";
  }
  return new Handlebars.SafeString(html);
});


RocknrollcallYeoman.dummySearchResultsArtists = 
[
  {
    id: 1,
    name: 'Tom Waits',
    type: 'artist',
    enid: 'ARERLPG1187FB3BB39',
    hotttness: '1'
    
  },
  
  {
    id: 2,
    name: 'Thomas Alan Waits',
    type: 'artists',
    enid: 'ARELPG1187FB3BB39',
    hotttness: '.89'
  },
  
  {
    id: 3,
    name: 'Tome Waits w/ Keith Richards',
    type: 'artist',
    endid: 'ARMPVNN13CA39CF8FC',
    hotttness: '.79'
    
  }
]

