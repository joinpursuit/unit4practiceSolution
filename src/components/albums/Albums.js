import React from 'react';
import { Link } from 'react-router-dom'
import '../../css/Albums.css'

export const Albums = ({albums}) => {
  let displayAlbums = albums.map(album => {
    return(
      <li  key={album.id}>
        <Link to={"/albums/" + album.id} >{album.title}</Link>
      </li>
    )
  })
  return(
    <div className="albums">
    <h1>Albums PAGE</h1>
      <ul>
        {displayAlbums}
      </ul>
    </div>
  )
}
