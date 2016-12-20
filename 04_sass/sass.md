# SASS

## DRY
DRY = Don't repeat yourself
after changes, manually type command to convert sass to an output css file

	sass style.scss output.css

sass [developer view] --> css [browser view]

	sass --watch inputFilename.scss:outputFilename.css

for sass to watch your changes and automatically update

## Nesting

## Variables
start with a dollar sign $

	$site-bg-color: blue;

### Math
sass can do calculations  
to get top padding that is 25% of the height:

	$hero-height: 400px;
	
	height: $hero-height;
	padding-top: $hero-height / 4


## Partials
filename starts with an underscore _  
portions of css styles not meant to be an entire file  
import partials with the @import keyword

	@import 'header';

means import '_header.scss'