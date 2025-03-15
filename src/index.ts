/**
 * skibidi-ipsum - Generate gibberish text in the style of internet meme culture
 */

/**
 * Configuration options for the skibidi-ipsum generator
 */
export interface SkibidiOptions {
  /**
   * Number of paragraphs to generate
   * @default 3
   */
  paragraphs?: number;

  /**
   * Minimum number of sentences per paragraph
   * @default 3
   */
  minSentencesPerParagraph?: number;

  /**
   * Maximum number of sentences per paragraph
   * @default 7
   */
  maxSentencesPerParagraph?: number;

  /**
   * Minimum number of words per sentence
   * @default 5
   */
  minWordsPerSentence?: number;

  /**
   * Maximum number of words per sentence
   * @default 15
   */
  maxWordsPerSentence?: number;

  /**
   * Whether to start with "Skibidi" as the first word
   * @default true
   */
  startWithSkibidi?: boolean;

  /**
   * Format of the output
   * @default 'plain'
   */
  format?: 'plain' | 'html';
}

// Word lists for generating gibberish
const skibidiWords = [
  'skibidi',
  'toilet',
  'rizz',
  'gyatt',
  'ohio',
  'sigma',
  'griddy',
  'bussin',
  'sus',
  'no cap',
  'fr fr',
  'sheesh',
  'yeet',
  'vibe check',
  'slay',
  'based',
  'cringe',
  'mid',
  'ratio',
  'L',
  'W',
  'bruh',
  'fam',
  'lit',
  'goated',
  'chad',
  'simp',
  'banger',
  'cap',
  'fire',
  'bet',
  'glizzy',
  'drip',
  'poggers',
  'dank',
  'meme',
  'vibe',
  'flex',
  'lowkey',
  'highkey',
  'rent free',
  'living',
  'head',
  'rent',
  'free',
  'stan',
  'cancelled',
  'main character',
  'energy',
  'unhinged',
  'understood the assignment',
  'ate',
  'slept',
  'woke',
  'brat',
  'era',
  'delulu',
  'rizzy',
  'gyatted',
  'camera man',
  'ohio rizz',
  'skibidi toilet',
  'sigma male',
  'alpha',
  'beta',
  'omega',
  'giga chad',
  'skill issue',
  'diff',
  'ong',
  'frfr',
  'no kizzy',
  'kinda',
  'sorta',
  'literally',
  'actually',
  'basically',
  'absolutely',
  'totally',
  'deadass',
  'for real',
  'straight up',
  'lowkey',
  'highkey',
  'respectfully',
  'disrespectfully',
  'unironically',
  'ironically',
  'genuinely',
  'honestly',
  'real talk',
  'facts',
  'cap',
  'no cap',
  'big cap',
  'little cap',
];

const connectors = [
  'and',
  'but',
  'or',
  'yet',
  'so',
  'because',
  'if',
  'when',
  'while',
  'though',
  'although',
  'since',
  'as',
  'until',
  'unless',
  'even though',
  'even if',
  'after',
  'before',
  'once',
  'whenever',
  'wherever',
  'whether',
  'rather than',
  'than',
  'that',
  'which',
  'who',
  'whom',
  'whose',
  'whoever',
  'whatever',
  'whichever',
  'however',
  'moreover',
  'furthermore',
  'in addition',
  'consequently',
  'hence',
  'thus',
  'accordingly',
  'therefore',
  'instead',
  'nevertheless',
  'nonetheless',
  'still',
  'otherwise',
  'conversely',
  'rather',
  'similarly',
  'likewise',
  'indeed',
  'certainly',
  'undoubtedly',
  'surely',
  'definitely',
  'clearly',
  'obviously',
  'apparently',
  'seemingly',
  'arguably',
  'essentially',
  'basically',
  'fundamentally',
  'primarily',
  'mainly',
  'mostly',
  'generally',
  'usually',
  'typically',
  'occasionally',
  'sometimes',
  'often',
  'frequently',
  'rarely',
  'seldom',
  'hardly',
  'scarcely',
  'barely',
];

/**
 * Get a random integer between min and max (inclusive)
 */
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Get a random word from the skibidi word list
 */
function getRandomWord(): string {
  return skibidiWords[Math.floor(Math.random() * skibidiWords.length)];
}

/**
 * Get a random connector word
 */
function getRandomConnector(): string {
  return connectors[Math.floor(Math.random() * connectors.length)];
}

/**
 * Generate a random sentence
 */
function generateSentence(minWords: number, maxWords: number, startWithSkibidi = false): string {
  const wordCount = getRandomInt(minWords, maxWords);
  const words: string[] = [];

  // First word (optionally "Skibidi")
  if (startWithSkibidi) {
    words.push('Skibidi');
  } else {
    words.push(getRandomWord());
  }

  // Capitalize first word
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

  // Rest of the words
  for (let i = 1; i < wordCount; i++) {
    // Add a connector word occasionally
    if (i > 1 && Math.random() < 0.2) {
      words.push(getRandomConnector());
    } else {
      words.push(getRandomWord());
    }
  }

  // Add punctuation
  const punctuation = ['.', '.', '.', '!', '?', '...'];
  const randomPunctuation = punctuation[Math.floor(Math.random() * punctuation.length)];

  return words.join(' ') + randomPunctuation;
}

/**
 * Generate a paragraph of random sentences
 */
function generateParagraph(options: SkibidiOptions): string {
  const {
    minSentencesPerParagraph = 3,
    maxSentencesPerParagraph = 7,
    minWordsPerSentence = 5,
    maxWordsPerSentence = 15,
    startWithSkibidi = true,
  } = options;

  const sentenceCount = getRandomInt(minSentencesPerParagraph, maxSentencesPerParagraph);
  const sentences: string[] = [];

  for (let i = 0; i < sentenceCount; i++) {
    // Only the first sentence of the paragraph might start with "Skibidi"
    const shouldStartWithSkibidi = i === 0 && startWithSkibidi;
    sentences.push(
      generateSentence(minWordsPerSentence, maxWordsPerSentence, shouldStartWithSkibidi),
    );
  }

  return sentences.join(' ');
}

/**
 * Generate skibidi-ipsum text
 * @param options Configuration options
 * @returns Generated text
 */
export function skibidiIpsum(options: SkibidiOptions = {}): string {
  const { paragraphs = 3, format = 'plain' } = options;

  const paragraphTexts: string[] = [];

  for (let i = 0; i < paragraphs; i++) {
    paragraphTexts.push(generateParagraph(options));
  }

  if (format === 'html') {
    return paragraphTexts.map(p => `<p>${p}</p>`).join('\n');
  }

  return paragraphTexts.join('\n\n');
}

// Default export
export default skibidiIpsum;
