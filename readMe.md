g- global
ranges - used for longer options for eg if dev wants to match all the alphabets (a-z)
to duplicate  with ease instead of repitition we use + FOR UNLIMITED
but for limited repitition we use {} with a specific amount of times in d braces
then to do at least a specific time {(amount of times),} and just a comma

# METACHARACTERS
-\d --> match any digit character (same as [0-9])
-\w --> match any word charcater (a-z, A-Z, 0-9 ad n _'s)
-\s --> match a whitespace charcter(space, tabs etc)
-\t --> match a tab character only

# Special charcaters
"+" --> the one or moree quantifier
"/" --> the escape character
[]  --> is to sore charset
^   --> is used to make an exception
"?" --> the zero or one quantifier (makes a preceeding char optional)
"." -->  accepts any character whatseoever (except the newline character)
"*" --> the 0 or more quantifier (a bit like +)
$ --> means that char should end the expression
| --> means or 