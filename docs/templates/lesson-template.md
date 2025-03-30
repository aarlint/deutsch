---
sidebar_position: 1
title: "Lesson X: [Lesson Title]"
description: Brief description of what will be learned in this lesson
---

import AudioPlayer from '../../src/components/AudioPlayer';
import Quiz from '../../src/components/Quiz';
import Pronunciation from '../../src/components/Pronunciation';
import { ProgressProvider } from '../../src/components/ProgressTracker/ProgressContext';
import ProgressBar from '../../src/components/ProgressTracker/ProgressBar';
import LessonCompletion from '../../src/components/ProgressTracker/LessonCompletion';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<ProgressProvider>
  <LessonCompletion lessonId="deutsch-101/module-X/[lesson-name]" title="[Lesson Title]" />
  <ProgressBar />

# [Lesson Title]

[Introduction paragraph explaining what will be learned and why it's important]

## Basic Vocabulary

<div className="lesson-content">

### [Vocabulary Section Title]

| German | English | Pronunciation |
|--------|---------|---------------|
| [Word] | [Translation] | [IPA Pronunciation] |

<AudioPlayer src="/audio/[lesson-name]/[audio-file].mp3" />

</div>

## Interactive Practice

### 1. [Quiz Title]

<Quiz
  quizId="deutsch-101/module-X/[lesson-name]/quiz-1"
  questions={[
    {
      question: "[Question]",
      options: ["[Option 1]", "[Option 2]", "[Option 3]", "[Option 4]"],
      correctAnswer: 0
    }
  ]}
/>

### 2. [Practice Section Title]

<Tabs>
<TabItem value="[tab1]" label="[Tab 1 Label]" default>
  [Content for first tab]
</TabItem>
<TabItem value="[tab2]" label="[Tab 2 Label]">
  [Content for second tab]
</TabItem>
</Tabs>

## Using [Topic] in Context

### [Context Section 1]

<div className="practice-box">
  **Q:** [Question in German]  
  **A:** [Answer in German]
</div>

### [Context Section 2]

<div className="practice-box">
  **Q:** [Question in German]  
  **A:** [Answer in German]
</div>

## Grammar Notes

:::note [Note Title]
- [Grammar point 1]
- [Grammar point 2]
- [Grammar point 3]
:::

:::tip Pronunciation Tips
- [Pronunciation tip 1]
- [Pronunciation tip 2]
- [Pronunciation tip 3]
:::

## Practice Exercises

### 1. Speaking Practice
- [Speaking exercise 1]
- [Speaking exercise 2]
- [Speaking exercise 3]

### 2. Writing Practice
Write out:
- [Writing exercise 1]
- [Writing exercise 2]
- [Writing exercise 3]

### 3. Listening Practice
- [Listening exercise 1]
- [Listening exercise 2]
- [Listening exercise 3]

## Vocabulary List

| German | English | Example |
|--------|---------|----------|
| [Word/Phrase] | [Translation] | [Example sentence] |

## Cultural Notes

:::tip Cultural Insight
In German-speaking countries:
- [Cultural point 1]
- [Cultural point 2]
- [Cultural point 3]
:::

## Next Steps

- [Next step 1]
- [Next step 2]
- Move on to [Next Lesson Link] when you're ready
- Complete the homework exercises

:::note Homework
1. [Homework exercise 1]
2. [Homework exercise 2]
3. [Homework exercise 3]
4. Complete the online exercises
:::

</ProgressProvider> 