import React, { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Maximize, Info } from "lucide-react";

export default function ScrollingPosters() {
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [imageScale, setImageScale] = useState(1);
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Generate poster array
  const posters = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `/posters/${i + 1}.png`,
    alt: `Poster ${i + 1}`,
    title: `Premium Collection ${i + 1}`,
    description: `High-quality lens poster featuring advanced optical technology and design`,
    hasSrp: i + 1 <= 9,
  }));

  // Responsive calculations
  const getPostersPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const [postersPerView, setPostersPerView] = useState(getPostersPerView());
  const maxScrollIndex = Math.max(0, posters.length - postersPerView);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setPostersPerView(getPostersPerView());
      setIsSmallScreen(window.innerWidth < 768); // md breakpoint
    };
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentScrollIndex(prev => 
          prev >= maxScrollIndex ? 0 : prev + 1
        );
      }, 3000);
    } else {
      clearInterval(autoPlayRef.current);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [autoPlay, maxScrollIndex]);

  // Manual scroll functions
  const scrollLeft = () => {
    if (currentScrollIndex > 0) {
      setCurrentScrollIndex(currentScrollIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentScrollIndex < maxScrollIndex) {
      setCurrentScrollIndex(currentScrollIndex + 1);
    }
  };

  // Auto-scroll with smooth transition
  useEffect(() => {
    if (scrollContainerRef.current) {
      const posterWidth = window.innerWidth < 640 ? 280 : window.innerWidth < 1024 ? 320 : 320;
      const gap = window.innerWidth < 640 ? 16 : 32;
      const scrollDistance = (posterWidth + gap) * currentScrollIndex;
      
      scrollContainerRef.current.style.transform = `translateX(-${scrollDistance}px)`;
    }
  }, [currentScrollIndex, postersPerView]);

  const openModal = (poster, index) => {
    setSelectedPoster(poster);
    setCurrentModalIndex(index);
    setScrollPosition({ x: 0, y: 0 });
    setImageScale(1);
    setShowInfo(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPoster(null);
    setScrollPosition({ x: 0, y: 0 });
    setImageScale(1);
    setIsFullscreen(false);
    setShowInfo(false);
    document.body.style.overflow = 'auto';
  };

  // Navigate between posters in modal
  const navigateModal = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentModalIndex + 1) % posters.length
      : (currentModalIndex - 1 + posters.length) % posters.length;
    
    setCurrentModalIndex(newIndex);
    setSelectedPoster(posters[newIndex]);
    setScrollPosition({ x: 0, y: 0 });
    setImageScale(1);
  };

  // Enhanced drag and zoom handlers
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - scrollPosition.x,
      y: e.clientY - scrollPosition.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    // Constrain movement based on scale
    const container = containerRef.current;
    if (container && imageRef.current) {
      const containerRect = container.getBoundingClientRect();
      const imageRect = imageRef.current.getBoundingClientRect();
      
      const maxX = Math.max(0, (imageRect.width * imageScale - containerRect.width) / 2);
      const maxY = Math.max(0, (imageRect.height * imageScale - containerRect.height) / 2);
      
      const constrainedX = Math.min(Math.max(newX, -maxX), maxX);
      const constrainedY = Math.min(Math.max(newY, -maxY), maxY);
      
      setScrollPosition({ x: constrainedX, y: constrainedY });
    } else {
      setScrollPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({
        x: touch.clientX - scrollPosition.x,
        y: touch.clientY - scrollPosition.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const newX = touch.clientX - dragStart.x;
    const newY = touch.clientY - dragStart.y;
    
    setScrollPosition({ x: newX, y: newY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    
    if (e.ctrlKey || e.metaKey) {
      // Zoom with Ctrl/Cmd + scroll
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      const newScale = Math.min(Math.max(imageScale + delta, 0.5), 4);
      setImageScale(newScale);
    } else {
      // Pan with scroll
      const newX = scrollPosition.x - e.deltaX * 0.5;
      const newY = scrollPosition.y - e.deltaY * 0.5;
      setScrollPosition({ x: newX, y: newY });
    }
  };

  const handleKeyDown = (e) => {
    if (!selectedPoster) return;
    
    switch (e.key) {
      case 'Escape':
        closeModal();
        break;
      case 'ArrowLeft':
        navigateModal('prev');
        break;
      case 'ArrowRight':
        navigateModal('next');
        break;
      case '+':
      case '=':
        setImageScale(Math.min(imageScale + 0.2, 4));
        break;
      case '-':
        setImageScale(Math.max(imageScale - 0.2, 0.5));
        break;
      case '0':
        setImageScale(1);
        setScrollPosition({ x: 0, y: 0 });
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedPoster, imageScale, currentModalIndex]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, dragStart, scrollPosition, imageScale]);

  // Reset position when image scale changes
  useEffect(() => {
    if (imageScale === 1) {
      setScrollPosition({ x: 0, y: 0 });
    }
  }, [imageScale]);

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 lg:mb-16">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-3 sm:mb-4 lg:mb-6">
            Our Gallery
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Discover our premium lens collection through these stunning visuals
          </p>
        </div>
      </div>

      {/* Gallery Container */}
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          disabled={currentScrollIndex === 0}
          className={`absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 ${
            currentScrollIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
          }`}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          disabled={currentScrollIndex >= maxScrollIndex}
          className={`absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 ${
            currentScrollIndex >= maxScrollIndex ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
          }`}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
        </button>

        {/* Scrolling Container */}
        <div className="overflow-hidden px-8 sm:px-12 lg:px-16">
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 sm:space-x-6 lg:space-x-8 transition-transform duration-500 ease-in-out"
          >
            {posters.map((poster, index) => (
              <div
                key={poster.id}
                className="relative group overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 flex-shrink-0 cursor-pointer"
                onClick={() => openModal(poster, index)}
              >
                <img
                  src={poster.src}
                  alt={poster.alt}
                  className="w-[280px] sm:w-80 h-[20rem] sm:h-[24rem] lg:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-base sm:text-lg font-semibold mb-1">{poster.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-200">Click to view full size</p>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Maximize className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
          {Array.from({ length: maxScrollIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentScrollIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentScrollIndex
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedPoster && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full h-full max-w-none max-h-none flex items-center justify-center p-2 sm:p-4">
            {/* Top Controls */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-20 flex justify-between items-center">
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
                >
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
                <span className="text-white text-sm sm:text-base font-medium">
                  {currentModalIndex + 1} / {posters.length}
                </span>
              </div>
              <button
                onClick={closeModal}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigateModal('prev')}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button
              onClick={() => navigateModal('next')}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Bottom Controls */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-1 sm:gap-2 bg-white/20 backdrop-blur-sm rounded-full p-2">
              <button
                onClick={() => setImageScale(Math.max(imageScale - 0.2, 0.5))}
                className="bg-white/20 hover:bg-white/30 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white transition-all duration-300"
              >
                <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => {
                  setImageScale(1);
                  setScrollPosition({ x: 0, y: 0 });
                }}
                className="bg-white/20 hover:bg-white/30 rounded-full px-2 sm:px-3 py-1 sm:py-2 text-white text-xs sm:text-sm font-medium transition-all duration-300"
              >
                <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={() => setImageScale(Math.min(imageScale + 0.2, 4))}
                className="bg-white/20 hover:bg-white/30 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white transition-all duration-300"
              >
                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Info Panel */}
            {showInfo && (
              <div className="absolute top-16 sm:top-20 left-2 sm:left-4 max-w-xs sm:max-w-sm bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 z-20">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">{selectedPoster.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">{selectedPoster.description}</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Use mouse wheel or pinch to zoom</p>
                  <p>• Drag to pan around the image</p>
                  <p>• Arrow keys to navigate</p>
                  <p>• Press ESC to close</p>
                </div>
              </div>
            )}

            {/* Modal Content - Fixed aspect ratio containers */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6 w-full h-full">
              {/* Main Poster - Hide on small screens if SRP exists */}
              {(!isSmallScreen || !selectedPoster.hasSrp) && (
                <div className={`relative ${selectedPoster.hasSrp && !isSmallScreen ? 'w-full lg:w-1/2' : 'w-full max-w-2xl'} h-[60vh] sm:h-[70vh] lg:h-[85vh] flex-shrink-0`}>
                  <div 
                    ref={containerRef}
                    className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl cursor-grab active:cursor-grabbing bg-gray-900"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    onWheel={handleWheel}
                    onDoubleClick={() => {
                      setImageScale(imageScale === 1 ? 2 : 1);
                      setScrollPosition({ x: 0, y: 0 });
                    }}
                  >
                    <img
                      ref={imageRef}
                      src={selectedPoster.src}
                      alt={selectedPoster.alt}
                      className="w-full h-full object-contain transition-transform duration-200 select-none"
                      style={{
                        transform: `translate(${scrollPosition.x}px, ${scrollPosition.y}px) scale(${imageScale})`,
                        transformOrigin: 'center center'
                      }}
                      draggable={false}
                    />
                  </div>
                </div>
              )}

              {/* SRP Price List - Full width on small screens */}
              {selectedPoster.hasSrp && (
                <div className={`relative ${isSmallScreen ? 'w-full' : 'w-full lg:w-1/2'} h-[60vh] sm:h-[70vh] lg:h-[85vh] flex-shrink-0`}>
                  <div 
                    className="relative w-full h-full overflow-hidden rounded-lg shadow-lg cursor-grab active:cursor-grabbing bg-gray-900"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    onWheel={handleWheel}
                    onDoubleClick={() => {
                      setImageScale(imageScale === 1 ? 2 : 1);
                      setScrollPosition({ x: 0, y: 0 });
                    }}
                  >
                    <img
                      src={`/srp/${selectedPoster.id}.png`}
                      alt={`Price list for ${selectedPoster.alt}`}
                      className="w-full h-full object-contain transition-transform duration-200 select-none"
                      style={{
                        transform: `translate(${scrollPosition.x}px, ${scrollPosition.y}px) scale(${imageScale})`,
                        transformOrigin: 'center center'
                      }}
                      draggable={false}
                    />
                  </div>
                </div>
              )}

              {/* No SRP message - Only show on small screens when no SRP */}
              {!selectedPoster.hasSrp && isSmallScreen && (
                <div className="w-full max-w-md h-32 sm:h-40 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">No Price List Available</h3>
                    <p className="text-sm text-gray-300">This poster doesn't have an associated price list.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeModal}></div>
        </div>
      )}
    </section>
  );
}