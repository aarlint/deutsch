import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import { BsDisplay } from 'react-icons/bs';

export default function PresentLesson({ children, title }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);
  const [slides, setSlides] = useState([]);
  const [lessonTitle, setLessonTitle] = useState('');
  const components = useMDXComponents();

  useEffect(() => {
    // Convert children into slides based on section tags
    const childrenArray = React.Children.toArray(children);
    const newSlides = [];

    childrenArray.forEach((child, index) => {
      if (child.type === 'section') {
        // First try to use the name prop, then fall back to content headings
        let sectionTitle = child.props.name;
        
        if (!sectionTitle && React.isValidElement(child.props.children)) {
          const heading = React.Children.toArray(child.props.children).find(
            child => React.isValidElement(child) && (child.type === 'h1' || child.type === 'h2' || child.type === 'h3')
          );
          if (heading) {
            sectionTitle = heading.props.children;
          }
        }

        newSlides.push({
          content: child.props.children,
          title: sectionTitle || `Section ${index + 1}`
        });
      }
    });

    setSlides(newSlides);

    // Extract title from first section if no title prop is provided
    if (!title && newSlides.length > 0) {
      setLessonTitle(newSlides[0].title);
    } else if (title) {
      setLessonTitle(title);
    }
  }, [children, title]);

  // Handle body scroll lock
  useEffect(() => {
    if (isPresenting) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPresenting]);

  const handleKeyPress = (event) => {
    if (!isPresenting) return;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        setCurrentSlide(prev => Math.max(prev - 1, 0));
        break;
      case 'Escape':
        setIsPresenting(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isPresenting) {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [isPresenting]);

  if (!isPresenting) {
    return (
      <>
        <div className={styles.presentButtonContainer}>
          <button
            className={styles.presentButton}
            onClick={() => setIsPresenting(true)}
          >
            <BsDisplay className={styles.buttonIcon} />
            Present Lesson
          </button>
          <div className={`${styles.downLine} ${styles.left}`} />
          <div className={`${styles.downLine} ${styles.right}`} />
        </div>
        {children}
      </>
    );
  }

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h2>{lessonTitle || 'Lesson Presentation'}</h2>
          <button
            className={styles.closeButton}
            onClick={() => setIsPresenting(false)}
          >
            ×
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarContent}>
              {slides.map((slide, index) => (
                <button
                  key={index}
                  className={`${styles.sidebarItem} ${currentSlide === index ? styles.active : ''}`}
                  onClick={() => setCurrentSlide(index)}
                >
                  {slide.title}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.slideContent}>
            <div className={styles.slideCard}>
              <MDXProvider components={components}>
                {slides[currentSlide]?.content}
              </MDXProvider>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <div className={styles.presentationControls}>
            <button
              className={styles.controlButton}
              onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
              disabled={currentSlide === 0}
            >
              Previous
            </button>
            <span className={styles.slideCounter}>
              Slide {currentSlide + 1} of {slides.length}
            </span>
            <button
              className={styles.controlButton}
              onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
              disabled={currentSlide === slides.length - 1}
            >
              Next
            </button>
          </div>
          <div className={styles.presentationInstructions}>
            Use arrow keys to navigate • ESC to exit
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
} 