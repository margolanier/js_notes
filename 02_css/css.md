# CSS Things

## Positioning
1. static - default, element is in normal position of document layout flow
2. relative - similar to static but position can be modified
	* position in normal flow until modified, given L, R, top, bottom, margin
	* position (L, R) just defines the direction it should move
	* when position is adjusted, the 'white space' stays in the same place in that layer
	* other elements on page/in layer position themselves around white space
3. absolute - disrupts the normal flow of the page
	* position is "given a new layer"
	* position (L, R) defines distance from side of element
	* when position is set, its 'white space' goes away, other elements ignore that layer
	* element's position depends on html element/nearest positioned ancestor/parent
4. fixed- similar to absolute but doesn't need a parent
	* fixes an element in place relative to the browser viewport itself

**positioning context** = what element is the "containing element" (parent) of an absolutely positioned element (child)

**z-index** = by default, positioned elements all have a z-index of auto, which is effectively 0

## Flex-Box
[flex box guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

	/* parent */
	flex-container { 
		display: flex;
		flex-direction: row /* or column, etc */
		justify-content: flex-start; /* or space-between, etc */
		align-items: center; /* or baseline, etc */
		flex-wrap: nowrap;
	}

	/* child */
	flex-item {
		order: 1;
		flex-grow: 2;
		flex-shrink: 0.5;
	}

## Measurement
What to consider:
1. type of content (image, text, layout elements, media)
2. purpose of content (and context/screen layout)

% = percentage of the parent

**images**- inherently pixels  
**layout elements**  
-width: %  
-height: px

**em** = ratio vs default font size of parent (16px)  
-relative to the font-size of its direct or nearest parent

**rem** = ratio vs default font size of html  
-relative to the html (root) font-size