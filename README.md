# @camlegleiter/react-blink
Bringing back the classic &lt;blink&gt; tag to React!

## Installation

```
$ yarn add @camlegleiter/react-blink
```

## Usage

```javascript
import ReactDOM from 'react-dom';
import Blink from '@camlegleiter/react-blink';

ReactDOM.render(
  <Blink rate={1000}>This text is blinking!</Blink>,
  document.body,
);
```

## Props

### rate

Type: Number
Default: `1000`

The rate (in milliseconds) at which the text will flash.

### className

Type: String
Default: `""`

Any specific classes to add to the `Blink` component for display.

## Scripts

```
$ yarn build
```

## License

MIT
