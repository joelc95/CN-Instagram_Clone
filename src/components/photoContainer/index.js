import './index.css'

export const PhotoContainer = ({ photo }) => {
    return (
        <div className="photo-container">
            <div className="photo-header">
                <a className="photo-author">{photo.author}</a>
            </div>
            <img className="photo" src={photo.download_url} alt={`Photo by: ${photo.author}`} />
            <div className="caption-container">
                <a className="caption-author">{photo.author}</a>
                <p className="caption-text">lorem ipsum lorem ipsum lorem ipsum</p>
            </div>
        </div>
    )
}
