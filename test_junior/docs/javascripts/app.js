
var HomeTemplate = [
'<nav class="bar bar-standart">',
'<header class="bar bar-nav">',

'<button id="btnAddTask" class="btn pull-right">Add Task</button>',
'</header>',
'</nav>',

'<div class="bar bar-standart bar-header-secondary">',
'<ul id="lst" class="table-view">',
//'<li class="table-view-cell">Item 1</li>',
//'<li class="table-view-cell">Item 2</li>',
//'<li class="table-view-cell">Item 3</li>',
'</ul>',
'</div>'
].join('\n');

var AddTaskTemplate = [
'<nav class="bar bar-standart">',
'<header class="bar bar-nav">',

'<button id="btnBack" class="btn btn-link btn-nav pull-left">Back</button>',
'<h1 class="title">Add Task</h1>',
'</header>',
'</nav>',

'<div class="bar bar-standart bar-header-secondary">',
'<form>',
'<input id="txtName" type="text" placeholder="Full name">',
'<input id="txtTitle" type="search" placeholder="Search">',
'<textarea id="txtDesc" placeholder="Description" rows="3"></textarea>',
'<button id="btnAdd" class="btn btn-positive btn-block">Save Task</button>',
'</form>',
'</div>'
].join('\n');

var HomeView = Jr.View.extend({
    initialize: function() {
		this.listenTo( this.collection, 'add', this.addOne );
    },
    addOne: function(todoList) {
		console.log(todoList);
		var name = todoList.attributes.name;
		var title = todoList.attributes.title;
		var desc = todoList.attributes.description;
		$('#lst').append('<li class="table-view-call">' + title + ': '
			+ desc + ' by ' + name + '</li>');
//		console.log("addOne end");
    },
    render: function() {
		this.$el.html(HomeTemplate);
		return this;
    },
    events: {
	'click #btnAddTask': 'onClickAddTask'
    },
    onClickAddTask: function() {
	Jr.Navigator.navigate( 'addTask', {
	    trigger: true,
	    animation: {
		type: Jr.Navigator.animations.SLIDE_STACK,
		direction: Jr.Navigator.directions.RIGHT
	    }
	});
    }
});

var AddTaskView = Jr.View.extend({
    initialize: function() {
		this.listenTo(this.collection);
    },
    render: function() {
		this.$el.html(AddTaskTemplate);
		return this;
    },
    events: {
	'click #btnBack': 'onClickBack',
	'click #btnAdd': 'onClickAdd'
    },
    onClickBack: function() {
		Jr.Navigator.navigate( 'home', {
			trigger: true,
			animation: {
			type: Jr.Navigator.animations.SLIDE_STACK,
			direction: Jr.Navigator.directions.LEFT
			}
		});
    },
    onClickAdd: function() {
	//	console.log('Save Task clicked');
		var name = $('#txtName').val();
		var title = $('#txtTitle').val();	
		var desc = $('#txtDesc').val();
		this.collection.create({
			name: name,
			title: title,
			description: desc
		});

//		AppRouter.navigate( "/home", true );
		appRouter.navigate( "/home", true );
		
//		Jr.Navigator.navigate( 'home', {
//			trigger: true,
//			animation: {
//			type: Jr.Navigator.animations.SLIDE_STACK,
//			direction: Jr.Navigator.directions.LEFT
//			}
//		});

		return false;
    }
});

var AppRouter = Jr.Router.extend({
    routes: {
	'home': 'home',
	'addTask': 'addTask'
    },

    home: function() {
		var collection = new TaskCollection();
		var homeView = new HomeView({collection: collection});
		this.renderView(homeView);
    },
    addTask: function() {
		var collection = new TaskCollection();
		var addTaskView = new AddTaskView({collection: collection});
		this.renderView(addTaskView);
    },
});

var TaskCollection = Backbone.Firebase.Collection.extend({
    url: "https://flickering-torch-1452.firebaseio.com/ToDo"
});

var appRouter = new AppRouter();
Backbone.history.start();

Jr.Navigator.navigate( 'home', {
    trigger: true
});