import Hero from './components/Hero'
import SectionTitle from './components/sectionTitle'
import Values from './components/values'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTitle pretitle='Our vision' title="It's all about collaboration">
        Imagine a world where we can all benefit from the knowledge of each
        other. A world where AI adapts any kind of content according to
        individual cognitive and learning preferences, ensuring accessible and
        optimized learning experiences. A world where we can all collaborate for
        a better future.
      </SectionTitle>
      <Values />
    </>
  )
}
