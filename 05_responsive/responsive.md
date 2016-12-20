# Responsive
* grids (foundation and bootstrap)
* media queries

## Install Foundation
in project folder (don't download globally)

	npm install foundation-sites

this should add the node_modules folder

## Media Queries
@media = targets everything (includes print)  
@media screen = targets all screens (excludes print)  
@media only = excludes old browsers  
@media only screen = excludes old browsers and print styles

## Foundation Grid
Always need to import Foundation into my Sass

	@import 'node_modules/foundation-sites/scss/foundation';

Include CSS for these two modules, which are required

	@include foundation-global-styles;
	@include foundation-grid;

Then you can include the built-in Foundation mixins

	header {
		/* can use sass mixins to style this element as a row */
		@include grid-row();

		> nav, > ul {
			/* can use sass mixins to style this element as a column
			in parentheses, provide the number of columns */
			@include grid-column(6);
		}
	}
	
can easily customize number of columns for a specific row  
ex. if you need a 5-col row

	@include grid-row(20);