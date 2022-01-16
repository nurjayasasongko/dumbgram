import React from 'react'
import Masonry from 'react-masonry-css'
import './react-masonry.css'
import images from '../assets/img/Gallery'

function MasonryFeed() {
  const importer = images
  const Columns = {
    default: 3,
    1000: 2,
    700: 1,
  }

  return (
    <div class="overflow-hidden">
      <Masonry
        breakpointCols={Columns}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {importer.map((image, id) => (
          <div key={id}>
            <img src={image.imgSrc} alt='images' />
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default MasonryFeed