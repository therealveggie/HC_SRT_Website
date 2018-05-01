//Oh how I wish we had the react or angular framework :(

function showInfo(tool) {
	var titles = [
		'Auto-Populate',
		'Template Design',
		'Screening',
		'Review',
		'Issues',
		'Queries',
		'On Site Evaluation', 
	];
	
	var descriptions = [
		"Allows users to auto-populate tombstone events into documents",
		"Create and deploy reusable form templates",
		"Removes the burden from digging through the post NOC changes guidance document. Seamlessly navigate through an organized list of changes accompanied by a simple, yet powerful assess tool for thorough and effective analysis.",
		"Effortlessly access relevant documents from internal and external resources. Easily navigate through results with filter options or add data content using a built-in interface",
		"Easily manage issues encountered during the review process and navigate through the flow and resolution in a coherent manner",
		"Access information stored in the BGTD database along with queries to search the SRT, DPT, and DSTS databases. Easily export queries and information to Excel for effortless reporting",
		"No idea what this does whatsoever", 
	];
	
	var goals = [
		"<li>Reduce and ideally eliminate tombstone data entry</li><li>Easily access tombstone data with a relevant control number</li>",
		"<li>Easily create templates catered towards the SRT by inserting custom content control fields</li><li>Open and populate templates through the autopopulate function</li>",
		"<li>Partially automate the screening process</li><li>Give reviewers easy access to information pertinent to their unique submission to facilitate with the screening process.</li>",
		"<li>Facilitate access to supporting information required for screening and review</li><li>Access appropriate documents linked to the selected headers and modules</li>",
		"<li>Provide an efficient and organized way to manage issues encountered through the screening and review process</li><li>Navigate through the entire screening process of a current or completed review</li>",
		"<li>Obtain a list of content controlled field names and the data sources.</li><li>Scan, retrieve, and populate data for content controlled fields with the relevent control number</li>",
		"<li>No idea</li><li>No idea, No idea, No idea</li>",
	];
	
	var functions = [
		"<li>Scan, retrieve, and populate data for content controlled fields with the relevent control number</li><li>Save updated or new data to the local database (e.g. non-tombstone data)</li>",
		"<li>Select users allowed to create, delete, and edit SRT specific template forms</li><li>SRT and DSTS linking content control fields</li><li>Other features including: save priviledges, linked fields, edit locking</li>",
		"<li>Execute (advanced) search queries on the database to display the desired changes, criteria or requirements</li><li>Navigate the POST NOC guidance information with endless filteration options</li><li>'Assess' changes through an interactive platform which generates a unique table including: list of changes, met and unmet criteria for each change, the list of required documents, submission type</li>",
		"<li>Search for specific documents by applying filters which execute a query search to return desired documents</li><li>Headers can be bookmarked which will enable a context sensative display - documents pertinent to the cursor location will be displayed</li><li>Documents generated from a search query or returned as a bookmarked document can be opened directly from the tool.</li>",
		"<li>Issues can be created and linked to a control number, user, function, and location. Issues are stored locally until commited by the reviewer. Each issue is also tagged with metadata for reporting purposes</li><li>The issue resolution flow allows reviewers to track issue resolution and request information from sponsors or ask for external expertise. Issues are solved locally until chosen to be commited to the database wherein issues are tracked for business reporting</li>",
		"<li>Scan the document for content controlled fields with names matching those in the local database</li><li>Save updated or new data to the local database (e.g. non-tombstone data)</li>",
		"<li>No idea</li><li>No idea, No idea, No idea</li>",
	];
	
	document.getElementById("titleInfo").innerHTML = titles[tool];
	document.getElementById("descriptionInfo").innerHTML = descriptions[tool];
	document.getElementById("goalsInfo").innerHTML = goals[tool];
	document.getElementById("functionsInfo").innerHTML = functions[tool];
}