# DocuDeutsch Templates

This directory contains templates for creating consistent documentation across the DocuDeutsch platform.

## Lesson Template

The `lesson-template.md` file provides a standardized structure for creating German language lessons. Here's how to use it:

### 1. Copy the Template
```bash
cp lesson-template.md ../courses/deutsch-101/module-X/your-lesson-name.md
```

### 2. Required Replacements
Replace the following placeholders in your new lesson file:
- `X` in `sidebar_position: X` with the lesson number
- `[Lesson Title]` with your lesson title
- `[Brief description]` with a one-sentence description
- `module-X` in the `lessonId` with your module number
- `[lesson-name]` with your lesson's file name (without .md)
- `[audio-file]` with your audio file name
- In the Quiz component, replace `0` in `correctAnswer` with the index of the correct option (0-based)

### 3. Content Structure
The template includes these main sections:
- Basic Vocabulary
- Interactive Practice (Quiz and Tabs)
- Context Usage
- Grammar Notes
- Practice Exercises
- Vocabulary List
- Cultural Notes
- Next Steps
- Homework

### 4. Component Usage
- Use `<AudioPlayer>` for pronunciation examples
- Use `<Quiz>` for interactive exercises (note: correctAnswer is 0-based)
- Use `<Tabs>` for alternative content views
- Use `:::note` and `:::tip` for important information
- Use `<div className="practice-box">` for example dialogues

### 5. Best Practices
- Keep vocabulary lists concise and focused
- Include IPA pronunciations for new words
- Provide cultural context where relevant
- Include both speaking and writing exercises
- Link to the next lesson in the Next Steps section
- When creating quizzes, ensure the correctAnswer matches the index of the correct option (0-based)

### 6. File Naming
- Use kebab-case for file names (e.g., `days-of-week.md`)
- Keep names short but descriptive
- Include module number in the path

### 7. Audio Files
- Place audio files in `/public/audio/[lesson-name]/`
- Use descriptive names for audio files
- Include both individual word pronunciations and example sentences

## Example Usage

```markdown
---
sidebar_position: 1
title: "Lesson 1: Basic Greetings"
description: Learn how to greet people and introduce yourself in German
---

# Basic Greetings
...
```

## Contributing
When creating new lessons:
1. Follow the template structure exactly
2. Include all required components
3. Test interactive elements
4. Ensure audio files are properly linked
5. Update the module's README to include the new lesson 