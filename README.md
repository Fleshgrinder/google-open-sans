# Google Open Sans
Git repository for Google’s Open Sans (Condensed) font. Note that there are many other Bower packages available which 
provide Google’s Open Sans font, but none of these includes the condensed version nor do they provide optimized SVG 
files.

## Install
Installable via [Bower](http://bower.io/):

```sh
bower install google-open-sans
```

## Usage
Via the usual CSS `@font-face` syntax:

```css
@font-face {
  font-family: open-sans;
  src: url("/open-sans/regular.eot");
  src: url("/open-sans/regular.eot?#iefix") format("embedded-opentype"),
       url("/open-sans/regular.woff") format("woff"),
       url("/open-sans/regular.ttf") format("truetype"),
       url("/open-sans/regular.svg##open-sans") format("svg");
  font-weight: normal; /* 400 */
  font-style: normal;
}
```

Or maybe you prefer an SCSS mixin:

```scss
@mixin font-face($family, $file-name, $weight: normal, $style: normal) {
  @font-face {
    font-family: $family;
    src: url("/#{$family}/#{$file-name}.eot");
    src: url("/#{$family}/#{$file-name}.eot?#iefix") format("embedded-opentype"),
         url("/#{$family}/#{$file-name}.woff") format("woff"),
         url("/#{$family}/#{$file-name}.ttf") format("truetype"),
         url("/#{$family}/#{$file-name}.svg##{$family}") format("svg");
    font-weight: $weight;
    font-style: $style;
  }
}

// Open Sans
@include font-face(open-sans, light, 200)
@include font-face(open-sans, light-italic, 200, italic)
@include font-face(open-sans, regular) // 400
@include font-face(open-sans, regular, normal, italic) // 400
@include font-face(open-sans, semibold, 600)
@include font-face(open-sans, semibold-italic, 600, italic)
@include font-face(open-sans, bold, bold) // 700
@include font-face(open-sans, bold-italic, bold, italic) // 700
@include font-face(open-sans, extrabold, 800)
@include font-face(open-sans, extrabold-italic, 800, italic)

// Open Sans Condensed
@include font-face(open-sans-condensed, light, 200)
@include font-face(open-sans-condensed, light-italic, 200, italic)
@include font-face(open-sans-condensed, bold, bold) // 700
```

## Pre-compress Fonts
Pre-compressing the fonts is useful if you are using a web server that delivers those files directly to the client 
instead of compressing them over and over again. For instance [nginx](http://nginx.org/) is capable of doing so with 
the [`ngx_http_gzip_static_module`](http://nginx.org/en/docs/http/ngx_http_gzip_static_module.html). To pre-compress 
the included fonts do the following:

```sh
npm install gulp --global
npm update
gulp
```

Afterwards you will find pre-compressed files within the fonts directory.

## License
> Apache License, Version 2.0, January 2004
>
> https://www.apache.org/licenses/LICENSE-2.0.html
