

function GalleryPicture() {
  return (
    <div className="gallery-picture">
        <img className="picture-one" src="/public/img/gallery/image 1.png" 
        alt="picture-one"width={245} height={240}/>
        <div className="column-one-picture">
        <img className="picture-two"src="/public/img/gallery/image 2.png"
        alt="picture-two"width={245} height={160} />
        <img className="picture-three"src="/public/img/gallery/image 3.png"
        alt="picture-three" width={245}height={240} />
        </div>
        <img className="picture-four"src="/public/img/gallery/image 4.png"
        alt="picture-four" width={245}height={560} />
        <div className="column-two-picture">
        <img className="picture-five"src="/public/img/gallery/image 5.png"
        alt="picture-five" width={245} height={240}/>
          <img className="picture-six"src="/public/img/gallery/image 6.png"
        alt="picture-six" width={245} height={160}/>
        </div>
          <img className="picture-seven"src="/public/img/gallery/image 7.png"
        alt="picture-seven" width={245} height={240}/>



    </div>
  )
}

export default GalleryPicture