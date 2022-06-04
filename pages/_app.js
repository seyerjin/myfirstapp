import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
        <link href="https://vjs.zencdn.net/7.19.2/video-js.css" rel="stylesheet" />

      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/new">
            <a>Add Pet</a>
          </Link>
        </div>

        <img
          id="title"
          src="./Balu.jpeg"
          alt="pet care logo"
          width={120}
          height={200}
        ></img>
      </div>
      <div className="grid wrapper">
      <body>
  <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    poster="./Haus.JPEG"
    data-setup="{}">
    <source src="./Rambo.mp4"type="video/mp4"/>

    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
    </p>
  </video>

  <script src="https://vjs.zencdn.net/7.19.2/video.min.js"></script>
</body>
        <Component {...pageProps} />
      </div>

    </>
  )
}

export default MyApp
