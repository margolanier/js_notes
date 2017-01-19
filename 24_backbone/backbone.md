# Backbone

## Separation of Concerns
Easier to scale applications if everything is NOT interrelated  

MVC is a concept for organizing code  
MVC => Model - View - Controller

- **Model** = everything data-related  
- **View** = everything DOM-related, how the data looks to users, event listeners  
- **Controller** = intermediary, a step in between model and view that keeps them separated and helps them interact

Some reasons to use MVC
1. Model-view pairs
	- declare which user events relate to which data sets
	- if multiple views use same models, and model changes, all views are updated/consistent
2. Easy to re-render views on every model 'change'

