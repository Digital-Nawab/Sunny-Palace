import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [visibleImages, setVisibleImages] = useState(16);

    const allImagePaths = [
        { image: '/assets/img/gallery/home-gallery/gallery1.webp', alt: 'Image 1' },
        { image: '/assets/img/gallery/home-gallery/gallery2.webp', alt: 'Image 2' },
        { image: '/assets/img/gallery/home-gallery/gallery3.webp', alt: 'Image 3' },
        { image: '/assets/img/gallery/home-gallery/gallery4.webp', alt: 'Image 4' },
        { image: '/assets/img/gallery/home-gallery/gallery5.webp', alt: 'Image 5' },
        { image: '/assets/img/gallery/home-gallery/gallery7.webp', alt: 'Image 7' },
        { image: '/assets/img/gallery/home-gallery/gallery8.webp', alt: 'Image 8' },
        { image: '/assets/img/gallery/home-gallery/gallery9.webp', alt: 'Image 9' },
        { image: '/assets/img/gallery/home-gallery/gallery10.webp', alt: 'Image 10' },
        { image: '/assets/img/gallery/home-gallery/gallery11.webp', alt: 'Image 11' },
        { image: '/assets/img/gallery/home-gallery/gallery12.webp', alt: 'Image 12' },
    ];

    const imagePaths = allImagePaths.slice(0, visibleImages);

    // Function to load more images
    const loadMoreImages = () => {
        setVisibleImages((prev) => Math.min(prev + 16, allImagePaths.length));
    };

    return (
        <>
            <section className="service-sec space mt-5 mb-4" id="service-sec" style={{ backgroundImage: `url('assets/img/bg-1.png')` }}>
                <div className="container-fluid">
                    <div className="title-area text-center">
                        <span className="sub-title">
                            <img src="assets/img/title_left.svg" alt="shape" />
                            Our Gallery
                            <img src="assets/img/title_right.svg" alt="shape" />
                        </span>
                        <h2 className="sec-title mb-5">Lovely Captured Moments</h2>
                    </div>
                    <div className="row gy-4" >
                        <ul class="grid">
                            {imagePaths.map((imagePath, index) => (
                                <li>
                                    <a data-fancybox="gallery" data-src={imagePath.image}>
                                        <img key={index} src={imagePath.image} alt={imagePath.alt} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className='col-md-12 text-center'>
                            <Link to="/gallery" className="text-center theme-btn mt-3" id="scroll">
                                View More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
