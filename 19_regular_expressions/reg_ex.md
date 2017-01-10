# Regular Expressions

useful when trying to find complex patterns in STRINGS.  
age-old mechanisms for representing these patterns.  
not limited to js.

regexpal.com

^	start of string
$	end of string
[]	character set
()	capture group ('match' group)
+	one or more
*	zero or more
{5} 	exactly 5
{3, 5}	between 3 and 5


[a-zA-Z] => case insensitive
[a-z A-Z] => space included
[a-z0-9] => letter or number

^______$ => anchors (the whole string needs to be a match)

^[a-zA-Z]+[0-9]+$  
starts with letter, needs a number on end

^[a-zA-z]+[0-9]*$
starts with letter, can end with 0 or more numbers

^\$[0-9]+\.[0-9]{2}$
price - starts with $ and float to 2 decimals

^[0-9]{3}[- ]?[0-9]{4}$
phone number with no area code
1112222
111 2222
111-2222

^<\/?[a-zA-Z]+>$
```
	<HEAD>
	<head>
	<newtag>
	<p>
	<article>
	<section>
	</section>
```

Can to two built-in things with a RegExp object
1.	test
2.	

backslashes need to be doubled up in JS bc it interprets it as an escape character and exits the regexp string

	let email = new RegExp('^[a-zA-Z][\\w\\.-_]{0,63}@[a-z\.]+\\.(com|org|edu)$');
