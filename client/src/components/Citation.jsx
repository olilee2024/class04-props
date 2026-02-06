export default function Citation({source}) {
  // const source = "ChatGPT"

  return (
    <p className="citation" style={{ textAlign: 'center'}}>
      Source: <cite>{source}</cite>
    </p>
  )
}
