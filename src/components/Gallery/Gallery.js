import picture1 from "../../asstes/gallery.png";

const Gallery = ({gallery}) => {
    return(
        <section className="gallery">
        {gallery.map((picture) => (
        <div className="picture_div" key={picture.id}>
            <h2>GALLERY</h2>
            <div className='program-image'>
                <img src={picture1} alt="photo"/>
            </div>
        </div>

        ))}
        
        </section>
        
    )
}
export default Gallery;