function Banner({ title, cover }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${cover}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '1240px',
      }}
    >
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
