# angular-breadcrumb-simple

Angular directive for use url route like a breadcrumb. This repo is for distribution on bower.

### bower

```shell
bower install angular-breadcrumb-simple --save
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-breadcrumb-simple/angular-breadcrumb-simple.js"></script>
```

Then add `ngBreadcrumb` as a dependency for your app:

```javascript
angular.module('myApp', ['ngBreadcrumb']);
```

### How use
```html
<div breadcrumb=""></div>
```

## License

The MIT License (MIT)

Copyright (c) 2016 Jonas Ribeiro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.