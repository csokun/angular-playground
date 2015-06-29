(function(){
	var userService = function($http) {
		
		this.getAll = function() {
			return [
				{name: 'ABC', username: 'abc', roles: ['Administrators', 'BA']},
				{name: 'ABCD', username: 'abcd', roles: ['Administrators', 'BA']},
				{name: 'ABCDE', username: 'abcde', roles: ['Administrators', 'Operators']}
			];
		};
		
		this.save = function(user) {
			console.log(user);
		}
	};
	
	app.service('UserService', userService);
})();