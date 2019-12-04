$(document).ready(function () {
	"use strict";
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'listDay,listWeek,month'
		},
		// customize the button names,
		// otherwise they'd all just say "list"
		views: {
			listDay: {
				buttonText: 'list day'
			},
			listWeek: {
				buttonText: 'list week'
			}
		},
		defaultView: 'listWeek',
		defaultDate: '2019-01-12',
		navLinks: true, // can click day/week names to navigate views
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		events: [{
			title: 'All Day Event',
			start: '2019-01-01'
		}, {
			title: 'Long Event',
			start: '2019-01-07',
			end: '2019-01-10'
		}, {
			id: 999,
			title: 'Repeating Event',
			start: '2019-01-09T16:00:00'
		}, {
			id: 999,
			title: 'Repeating Event',
			start: '2019-01-16T16:00:00'
		}, {
			title: 'Conference',
			start: '2019-01-11',
			end: '2019-01-13'
		}, {
			title: 'Meeting',
			start: '2019-01-12T10:30:00',
			end: '2019-01-12T12:30:00'
		}, {
			title: 'Lunch',
			start: '2019-01-12T12:00:00'
		}, {
			title: 'Meeting',
			start: '2019-01-12T14:30:00'
		}, {
			title: 'Happy Hour',
			start: '2019-01-12T17:30:00'
		}, {
			title: 'Dinner',
			start: '2019-01-12T20:00:00'
		}, {
			title: 'Birthday Party',
			start: '2019-01-13T07:00:00'
		}, {
			title: 'Click for Google',
			url: 'http://google.com/',
			start: '2019-01-28'
		}]
	});
});