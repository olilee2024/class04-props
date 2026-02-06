import Citation from "./Citation";

export default function Card({imgUri, alt, source = "Microsoft CoPilot"}) {
  // const imgUri = "/images/black-hole.webp"
  // const alt = "black hole"

  return (
    <div className="card">
      <img src={imgUri} alt={alt} />

      <Citation source={source}/>
    </div>
  )
}
