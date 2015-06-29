(function() {
	var manageUserHomeCtrl = function(UserService) {
		console.log('Testing ....');
		
		this.users = UserService.getAll();
	};
	
	app.controller("ManageUserHomeCtrl", manageUserHomeCtrl);
})();