# kickit

"Kick it!"

---

Based on mammal-dev/entry: https://github.com/mammaldev/entry

## Install

    npm install kickit


## Usage

```sh
Usage: kickit [options]

Options:

 -h, --help           output usage information
 -V, --version        output the version number
 -c, --config <path>  config file path
 -e, --env <path>     environment file path
```

Run `kickit` in a directory, it will either use the config & env you've passed in or try and find `kickfile.js` & `.env` automatically.

It'll look for `kickfile.js` in the same way Node `require` does e.g. start in the cwd and travel up your directory tree, using the first kickfile.js it finds. 

It'll only look for a `.env` the current working directory. 

See below for env and config file formats.

## `kickit.json` config file 

A json file with an array of process objects, each process object has following values:

* __handle__: identifier for process
* __spawn__:  object  
  * __command__:  command to run  
  * __args__:     args for the command  
  * __env__:      object, key is env var name, val is value  
* __waitOn__: wait for the process with this handle to finish before running

The following file will run _sleep_ first, when _sleep_ has completed it will run the _cani_ and also run the _server_ process and pass the env vars through to the server

```json
// ./kickfile.json
[
  {
    "handle": "sleep",
    "spawn": {
      "command": "sleep",
      "args": [ "1" ]
    },
  },
  {
    "handle": "cani",
    "spawn": {
      "command": "echo",
      "args": [ "'Can I Kick It?'" ]
    },
    "waitOn": "sleep"
  },
  {
    "handle": "server",
    "spawn": {
      "command": "node",
      "args": [ "./test/test_processes/server" ],
      "env": {
        "TESTVAR":  "myTestMessage",
        "DEBUG": "express:*"
      }
    },
    "waitOn": "sleep"
  }
]
```


## `.env` environment variables file

Simple shell file with export statments, eg:

```sh
# ./.env
export EXAMPLE_PORT=3232
export EXAMPLE_HOST='localhost'
export EXAMPLE_ACCESS_KEY='123-456-789'
export EXAMPLE_SECRET="987-654-321"
```

## Debugging

#### Debug mode

Uses [debug](https://github.com/visionmedia/debug), just set the `DEBUG` env var, eg:

```sh
DEBUG=kickit kickit
```

#### Long Stack Traces for Promises

Uses [bluebird](https://github.com/petkaantonov/bluebird), turn on long stack trace by setting the `BLUEBIRD_DEBUG` env var to 1, eg:

```sh
BLUEBIRD_DEBUG=1 kickit
```

---

"Can I kick it?"  
"Yes you can"

## TODO

* Tests
