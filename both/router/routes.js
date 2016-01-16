FlowRouter.route(['/','/home'],{
	action:function(){
		FlowLayout.render('layout',{sidebar:'sidebar',main:'home',cart:'cart'});
	}
});
FlowRouter.route('/register',{
	action:function(){
		FlowLayout.render('layout',{sidebar:'',main:'register',cart:''});
	}
});
FlowRouter.route('/signin',{
	action:function(){
		FlowLayout.render('layout',{sidebar:'',main:'signin',cart:''});
	}
});
FlowRouter.route('/signout',{
	action:function(){
		Meteor.logout(function(err){
			if(!err){
				FlowRouter.go('/signin');
			}
		})
	}
});
FlowRouter.route('/checkout',{
	action:function(){
		FlowLayout.render('layout',{sidebar:'sidebar',main:'checkout',cart:''});
	}
});
FlowRouter.route('/category/:categoryName',{
	subscriptions: function(params){
     console.log("SUBSCRIBE", params);
     //make sure subscriptions exist
	},
	triggersEnter: function(params) {  
     console.log("Enter", params);
     //check that user is logging in
	},
	triggersExit: function(params) { 
     console.log("Exit", params);
     //check that there is no unsaved data
	 },
	action:function(){
		FlowLayout.render('layout',{sidebar:'sidebar',main:'category',cart:'cart'});
	}
});

   
