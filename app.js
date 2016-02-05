var counter = 0;

$(document).ready(function(){
	$('#weekTwoAssess').append('<button class="weekTwoAssess">Generate</button>');

	$('.weekTwoAssess').on('click', appendDom);
	$('#weekTwoAssess').on('click', '.clickcount',showCount);
});

function appendDom(){
	counter++;
	$('#generate').append('<div>Generate</div>');

	var $el = $('#generate').children().last();
	$el.data("", counter);

	$el.append('<button class="clickcount">Show Count</button>')
}

function appendDom(){
	counter++;
	$('#delete').append('<div>Delete</div>');

	var $el = $('#delete').children().last();
	$el.data("", counter);

	$el.append('<button class="clickcount">Show Count</button>')
}

function appendDom(){
	counter++;
	$('#Change').append('<div>Change</div>');

	var $el = $('#Change').children().last();
	$el.data("", counter);

	$el.append('<button class="clickcount">Show Background-Color</button>')
}

function showCount(){
	console.log($(this).parent().data('clickcount'));
}