--> TypeScript Generics
    -Generic Function
        1. Array of Numbers
        2. Array of String
    -Generic Function with Multiple Types and Common Methods
        1. Can use methods available for all types
        2. Can't use specific methods
    -Generic Interface and Class

--> TypeScript Modules
    -exporting Variable age of type number from Module.ts
    -exporting Class Employee from Module.ts
    -not exporting Variable companyName of type string
    -Explored different ways of importing Modules
    -Can't access those items which are not exported from Module.ts
    -Compilation of Modules
        1. tsc --module amd Module.ts
        2. tsc Main.ts
        3. node Main // node Main.js

--> TypeScript Namespaces
    -Created a namespace named stringFunctions in a file Namespace.ts
    -export function toCapital from Namespace.ts
    -function toSmall not exported from Namespace.ts
    -export function strLength from Namespace.ts
    -Add /// <reference path="Namespace.ts" /> in Main.ts
    -Access the namespace functions using stringFunctions.toCapital and stringFunctions.strLength
    -Can't access those items which are not exported from Namespace.ts
    -Compilation of Namespaces
        1. tsc --target es6 Main.ts --outfile Main.js
        2. node Main // node Main.js







