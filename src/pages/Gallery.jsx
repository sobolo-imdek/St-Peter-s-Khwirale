import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { schoolData } from "../data/content";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <MainLayout>
            <div className="bg-school-background min-h-screen">
                {/* Gallery Grid */}
                <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {schoolData.gallery.map((img, index) => (
                            <div
                                key={index}
                                className="aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-all hover:scale-[1.02] shadow-sm hover:shadow-md"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={typeof img === 'string' ? img : img.src}
                                    alt={typeof img === 'string' ? `Gallery image ${index + 1}` : img.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </section>
//add controls on the gallery to the left and right of the image when it is selected

                {/* Lightbox / Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white text-4xl font-bold hover:text-school-secondary transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                        <div className="relative max-w-full max-h-full">
                            <img
                                src={typeof selectedImage === 'string' ? selectedImage : selectedImage.src}
                                alt={typeof selectedImage === 'string' ? "Enlarged view" : selectedImage.alt || "Enlarged view"}
                                className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}
