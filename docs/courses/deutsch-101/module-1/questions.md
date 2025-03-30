---
sidebar_position: 3
title: "Lesson 3: Basic Questions"
description: Learn how to ask and answer basic questions in German
---

import AudioPlayer from '../../../../src/components/AudioPlayer';
import Quiz from '../../../../src/components/Quiz';
import Pronunciation from '../../../../src/components/Pronunciation';
import { ProgressProvider } from '../../../../src/components/ProgressTracker/ProgressContext';
import ProgressBar from '../../../../src/components/ProgressTracker/ProgressBar';
import LessonCompletion from '../../../../src/components/ProgressTracker/LessonCompletion';
import PresentLesson from '../../../../src/components/PresentLesson';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<ProgressProvider>
  <LessonCompletion lessonId="deutsch-101/module-1/questions" title="Basic Questions and Answers" />
  <ProgressBar />

# Basic Questions and Answers

<PresentLesson title="Basic Questions and Answers">
  <section name="Introduction">
    ## Introduction
    In this lesson, you'll learn how to ask and answer common questions in German. This is a crucial skill for everyday conversations!
  </section>

  <section name="Question Words">
    ## Essential Question Words
    ### Basic Question Words
    | German | English | Example |
    |--------|---------|----------|
    | Was? | What? | Was ist das? |
    | Wer? | Who? | Wer ist das? |
    | Wo? | Where? | Wo wohnst du? |
    | Wann? | When? | Wann kommst du? |
    | Wie? | How? | Wie geht es dir? |
    | Warum? | Why? | Warum lernst du Deutsch? |

    <Pronunciation word="Was" ipa="vas" />
    <AudioPlayer src="/audio/questions/question-words.mp3" />

    :::tip Grammar Tip
    In German, question words are always placed at the beginning of the sentence, followed by the verb.
    :::
  </section>

  <section name="Common Questions">
    ## Common Questions and Answers
    ### Personal Information
    <Tabs>
    <TabItem value="name" label="Name" default>
      **Q:** Wie heißt du?  
      **A:** Ich heiße Anna.
    </TabItem>
    <TabItem value="age" label="Age">
      **Q:** Wie alt bist du?  
      **A:** Ich bin 25 Jahre alt.
    </TabItem>
    <TabItem value="origin" label="Origin">
      **Q:** Woher kommst du?  
      **A:** Ich komme aus Deutschland.
    </TabItem>
    </Tabs>

    <AudioPlayer src="/audio/questions/personal-info.mp3" />

    ### Well-being
    :::practice-box
    **Q:** Wie geht es dir?  
    **A:** Mir geht es gut, danke! Und dir?

    **Q:** Wie geht es Ihnen?  
    **A:** Danke, sehr gut!
    :::

    <Pronunciation word="Wie geht es dir" ipa="viː ɡeːt ɛs diːɐ̯" />
    <AudioPlayer src="/audio/questions/well-being.mp3" />
  </section>

  <section name="Grammar Notes">
    ## Grammar Notes
    :::note Question Structure
    1. Question word (Was, Wer, Wo, etc.)
    2. Verb
    3. Subject (if not the question word)
    4. Rest of the sentence
    :::

    :::tip Formal vs Informal
    - Use "du" for informal situations (friends, family)
    - Use "Sie" for formal situations (business, strangers)
    :::
  </section>

  <section name="Cultural Notes">
    ## Cultural Notes
    :::tip Cultural Insight
    In German-speaking countries:
    - It's common to ask "Wie geht es dir?" as a greeting
    - People often share their profession when introducing themselves
    - Age is not considered a sensitive topic
    :::
  </section>
</PresentLesson>

## Interactive Practice

### 1. Question Formation Quiz

<Quiz
  quizId="deutsch-101/module-1/questions/quiz-1"
  questions={[
    {
      question: "Which question word means 'What'?",
      options: ["Was", "Wer", "Wo", "Wann"],
      correctAnswer: 0
    },
    {
      question: "Which question word means 'Where'?",
      options: ["Was", "Wer", "Wo", "Wann"],
      correctAnswer: 2
    },
    {
      question: "Which question word means 'Who'?",
      options: ["Was", "Wer", "Wo", "Wann"],
      correctAnswer: 1
    }
  ]}
/>

### 2. Practice Dialog

<div className="dialog-box">
  🗣️ **Person A:** Hallo! Wie geht es dir?  
  👥 **Person B:** Mir geht es gut, danke! Und dir?  
  🗣️ **Person A:** Auch gut! Wie heißt du?  
  👥 **Person B:** Ich heiße Thomas. Und du?  
  🗣️ **Person A:** Ich bin Anna. Woher kommst du?  
  👥 **Person B:** Ich komme aus Berlin. Und du?  
  🗣️ **Person A:** Ich komme aus München.
</div>

<AudioPlayer src="/audio/dialogs/questions-dialog.mp3" />

## Practice Exercises

### 1. Speaking Practice
- Record yourself asking and answering these questions
- Practice with a partner
- Try both formal and informal versions

### 2. Writing Practice
Write three questions and answers about:
- Personal information
- Well-being
- Origin

### 3. Listening Practice
- Listen to the audio samples
- Try to identify the question words
- Practice the pronunciation

## Vocabulary List

| German | English | Example |
|--------|---------|----------|
| Wie heißt du? | What's your name? | Wie heißt du? Ich heiße Anna. |
| Wie alt bist du? | How old are you? | Ich bin 25 Jahre alt. |
| Woher kommst du? | Where are you from? | Ich komme aus Deutschland. |
| Wie geht es dir? | How are you? | Mir geht es gut, danke! |
| Was machst du? | What do you do? | Ich bin Student. |

## Next Steps

- Practice these questions in daily conversations
- Try creating your own questions using the question words
- Move on to [Numbers and Counting](./numbers) when you're ready
- Complete the homework exercises

:::note Homework
1. Create a dialog using at least three different questions
2. Practice the formal and informal versions
3. Record yourself asking and answering questions
4. Complete the online exercises
:::

</ProgressProvider> 