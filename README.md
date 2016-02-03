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

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
