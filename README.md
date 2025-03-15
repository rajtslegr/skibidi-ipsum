# Skibidi Ipsum

[![npm version](https://img.shields.io/npm/v/skibidi-ipsum.svg)](https://www.npmjs.com/package/skibidi-ipsum)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/rajtslegr/skibidi-ipsum/workflows/CI/badge.svg)](https://github.com/rajtslegr/skibidi-ipsum/actions)

Generate gibberish text in the style of internet meme culture. A modern, meme-inspired alternative to Lorem Ipsum.

## Installation

```bash
# Install as a dependency
npm install skibidi-ipsum
# or
yarn add skibidi-ipsum
# or
pnpm add skibidi-ipsum
```

## Usage

### ES Modules (Recommended)

```javascript
import skibidiIpsum from 'skibidi-ipsum';

// Generate default text (3 paragraphs)
const text = skibidiIpsum();
console.log(text);
```

### With Options

```javascript
import skibidiIpsum from 'skibidi-ipsum';

const options = {
  paragraphs: 2,
  minSentencesPerParagraph: 2,
  maxSentencesPerParagraph: 4,
  minWordsPerSentence: 4,
  maxWordsPerSentence: 10,
  startWithSkibidi: true,
  format: 'html'
};

const text = skibidiIpsum(options);
console.log(text);
```

### In CommonJS

```javascript
// For CommonJS environments, use dynamic import
async function generateText() {
  const { default: skibidiIpsum } = await import('skibidi-ipsum');
  const text = skibidiIpsum({ paragraphs: 1 });
  console.log(text);
}

generateText();
```

## API

### skibidiIpsum(options)

Generates gibberish text in the style of internet meme culture.

#### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `paragraphs` | `number` | `3` | Number of paragraphs to generate |
| `minSentencesPerParagraph` | `number` | `3` | Minimum number of sentences per paragraph |
| `maxSentencesPerParagraph` | `number` | `7` | Maximum number of sentences per paragraph |
| `minWordsPerSentence` | `number` | `5` | Minimum number of words per sentence |
| `maxWordsPerSentence` | `number` | `15` | Maximum number of words per sentence |
| `startWithSkibidi` | `boolean` | `true` | Whether to start with "Skibidi" as the first word |
| `format` | `'plain'` \| `'html'` | `'plain'` | Format of the output |

## Examples

### Plain Text

```javascript
import skibidiIpsum from 'skibidi-ipsum';

const text = skibidiIpsum();
```

Output:
```
Skibidi toilet rizz gyatt ohio sigma griddy. Bussin sus no cap fr fr sheesh yeet. Vibe check slay based cringe mid ratio.

L W bruh fam lit goated chad. Simp banger cap fire bet glizzy drip. Poggers dank meme vibe flex lowkey highkey rent free.

Living head rent free stan cancelled main character. Energy unhinged understood the assignment ate slept. Woke brat era delulu rizzy gyatted camera man ohio rizz.
```

### HTML Format

```javascript
import skibidiIpsum from 'skibidi-ipsum';

const html = skibidiIpsum({ format: 'html', paragraphs: 1 });
```

Output:
```html
<p>Skibidi toilet rizz gyatt ohio sigma griddy. Bussin sus no cap fr fr sheesh yeet. Vibe check slay based cringe mid ratio.</p>
```

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/rajtslegr/skibidi-ipsum.git
cd skibidi-ipsum

# Install dependencies
npm install
```

### Testing

This project uses Vitest for testing:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Linting

This project uses ESLint and Prettier for code quality and formatting:

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix
```

### Building

```bash
npm run build
```

## License

MIT © Petr Rajtslegr
