import { Component, OnInit } from '@angular/core';
declare let jQuery: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	columnHeaders: Array<string> = [
		'Name',
		'Company',
		'Role',
		'Location'
	];

	colData = [
		{ name: 'Fred Mahoney', company: 'Google', role: 'ML/AI Engineer', location: 'Seattle, WA' },
		{ name: 'Karen Philipa Whittaker', company: 'Meta', role: 'Sales', location: 'New York, NY' },
		{ name: 'Sarah Whren', company: 'Amazon', role: 'Software Engineer', location: 'Seattle, WA' },
		{ name: 'Carlos Enrique Sanchez', company: 'Apple', role: 'Director of Engineering', location: 'Cupertino, CA' },
		{ name: 'Frida Guttemeier', company: 'Sony Entertainment', role: 'Full Stack Developer', location: 'Washington, DC' },
		{ name: 'Frankie Thomas Mills', company: 'Google', role: 'ML/AI Engineer', location: 'Seattle, WA' },
		{ name: 'Lucas Branch', company: 'Meta', role: 'Sales', location: 'New York, NY' },
		{ name: 'Grace Stem', company: 'Amazon', role: 'AWS Solutions Architect', location: 'Washington, DC' },
		{ name: 'Erwin Martin', company: 'Apple', role: 'Senior Backend Engineer', location: 'San Diego, CA' },
		{ name: 'Fernando Olivera', company: 'OKTA Solutions', role: 'Customer Relations', location: 'Washington, DC' },
		{ name: 'Joan Kelly Scalpa', company: 'NVIDIA', role: 'ML/AI Engineer', location: 'Seattle, WA' },
		{ name: 'Claire Baldwin', company: 'Meta', role: 'Full Stack Engineer', location: 'New York, NY' },
		{ name: 'Whitney Parolta', company: 'Amazon', role: 'Software Developer', location: 'Richmond, VA' },
		{ name: 'Trisha Grey Zarabria', company: 'Apple', role: 'Sales', location: 'Austin, TX' },
		{ name: 'Andrea Inti', company: 'Sony Entertainment', role: 'Human Resource Officer', location: 'Miami, FL' },
	]

	columns = [
		{
			data: 'name',
		},
		{
			data: 'company',
		},
		{
			data: 'role',
		},
		{
			data: 'location',
		}
	];

	editor: any;

	ngOnInit() {
		const dataTableArgs = {
			autoWidth: true,
			paging: true,
			searching: true,
			info: true,
			responsive: true,
			processing: true,
			data: this.colData,
			columns: this.columns,
			language: {
				emptyTable: 'No items to display',
				loadingRecords: 'Loading...',
				search: '',
				searchPlaceholder: 'Search',
			},
		};

		const datatable = jQuery('#sample-table');
		this.editor = datatable.DataTable(dataTableArgs);
	}
}
