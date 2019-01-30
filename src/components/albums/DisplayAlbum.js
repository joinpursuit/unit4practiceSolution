import React from 'react';
import '../../css/Albums.css'


export const DisplayAlbum = (props) => {
  if(!props.albums.length || !props.photos.length) return null
  let {albums, photos} = props;
  let album = albums.find(album => album.id === Number(props.match.params.id) );
  let displayPhotos = photos.map(photo => {
    if(photo.albumId === album.id) {
      return <li key={photo.id}><img src={photo.thumbnailUrl} alt="" /></li>
    } else {
        return null
    }
  })
  return(
    <div className="albums">
        TITLE: {album.title}
        <ul>
          {displayPhotos}
        </ul>
    </div>
  )
}
