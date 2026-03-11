'use client';

import { Compare } from '@/components/ui/compare';
import { Footer } from '@/components/footer';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { motion } from 'motion/react';
// Skutočné fotky pred a po tepovaní - nahraďte vlastnými fotkami
const galleryImages = [
  {
    id: 1,
    before: '/gallery/1_dirty.avif',
    after: '/gallery/1_clean.avif'
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 3,
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center',
    after: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 4,
    before: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 5,
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center',
    after: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 6,
    before: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 7,
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center',
    after: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center'
  },
  {
    id: 8,
    before: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center'
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-sides mb-2.5 py-20">
        <div className="w-full">
          <div className="flex justify-end">
            <div className="px-sides">
              <TextGenerateEffect 
                words="Galéria našich prác" 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black leading-tight text-right whitespace-pre-line"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-sides">
        <div className="grid grid-cols-3 gap-6 lg:gap-8">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  {/* Compare Component */}
                  <div className="relative">
                    <Compare
                      firstImage={item.after}
                      secondImage={item.before}
                      className="w-full aspect-square"
                      slideMode="drag"
                      showHandlebar={true}
                      autoplay={false}
                      initialSliderPercentage={50}
                    />
                    
                    {/* Overlay with labels */}
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Po
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Pred
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
}
