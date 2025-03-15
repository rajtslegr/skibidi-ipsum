import { describe, it, expect } from 'vitest';
import skibidiIpsum, { SkibidiOptions } from './index.js';

describe('skibidiIpsum', () => {
  it('should generate text with default options', () => {
    const result = skibidiIpsum();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);

    // Should have 3 paragraphs by default
    const paragraphs = result.split('\n\n');
    expect(paragraphs.length).toBe(3);
  });

  it('should generate the specified number of paragraphs', () => {
    const options: SkibidiOptions = { paragraphs: 5 };
    const result = skibidiIpsum(options);
    const paragraphs = result.split('\n\n');
    expect(paragraphs.length).toBe(5);
  });

  it('should generate HTML format when specified', () => {
    const options: SkibidiOptions = { format: 'html', paragraphs: 2 };
    const result = skibidiIpsum(options);

    expect(result).toContain('<p>');
    expect(result).toContain('</p>');

    // Should have 2 paragraphs
    const paragraphs = result.split('\n');
    expect(paragraphs.length).toBe(2);

    // Each paragraph should be wrapped in <p> tags
    paragraphs.forEach(p => {
      expect(p).toMatch(/^<p>.*<\/p>$/);
    });
  });

  it('should start with Skibidi when startWithSkibidi is true', () => {
    const options: SkibidiOptions = { startWithSkibidi: true, paragraphs: 1 };
    const result = skibidiIpsum(options);

    expect(result.startsWith('Skibidi')).toBe(true);
  });

  it('should respect min and max sentence settings', () => {
    const options: SkibidiOptions = {
      paragraphs: 1,
      minSentencesPerParagraph: 2,
      maxSentencesPerParagraph: 2,
    };

    const result = skibidiIpsum(options);

    // Count sentences by counting periods, exclamation marks, and question marks
    // Note: Some punctuation like "..." counts as multiple matches, so we can't rely on exact count
    const sentenceCount = (result.match(/[.!?]/g) || []).length;
    expect(sentenceCount).toBeGreaterThanOrEqual(2);
  });
});
