// This file exists to suppress "JSX element implicitly has type 'any'" errors
// when node_modules are not installed.
// Once you run 'npm install', you can delete this file.

declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}
