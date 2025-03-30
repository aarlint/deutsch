---
sidebar_position: 1
title: "Lesson 1: Greetings & Introductions"
description: Learn basic German greetings and how to introduce yourself
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
  <LessonCompletion lessonId="deutsch-101/module-1/greetings" title="Greetings & Introductions" />
  <ProgressBar />

# Greetings & Introductions

<PresentLesson title="Greetings & Introductions">
  <section name="Introduction">
    ## Introduction
    Welcome to your first German lesson! Let's learn how to greet people and introduce yourself.
  </section>

  <section name="Basic Greetings">
    ## Basic Greetings
    ### Formal Greetings
    | German | English | Usage |
    |--------|---------|--------|
    | Guten Morgen | Good morning | Until ~11:00 |
    | Guten Tag | Good day/Hello | All day |
    | Guten Abend | Good evening | After ~18:00 |
    | Auf Wiedersehen | Goodbye | Formal goodbye |

    <Pronunciation word="Guten Morgen" ipa="ˈɡuːtn̩ ˈmɔʁɡn̩" />
    <AudioPlayer src="/audio/greetings/guten-morgen.mp3" />

    ### Informal Greetings
    | German | English | Usage |
    |--------|---------|--------|
    | Hallo | Hello | Any time |
    | Hi | Hi | Very informal |
    | Tschüss | Bye | Informal goodbye |
    | Ciao | Bye | Very informal |

    <Pronunciation word="Hallo" ipa="haˈloː" />
    <AudioPlayer src="/audio/greetings/hallo.mp3" />
  </section>

  <section name="Introductions">
    ## Introducing Yourself
    ### Basic Phrases
    1. **"Ich heiße..."** (My name is...)
       <Pronunciation word="Ich heiße" ipa="ɪç ˈhaɪ̯sə" />
       <AudioPlayer src="/audio/introductions/ich-heisse.mp3" />

    2. **"Ich bin..."** (I am...)
       <Pronunciation word="Ich bin" ipa="ɪç bɪn" />
       <AudioPlayer src="/audio/introductions/ich-bin.mp3" />

    ### Practice Dialog
    🗣️ **Person A:** Guten Tag! Ich bin Anna.  
    👥 **Person B:** Hallo Anna! Ich heiße Thomas.  
    🗣️ **Person A:** Freut mich!  
    👥 **Person B:** Mich auch!

    <AudioPlayer src="/audio/dialogs/introduction-dialog.mp3" />
  </section>

  <section name="Grammar Notes">
    ## Grammar Notes
    :::note Formal vs Informal
    - Use "du" for informal situations (friends, family)
    - Use "Sie" for formal situations (business, strangers)
    :::

    :::tip Pronunciation Tips
    - "ei" is pronounced like "eye"
    - "ß" is pronounced like "ss"
    - "ch" is pronounced like "kh"
    :::
  </section>

  <section name="Cultural Notes">
    ## Cultural Notes
    :::tip Cultural Insight
    In German-speaking countries, it's common to:
    - Shake hands when meeting someone formally
    - Be more formal in business settings
    - Use formal greetings with people you don't know
    - Say "Grüß Gott" in southern Germany and Austria
    :::
  </section>
</PresentLesson>

## Interactive Exercises

### 1. Match the Greeting

<Quiz
  quizId="deutsch-101/module-1/greetings/quiz-1"
  questions={[
    {
      question: "What's the appropriate greeting in the morning?",
      options: ["Guten Morgen", "Guten Abend", "Tschüss", "Auf Wiedersehen"],
      correctAnswer: 0
    },
    {
      question: "Which greeting is informal?",
      options: ["Guten Tag", "Auf Wiedersehen", "Hallo", "Guten Abend"],
      correctAnswer: 2
    }
  ]}
/>

### 2. Fill in the Blanks

Complete these introductions:

1. "_______ Tag! Ich _______ Maria."
2. "Hallo! _______ bin Thomas."

<details>
<summary>Show Answers</summary>

1. "Guten Tag! Ich heiße Maria."
2. "Hallo! Ich bin Thomas."

</details>

## Practice Tasks

1. 🗣️ **Speaking Practice**
   - Record yourself saying each greeting
   - Practice the dialog with a partner
   - Try introducing yourself in different ways

2. ✍️ **Writing Practice**
   - Write a short dialog introducing yourself
   - Create three different introductions (formal/informal)
   - Write responses to common greetings

3. 👂 **Listening Practice**
   - Listen to the audio samples multiple times
   - Try to mimic the pronunciation
   - Practice with native audio content

## Vocabulary List

| German | English | Example |
|--------|---------|----------|
| Guten Morgen | Good morning | Guten Morgen! Wie geht's? |
| Hallo | Hello | Hallo! Ich bin Anna. |
| Ich heiße | My name is | Ich heiße Thomas. |
| Ich bin | I am | Ich bin Lehrer. |
| Freut mich | Nice to meet you | Freut mich, Sie kennenzulernen! |
| Auf Wiedersehen | Goodbye | Auf Wiedersehen, bis morgen! |

## Next Steps

- Practice these greetings throughout the day
- Try using different introductions in various situations
- Move on to [Basic Questions and Answers](./questions) when you're ready
- Complete the homework exercises in your workbook

:::note Homework
1. Write three different dialogs using the greetings learned
2. Record yourself practicing the pronunciation
3. Complete the online exercises in the student portal
:::

</ProgressProvider> 