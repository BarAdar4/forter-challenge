# The First Challenge - Fixing a Script

**How I solved it:**

I understood that the output in IE6 is different from the outputs in other IE versions, for the same code.

Therefore, I assumed that IE6 must generate the code diffrently than other IE versions.

From a quick search in google, I found out that IE6 can't handle accessing characters in strings like arrays.

For example, the below code would'nt work:
```sh
$ baseReverseDic[alphabet][alphabet[i]] = i;
```
The prefered way to do so is by using charAt function:

```sh
$ baseReverseDic[alphabet].charAt(i) = i;
```
I also looked at lz-string's git, and saw a commit they preformed for fixing this bug. This way, I quickly detected the problematic code, and fixed it.

I fixed lines 22, 127, 474, 482.

