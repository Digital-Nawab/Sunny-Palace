import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'

export const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [visibleImages, setVisibleImages] = useState(16);

    const allImagePaths = [
        { image: '/assets/img/gallery/gallery/g3.webp', alt: 'Image 1' },
        { image: '/assets/img/gallery/gallery/g4.webp', alt: 'Image 2' },
        { image: '/assets/img/gallery/gallery/g5.webp', alt: 'Image 3' },
        { image: '/assets/img/gallery/gallery/g6.webp', alt: 'Image 4' },
        { image: '/assets/img/gallery/gallery/g12.webp', alt: 'Image 5' },
        { image: '/assets/img/gallery/gallery/g13.webp', alt: 'Image 6' },
        { image: '/assets/img/gallery/gallery/gallery1.webp', alt: 'Image 7' },
        { image: '/assets/img/gallery/gallery/gallery2.webp', alt: 'Image 8' },
        { image: '/assets/img/gallery/gallery/gallery3.webp', alt: 'Image 9' },
        { image: '/assets/img/gallery/gallery/gallery4.webp', alt: 'Image 10' },
        { image: '/assets/img/gallery/gallery/gallery5.webp', alt: 'Image 11' },
        { image: '/assets/img/gallery/gallery/gallery7.webp', alt: 'Image 12' },
        { image: '/assets/img/gallery/gallery/gallery8.webp', alt: 'Image 13' },
        { image: '/assets/img/gallery/gallery/gallery9.webp', alt: 'Image 17' },
        { image: '/assets/img/gallery/gallery/gallery10.webp', alt: 'Image 15' },
        { image: '/assets/img/gallery/gallery/gallery11.webp', alt: 'Image 16' },
        { image: '/assets/img/gallery/gallery/gallery12.webp', alt: 'Image 17' },
        { image: '/assets/img/gallery/gallery/IMG_0229.webp', alt: 'Image 18' },
        { image: '/assets/img/gallery/gallery/IMG_0230.webp', alt: 'Image 19' },
        { image: '/assets/img/gallery/gallery/IMG_0231.webp', alt: 'Image 20' },
        { image: '/assets/img/gallery/gallery/IMG_0232.webp', alt: 'Image 21' },
        { image: '/assets/img/gallery/gallery/IMG_0248.webp', alt: 'Image 22' },
        { image: '/assets/img/gallery/gallery/IMG_0249.webp', alt: 'Image 23' },
        { image: '/assets/img/gallery/gallery/IMG_0252.webp', alt: 'Image 24' },
        { image: '/assets/img/gallery/gallery/IMG_0254.webp', alt: 'Image 25' },
        { image: '/assets/img/gallery/gallery/IMG_0257.webp', alt: 'Image 26' },
        { image: '/assets/img/gallery/gallery/IMG_0261.webp', alt: 'Image 27' },
        { image: '/assets/img/gallery/gallery/IMG_0263.webp', alt: 'Image 28' },
        { image: '/assets/img/gallery/gallery/IMG_0267.webp', alt: 'Image 29' },
        { image: '/assets/img/gallery/gallery/IMG_0641.webp', alt: 'Image 30' },
        { image: '/assets/img/gallery/gallery/IMG_0642.webp', alt: 'Image 31' },
        { image: '/assets/img/gallery/gallery/IMG_0650.webp', alt: 'Image 32' },
        { image: '/assets/img/gallery/gallery/IMG_0654.webp', alt: 'Image 33' },
        { image: '/assets/img/gallery/gallery/IMG_0666.webp', alt: 'Image 34' },
        { image: '/assets/img/gallery/gallery/IMG_0669.webp', alt: 'Image 35' },
        { image: '/assets/img/gallery/gallery/IMG_0674.webp', alt: 'Image 36' },
        { image: '/assets/img/gallery/gallery/IMG_0677.webp', alt: 'Image 37' },
        { image: '/assets/img/gallery/gallery/IMG_0679.webp', alt: 'Image 38' },
        { image: '/assets/img/gallery/gallery/IMG_0682.webp', alt: 'Image 39' },
        { image: '/assets/img/gallery/gallery/IMG_0696.webp', alt: 'Image 40' },
        { image: '/assets/img/gallery/gallery/IMG_0708.webp', alt: 'Image 41' },
        { image: '/assets/img/gallery/gallery/IMG_0719.webp', alt: 'Image 42' },
        { image: '/assets/img/gallery/gallery/IMG_0728.webp', alt: 'Image 43' },
        { image: '/assets/img/gallery/gallery/IMG_0729.webp', alt: 'Image 44' },
        { image: '/assets/img/gallery/gallery/IMG_0731.webp', alt: 'Image 45' },
        { image: '/assets/img/gallery/gallery/IMG_0736.webp', alt: 'Image 46' },
        { image: '/assets/img/gallery/gallery/IMG_0737.webp', alt: 'Image 47' },
        { image: '/assets/img/gallery/gallery/IMG_0744.webp', alt: 'Image 48' },
        { image: '/assets/img/gallery/gallery/IMG_0745.webp', alt: 'Image 49' },
        { image: '/assets/img/gallery/gallery/IMG_0750.webp', alt: 'Image 50' },
        { image: '/assets/img/gallery/gallery/IMG_0751.webp', alt: 'Image 51' },
        { image: '/assets/img/gallery/gallery/IMG_0756.webp', alt: 'Image 52' },
        { image: '/assets/img/gallery/gallery/IMG_0757.webp', alt: 'Image 53' },
        { image: '/assets/img/gallery/gallery/IMG_0760.webp', alt: 'Image 54' },
        { image: '/assets/img/gallery/gallery/IMG_0761.webp', alt: 'Image 55' },
        { image: '/assets/img/gallery/gallery/IMG_5514.webp', alt: 'Image 56' },
        { image: '/assets/img/gallery/gallery/IMG_5744.webp', alt: 'Image 57' },
        { image: '/assets/img/gallery/gallery/IMG_5746.webp', alt: 'Image 58' },
        { image: '/assets/img/gallery/gallery/IMG_5749.webp', alt: 'Image 59' },
        { image: '/assets/img/gallery/gallery/IMG_5865.webp', alt: 'Image 60' },
        { image: '/assets/img/gallery/gallery/IMG_5873.webp', alt: 'Image 61' },
        { image: '/assets/img/gallery/gallery/IMG_6095.webp', alt: 'Image 62' },
        { image: '/assets/img/gallery/gallery/IMG_6096.webp', alt: 'Image 63' },
        { image: '/assets/img/gallery/gallery/IMG_6098.webp', alt: 'Image 64' },
        { image: '/assets/img/gallery/gallery/IMG_6107.webp', alt: 'Image 65' },
        { image: '/assets/img/gallery/gallery/IMG_6131.webp', alt: 'Image 66' },
        { image: '/assets/img/gallery/gallery/IMG_6134.webp', alt: 'Image 67' },
        { image: '/assets/img/gallery/gallery/IMG_6143.webp', alt: 'Image 68' },
        { image: '/assets/img/gallery/gallery/IMG_6144.webp', alt: 'Image 69' },
        { image: '/assets/img/gallery/gallery/IMG_6145.webp', alt: 'Image 70' },
        { image: '/assets/img/gallery/gallery/IMG_6150.webp', alt: 'Image 71' },
        { image: '/assets/img/gallery/gallery/IMG_6169.webp', alt: 'Image 72' },
        { image: '/assets/img/gallery/gallery/IMG_6511.webp', alt: 'Image 73' },
        { image: '/assets/img/gallery/gallery/IMG_6512.webp', alt: 'Image 74' },
        { image: '/assets/img/gallery/gallery/IMG_6518.webp', alt: 'Image 75' },
        { image: '/assets/img/gallery/gallery/IMG_6543.webp', alt: 'Image 76' },
        { image: '/assets/img/gallery/gallery/IMG_6561.webp', alt: 'Image 77' },
        { image: '/assets/img/gallery/gallery/IMG_6611.webp', alt: 'Image 78' },
        { image: '/assets/img/gallery/gallery/IMG_6616.webp', alt: 'Image 79' },
        { image: '/assets/img/gallery/gallery/IMG_6618.webp', alt: 'Image 80' },
        { image: '/assets/img/gallery/gallery/IMG_6623.webp', alt: 'Image 81' },
        { image: '/assets/img/gallery/gallery/IMG_6624.webp', alt: 'Image 82' },
        { image: '/assets/img/gallery/gallery/IMG_6627.webp', alt: 'Image 83' },
        { image: '/assets/img/gallery/gallery/IMG_6631.webp', alt: 'Image 84' },
        { image: '/assets/img/gallery/gallery/IMG_6636.webp', alt: 'Image 85' },
        { image: '/assets/img/gallery/gallery/IMG_6637.webp', alt: 'Image 86' },
        { image: '/assets/img/gallery/gallery/IMG_6638.webp', alt: 'Image 87' },
        { image: '/assets/img/gallery/gallery/IMG_6639.webp', alt: 'Image 88' },
        { image: '/assets/img/gallery/gallery/IMG_9631.webp', alt: 'Image 89' },
        { image: '/assets/img/gallery/gallery/IMG_9636.webp', alt: 'Image 90' },
        { image: '/assets/img/gallery/gallery/IMG_9638.webp', alt: 'Image 91' },
        { image: '/assets/img/gallery/gallery/IMG_9639.webp', alt: 'Image 92' },
        { image: '/assets/img/gallery/gallery/IMG_9640.webp', alt: 'Image 93' },
        { image: '/assets/img/gallery/gallery/IMG_9641.webp', alt: 'Image 94' },
        { image: '/assets/img/gallery/gallery/IMG_9642.webp', alt: 'Image 95' },
        { image: '/assets/img/gallery/gallery/IMG_9644.webp', alt: 'Image 96' },
        { image: '/assets/img/gallery/gallery/IMG_9645.webp', alt: 'Image 97' },
        { image: '/assets/img/gallery/gallery/IMG_9647.webp', alt: 'Image 98' },
        { image: '/assets/img/gallery/gallery/IMG_9648.webp', alt: 'Image 99' },
        { image: '/assets/img/gallery/gallery/IMG_9649.webp', alt: 'Image 100' },
        { image: '/assets/img/gallery/gallery/IMG_9650.webp', alt: 'Image 101' },
        { image: '/assets/img/gallery/gallery/IMG_9651.webp', alt: 'Image 102' },
        { image: '/assets/img/gallery/gallery/IMG_9653.webp', alt: 'Image 103' },
        { image: '/assets/img/gallery/gallery/IMG_9656.webp', alt: 'Image 104' },
        { image: '/assets/img/gallery/gallery/IMG_9657.webp', alt: 'Image 105' },
    ];

    const imagePaths = allImagePaths.slice(0, visibleImages);

    // Function to load more images
    const loadMoreImages = () => {
        setVisibleImages((prev) => Math.min(prev + 16, allImagePaths.length));
    };


    return (
        <>
            <Layout>
                <section id="page-heading">
                    <div className="container">
                        <div className="main-heading">
                            <h2>Gallery</h2>

                        </div>
                    </div>
                </section>

                <section className="service-sec space" id="service-sec" style={{ backgroundImage: `url('assets/img/bg-1.png')` }}>
                    <div className="container-fluid">
                        <div className="title-area text-center">
                            <span className="sub-title">
                                <img src="assets/img/title_left.svg" alt="shape" />
                                Our Gallery
                                <img src="assets/img/title_right.svg" alt="shape" />
                            </span>
                            <h1 className="sec-title mb-5">Lovely Captured Moments</h1>
                        </div>
                        <div className="row gy-4 mb-5" >
                            <ul class="grid">

                                {imagePaths.map((imagePath, index) => (
                                    <li>
                                        <a data-fancybox="gallery" data-src={imagePath.image}>
                                            <img key={index} src={imagePath.image} alt={imagePath.alt} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className='col-md-12 text-center mt-4'>
                                {visibleImages < allImagePaths.length && (
                                    <button onClick={loadMoreImages}>Load More</button>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
