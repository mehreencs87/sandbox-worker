Experimental worker for sandboxed javascript, do not use this for anything, move on.

## Install

```
npm i -g git+https://github.com/auth0/sandbox-worker.git
```

## Usage

Input from text file:

```
$ sandbox-worker < test
```

Input from  stdin:

```
$ sandbox-worker
function (a, b, callback) {
  //test workload
  callback(null, a + b);
}
---
[ 1, 2 ]
[Then press CTRL+D]
```

## License

MIT - 2014 AUTH0 INC