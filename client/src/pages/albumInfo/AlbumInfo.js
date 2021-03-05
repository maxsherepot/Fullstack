import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Loader from '../../components/loader/Loader';
import { getAlbumRequest } from "../../store/albums/actions";
import AlbumDetails from '../../components/albums/AlbumDetails';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';



const AlbumInfo = props => {
  const { getAlbum, albumId, album, loading, error } = props;

  useEffect(() => {
    getAlbum(albumId)
  }, [albumId]);


  return (
    <div className="container">

      {loading || !album ?
        <Loader />
        :
        error ?
          <ErrorMessage />
          :
          <AlbumDetails
            album={album}
            isFavorite={false}
          />
      }

    </div>
  );
};


const mapStateToProps = state => ({
  albumId: state.albums.albumId,
  album: state.albums.album,
});


const mapDispatchToProps = dispatch => ({
  getAlbum: albumId => dispatch(getAlbumRequest(albumId))
})



export default connect(mapStateToProps, mapDispatchToProps)(AlbumInfo);
