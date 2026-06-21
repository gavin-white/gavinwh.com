import React, { useEffect, useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import './Intro.css';

const SPECIALTY_BLURBS = [
  'solving hard problems in\ncomplex distributed systems',
  'building resilient backend\nservices at scale',
  'designing elegant interfaces\nfor complex systems',
  'building reliable services\nwith event-driven architecture',
  'optimizing data infrastructure\nfor high-volume workflows',
];

const LINE_STAGGER_MS = 400;
const LINE_FADE_DURATION_MS = 800;
const BLURB_HOLD_MS = 4000;

type LineAnim = 'visible' | 'hiding' | 'hidden' | 'showing';

const lineAnimClass = (anim: LineAnim) => {
  switch (anim) {
    case 'visible':
      return 'is-visible';
    case 'hiding':
      return 'is-hiding';
    case 'hidden':
      return 'is-hidden';
    default:
      return 'is-showing';
  }
};

const splitBlurb = (blurb: string) => {
  const [line1, line2 = ''] = blurb.split('\n');
  return { line1, line2 };
};

const Intro: React.FC = () => {
  const indexRef = useRef(Math.floor(Math.random() * SPECIALTY_BLURBS.length));
  const [activeIndex, setActiveIndex] = useState(indexRef.current);
  const [line1Anim, setLine1Anim] = useState<LineAnim>('hidden');
  const [line2Anim, setLine2Anim] = useState<LineAnim>('hidden');

  const { line1, line2 } = splitBlurb(SPECIALTY_BLURBS[activeIndex]);

  useEffect(() => {
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const delay = (ms: number) =>
      new Promise<void>((resolve) => {
        timeouts.push(
          setTimeout(() => {
            if (!cancelled) {
              resolve();
            }
          }, ms)
        );
      });

    const staggerOut = async () => {
      setLine2Anim('hiding');
      await delay(LINE_STAGGER_MS);
      setLine1Anim('hiding');
      await delay(LINE_FADE_DURATION_MS);
      setLine1Anim('hidden');
      setLine2Anim('hidden');
    };

    const staggerIn = async () => {
      setLine1Anim('showing');
      await delay(LINE_STAGGER_MS);
      setLine2Anim('showing');
      await delay(LINE_FADE_DURATION_MS);
      setLine1Anim('visible');
      setLine2Anim('visible');
    };

    const run = async () => {
      await delay(150);
      await staggerIn();

      while (!cancelled) {
        await delay(BLURB_HOLD_MS);
        await staggerOut();
        indexRef.current = (indexRef.current + 1) % SPECIALTY_BLURBS.length;
        setActiveIndex(indexRef.current);
        await delay(40);
        await staggerIn();
      }
    };

    run();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="intro bg-grid" id="home">
      <div className="intro-content">
        <h1 className="intro-title">
          Hello, I'm <strong>Gavin White</strong>
        </h1>
        <div className="intro-subtitle">
          <p className="intro-role">Software Engineer</p>
          <div className="intro-specialty-stagger">
            <div className="intro-specialty-sizer" aria-hidden="true">
              {SPECIALTY_BLURBS.map((blurb) => (
                <span key={blurb}>{blurb}</span>
              ))}
            </div>
            <div className="intro-specialty-lines">
              <p className={`intro-specialty-line ${lineAnimClass(line1Anim)}`}>{line1}</p>
              <p className={`intro-specialty-line ${lineAnimClass(line2Anim)}`}>{line2}</p>
            </div>
          </div>
        </div>
        <Tilt className="tilt" tiltMaxAngleX={2.5} tiltMaxAngleY={2.5} scale={1} transitionSpeed={100}>
          <img src={`${process.env.PUBLIC_URL}/img/gavinpic.jpg`} alt="Gavin" className="intro-img" />
        </Tilt>
      </div>
    </section>
  );
};

export default Intro;
