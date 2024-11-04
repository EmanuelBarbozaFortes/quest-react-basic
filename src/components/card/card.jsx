

export function Card({ style ,title, paragraph  }) {
  return (
    <>
      <h1 style={style}>{title}</h1>
      <p style={style}>{paragraph}</p>
    </>
  )
}
