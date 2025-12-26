import { Lesson } from '../courses'

export const erlangLessons: Lesson[] = [
  {
    id: 'erlang-1',
    title: 'Introduction to Erlang',
    description: 'Learn Erlang for concurrent and distributed systems',
    content: `# Introduction to Erlang

Erlang is a functional programming language designed for building massively scalable soft real-time systems.

## Key Features:
- Designed for concurrency
- Fault-tolerant
- Hot code swapping
- Distributed computing
- Pattern matching

## Hello World:
\`\`\`erlang
-module(hello).
-export([world/0]).

world() ->
  io:format("Hello, Erlang!~n").
\`\`\`

## Variables and Atoms:
\`\`\`erlang
Name = "Erlang".
Age = 38.
Status = ok.  % atom
\`\`\``,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 40,
    initialCode: `-module(example).
-export([start/0]).

start() ->
  % Your Erlang code
  io:format("Hello, Erlang!~n").
`,
    solution: `-module(example).
-export([start/0, factorial/1]).

start() ->
  io:format("Hello, Erlang!~n"),
  Result = factorial(5),
  io:format("Factorial: ~p~n", [Result]).

factorial(0) -> 1;
factorial(N) when N > 0 ->
  N * factorial(N - 1).`,
    hints: ['-module and -export directives', 'Variables start with uppercase', 'Atoms are lowercase']
  }
]
