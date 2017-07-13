// Hello World
// The classical introductory exercise. Just say "Hello, World!".
//
// "Hello, World!" is the traditional first program for beginning programming in a new language or environment.
//
//     The objectives are simple:
//
//     Write a function that returns the string "Hello, World!".
//     Run the test suite and make sure that it succeeds.

export class HelloWorld {
    static hello(name?: string): string {
        return (!name) ? `Hello, World!` : `Hello, ${name}!`;
    }
}