import React from "react";
import "./Images.css"
const images = [
	{ src: "image1.jpg", alt: "Image 1", details: "Details about image 1" },
	{ src: "image2.jpg", alt: "Image 2", details: "Details about image 2" },
	{ src: "image3.jpg", alt: "Image 3", details: "Details about image 3" },
	{ src: "image4.jpg", alt: "Image 4", details: "Details about image 4" },
	{ src: "image5.jpg", alt: "Image 5", details: "Details about image 5" },
	{ src: "image6.jpg", alt: "Image 6", details: "Details about image 6" },
	{ src: "image7.jpg", alt: "Image 7", details: "Details about image 7" },
	{ src: "image8.jpg", alt: "Image 8", details: "Details about image 8" },
	{ src: "image9.jpg", alt: "Image 9", details: "Details about image 9" },
	{ src: "image10.jpg", alt: "Image 10", details: "Details about image 10" },
];

const ImageCard = ({ src, alt, details }) => (
	<div className="image-card">
		<div className="image-card-inner">
			<div className="image-card-front">
				<img src={src} alt={alt} />
			</div>
			<div className="image-card-back">
				<p>{details}</p>
			</div>
		</div>
	</div>
);

const Images = () => {
	return (
		<div className="image-gallery">
			{images.map((image, index) => (
				<ImageCard
					key={index}
					src={image.src}
					alt={image.alt}
					details={image.details}
				/>
			))}
		</div>
	);
};

export default Images;
