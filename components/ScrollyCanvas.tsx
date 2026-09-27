"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 144;
const FRAME_PREFIX = "/sequence/frame_";
const FRAME_SUFFIX = "_delay-0.041s.webp";

const pad = (num: number, size: number) => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `${FRAME_PREFIX}${pad(i, 3)}${FRAME_SUFFIX}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Frame index mapped from scroll progress
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Render to canvas
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!imagesLoaded || !canvasRef.current || !images.length) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const index = Math.round(latest);
    const img = images[index];

    if (img) {
      const canvas = canvasRef.current;
      // Handle object-fit: cover logic
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    }
  });

  // Handle Canvas Resizing
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Trigger a re-render of the current frame on resize
        frameIndex.set(frameIndex.get());
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial sizing
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex]);

  // Overlay opacity/transforms based on scroll
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.25, 0.5], [50, -50]);
  const text3Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.55, 0.8], [50, -50]);

  return (
    <div
      ref={containerRef}
      className="relative h-[500vh] w-full bg-background"
      style={{ backgroundColor: 'hsl(var(--background, 222.2 84% 4.9%))' }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Loading State */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-50 bg-[#121212]">
            <div className="text-white/50 text-sm animate-pulse tracking-widest uppercase">
              Loading Sequence...
            </div>
          </div>
        )}
        {/* The Canvas */}
        <canvas
          ref={canvasRef}
          className="block h-full w-full object-cover"
        />
        {/* Parallax Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center px-6 md:px-24">
          {/* Section 1 */}
          <motion.div 
            style={{ opacity: text1Opacity, y: text1Y }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-4 drop-shadow-2xl">
              AI Enthusiast.
            </h1>
            <p className="text-lg md:text-2xl text-white/70 font-light max-w-xl text-balance">
              Designing end-to-end AI pipelines, LLM integrations, and automation systems that think and act.
            </p>
          </motion.div>
          {/* Section 2 */}
          <motion.div 
            style={{ opacity: text2Opacity, y: text2Y }}
            className="absolute inset-0 flex flex-col items-start justify-center"
          >
            <div className="max-w-3xl pl-4 md:pl-0">
              <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-white mb-6 drop-shadow-2xl">
                I build AI-powered systems..
              </h2>
              <p className="text-lg md:text-xl text-white/60 font-light max-w-lg leading-relaxed">
                Transforming data and models into scalable, intelligent applications that solve real-world problems.
              </p>
            </div>
          </motion.div>
          {/* Section 3 */}
          <motion.div 
            style={{ opacity: text3Opacity, y: text3Y }}
            className="absolute inset-0 flex flex-col items-end justify-center text-right pr-4 md:pr-0"
          >
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-white mb-6 drop-shadow-2xl">
                Bridging AI models & real-world systems.
              </h2>
              <p className="text-lg md:text-xl text-white/60 font-light max-w-lg ml-auto leading-relaxed">
                 Combining machine learning, APIs, and backend to deliver intelligent, production-ready solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
