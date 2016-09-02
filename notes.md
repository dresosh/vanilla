# Vanilla Notes

## Global Execution Context
#### There are two phases during the execution context.
The `first` phase is called `creation phase`, where the `global object`, `this`, and `outer environment` is created.

During the creation phase it `recognizes` where you have created `variables` and `functions`. It sets up memory space for variable and functions. `"HOISTING"`
Hoisting does not mean that variables and functions are physically moved to the top. It simply means that the javascript engine has allocated specific memory-space for variables and functions. That means that variables and functions exist upon creation since they are kept in memory. There is one major difference between variables and functions when it comes to hoisting. `Functions` are `immediately hoisted` to the top and available after creation, where `variables` are initially `created but undefined` until the code is executed.

The second phase is the execution phase. This is when your code is being run line by line.

## Conceptual Aside
#### Difference between 'Undefined' and 'not definded'
`Undefined` means that the `value` of the variable `hasn't been set` but the variable itself exists. Undefined is a special value set by the javascript engine.
`Not defined` means that the `variable does not exist`.

#### Single Threaded
Single threaded execution means that one command is being executed at a time.

#### Synchronous
This means one line at a time

#### Execution Stack
On initial creation, the javascript engine creates the global execution context which will parse through variables and functions and put them into memory.
`Once` the code is being run and functions are being `invoked`, each time a new function is being invoked, the javascript `engine creates a new execution context`. These new execution context then `will stack` in order of them being run. The execution context on the top of the stack is the one currently running. `Once` a function is `done` running it will `pop back off` the Execution Stack.
