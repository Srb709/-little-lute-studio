"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Category = "all" | "cozy-apparel" | "baby" | "bridal" | "bags" | "business";

export type EmbroideryDesign = {
  image: string;
  name: string;
  label: string;
  category: Exclude<Category, "all">;
};

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "cozy-apparel", label: "Cozy apparel" },
  { value: "baby", label: "Baby" },
  { value: "bridal", label: "Bridal" },
  { value: "bags", label: "Bags" },
  { value: "business", label: "Business" },
];

export function EmbroideryGallery({ designs }: { designs: EmbroideryDesign[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const pointerStartX = useRef<number | null>(null);

  const filteredDesigns = useMemo(
    () => designs.filter((design) => activeCategory === "all" || design.category === activeCategory),
    [activeCategory, designs],
  );

  const selectedIndex = selectedName
    ? filteredDesigns.findIndex((design) => design.name === selectedName)
    : -1;
  const selectedDesign = selectedIndex >= 0 ? filteredDesigns[selectedIndex] : null;

  const closeLightbox = useCallback(() => {
    setSelectedName(null);
  }, []);

  const showPrevious = useCallback(() => {
    if (!selectedDesign) return;
    const nextIndex = (selectedIndex - 1 + filteredDesigns.length) % filteredDesigns.length;
    setSelectedName(filteredDesigns[nextIndex].name);
  }, [filteredDesigns, selectedDesign, selectedIndex]);

  const showNext = useCallback(() => {
    if (!selectedDesign) return;
    const nextIndex = (selectedIndex + 1) % filteredDesigns.length;
    setSelectedName(filteredDesigns[nextIndex].name);
  }, [filteredDesigns, selectedDesign, selectedIndex]);

  useEffect(() => {
    if (!selectedDesign) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, selectedDesign, showNext, showPrevious]);

  useEffect(() => {
    if (!selectedName) openerRef.current?.focus();
  }, [selectedName]);

  function selectCategory(category: Category) {
    closeLightbox();
    setActiveCategory(category);
  }

  return (
    <>
      <div className="section-topline">
        <p className="section-label">Recent designs</p>
        <div className="filters" aria-label="Embroidery gallery categories">
          {categories.map((category) => (
            <button
              className={activeCategory === category.value ? "active" : undefined}
              key={category.value}
              type="button"
              aria-pressed={activeCategory === category.value}
              onClick={() => selectCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-grid" aria-live="polite">
        {filteredDesigns.map((design) => (
          <article className="gallery-card" key={design.name}>
            <button
              className="gallery-image-button"
              type="button"
              aria-label={`Enlarge ${design.name}`}
              onClick={(event) => {
                openerRef.current = event.currentTarget;
                setSelectedName(design.name);
              }}
            >
              <Image src={design.image} alt={design.name} width={900} height={970} />
              <span className="gallery-enlarge-hint" aria-hidden="true">view larger ↗</span>
            </button>
            <h3>{design.name}</h3>
            <p>{design.label}</p>
          </article>
        ))}
      </div>

      {selectedDesign ? (
        <div className="gallery-lightbox">
          <button className="gallery-lightbox-backdrop" type="button" aria-label="Close enlarged image" onClick={closeLightbox} />
          <div className="gallery-lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="gallery-lightbox-title">
            <button
              className="gallery-lightbox-close"
              type="button"
              aria-label="Close enlarged image"
              ref={closeButtonRef}
              onClick={closeLightbox}
            >
              ×
            </button>

            <div
              className="gallery-lightbox-image"
              onPointerDown={(event) => { pointerStartX.current = event.clientX; }}
              onPointerUp={(event) => {
                if (pointerStartX.current === null) return;
                const distance = event.clientX - pointerStartX.current;
                pointerStartX.current = null;
                if (distance > 50) showPrevious();
                if (distance < -50) showNext();
              }}
            >
              <Image
                src={selectedDesign.image}
                alt={selectedDesign.name}
                width={1600}
                height={1600}
                priority
                draggable={false}
              />
            </div>

            <div className="gallery-lightbox-caption">
              <div>
                <h2 id="gallery-lightbox-title">{selectedDesign.name}</h2>
                <p>{selectedDesign.label}</p>
              </div>
              <p className="gallery-lightbox-count" aria-live="polite">
                {selectedIndex + 1} / {filteredDesigns.length}
              </p>
            </div>

            <div className="gallery-lightbox-controls">
              <button type="button" onClick={showPrevious} aria-label="Previous design">← previous</button>
              <button type="button" onClick={showNext} aria-label="Next design">next →</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
