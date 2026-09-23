---
title: 'Writing a Programming Language In Ocaml'
description: 'Menhir is my everything.'
pubDate: 'Sep 23, 2026'
heroImage: '../../assets/programming.png'
---

I'm writing a programming languag. Interpretted. In OCAML! And I just love it.
My favorite programming project is writing a programming language. 
I love the process of taking text in a file and making it into a program that does something.
I love designing the language, what I want the user to be able to do, how I want the language to look like and work.
And for those of you who have never written a programming language before, doing it in OCaml using Menhir is just too much fun.

## OCaml and Menhir

### What is Menhir?

Menhir is a parser generator for OCaml. It takes a grammar specification and generates a parser for that grammar.
And it is one of the easiest parser generators I have ever used. It is so easy to take a grammar specification and generate a parser.
I love the simplicity and ease of use of Menhir.

### What is OCaml?

OCaml is a functional programming language. It is a statically typed language that supports pattern matching and recursion.
It is exactly that pattern matching and recursion that is so fun and makes it much easier to write a programming language.
Altough I would normally recommend you to use a different language for interpreters, because OCaml isn't the fastest language for interpreters, I am using it anyway. Mostly because I am not planning to write a programming language that is supposed to compete with other languages, I'm just doing this for fun. OCaml and Menhir is just a whole load of fun.

### Summary

Overall, writing a programming language in OCaml using Menhir is a fun and rewarding experience, and it is one of the easier combo's to write a programming language in.


## Writing an interpretter

As of right now I'm starting with the back-end of the language, the interpreter, making it able to run the parsed AST.
I start with this before writing the front-end of the interpreter, mostly because I want to design the functionality of the back-end first and then build the front-end around it.

The back-end is going to take the parsed AST and run it. It will make the Ast and actually run it like a program. As of right now it is very simple, it wil evaluate parts of the AST and run it direclty. My main goals right now are to be able to do loops, conditionals, control flow statements and binary operations. After that I want to build in functionality for variables, functions, and other language features. Allowing the user to write programs that can print to the console and much more.

I want my the functionality to be easily extendable, so that I can add new language features without having to rewrite the interpreter from scratch.

You can find the interpreter [here](https://github.com/faouziCodes/lang).

**to be continued (please read the rest of the blog post later as I continue writing the interpreter and include code examples)**
