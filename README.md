# kickit

"Can I kick it?"
"Yes you can"

based on mammal-dev/entry: https://github.com/mammaldev/entry


## Debugging

#### Debug mode

Uses [debug](https://github.com/visionmedia/debug), just set the `DEBUG` env var, eg:

    DEBUG=kickit kickit

#### Long Stack Traces for Promises

User [bluebird](https://github.com/petkaantonov/bluebird), turn on long stack trace by setting the `BLUEBIRD_DEBUG` env var to 1, eg:

    BLUEBIRD_DEBUG=1 kickit
