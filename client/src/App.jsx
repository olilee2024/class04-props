import Card from './components/Card'

export default function App() {
  return (
    <main>
      <div className="gallery">
        {/* props */}
        {/* this prop will have the default source (see card.jsx) */}
        <Card imgUri="/images/black-hole.webp" alt="black hole" />
        <Card imgUri="/images/black-hole.webp" alt="black hole" source="Chat" />
        <Card imgUri="/images/black-hole.webp" alt="black hole" source="Chat" />
        {/* <Citation source="ChatGPT" /> */}

      </div>

      <h2>Debug Info</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}
