import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const PortfolioImageGallery = ({ cards, cardIndex }) => {
    const images = cards.map((card) => ({
        original: card.attributes.image.data[0].attributes.url,
    }));
    return <ImageGallery items={images} showBullets showPlayButton={false} startIndex={cardIndex} />;
};

export default PortfolioImageGallery;
