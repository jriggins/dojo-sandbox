dojo.provide('PhotoBrowser._base');

dojo.require('PhotoBrowser.StoredSearchController');
dojo.require('PhotoBrowser.Toolbar');
dojo.require('PhotoBrowser.Results');

dojo.require('dijit.layout.BorderContainer');

dojo.addOnLoad(function() {
    
    var bc = new dijit.layout.BorderContainer({ 
		design : 'headline',
		style : 'width:100%; height:100%'
	}, 'container');
	
	new PhotoBrowser.Toolbar({ 
		region : 'top',
		style : 'height:50px'
	}, 'toolbar').placeAt(bc);
	
	new PhotoBrowser.StoredSearchController({ 
		region : 'left', 
		style : 'width:100px;', 
		splitter : true 
	}, 'search_terms').placeAt(bc);

	new PhotoBrowser.Results({ 
		region : 'center'
	}, 'results').placeAt(bc);

	bc.startup();
});
