import './style.css'
import albumPicture from './assets/maxresdefault.jpg'

function App() {
  const songs = [
    {
      title: 'Ikot',
      artist: 'Over October',
    },
    {
      title: 'Sining',
      artist: 'Dionela ft. Jay R',
    },
    {
      title: 'Palagi',
      artist: 'TJ Monterde',
    },
    {
      title: 'Bulong',
      artist: 'December Avenue',
    },
    {
      title: 'Pano',
      artist: 'Zack Tabudlo',
    },
    {
      title: 'Pasilyo',
      artist: 'SunKissed Lola',
    },
    {
      title: 'Mahika',
      artist: 'Adie & Janine Teñoso',
    },
  ]

  const currentSong = songs[0]

  return (
    <div className="phone">

      <div className="header">
        <span className="header-back">◀</span>
        <span className="header-title">ALBUM TRACKS</span>
        <span className="menu">☰</span>
      </div>

      <div className="album-info">
        <h2>{currentSong.title}</h2>
        <p>{currentSong.artist}</p>

        <img
          src={albumPicture}
          alt={currentSong.title}
          className="album-picture"
        />
      </div>

      <div className="track-list">
        {songs.map((song, index) => (
          <div className="track" key={index}>

            <div className="track-info">
              <b>{song.title}</b>
              <small>{song.artist}</small>
            </div>

            <div className="icons">
              <span>☆</span>
              <span>⊘</span>
              <span>≡</span>
            </div>

          </div>
        ))}
      </div>

      <div className="music-bar">
        <div className="line">
          <div className="progress"></div>
          <div className="circle"></div>
        </div>
      </div>

      <div className="bottom">
        <span className="back"></span>
        <span className="home"></span>
        <span className="recent"></span>
      </div>

    </div>
  )
}

export default App