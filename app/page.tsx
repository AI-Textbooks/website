import Hero from './components/hero'
import SectionTitle from './components/sectionTitle'

import { benefitOne, benefitTwo } from './components/data'
import Footer from './components/footer'
import Values from './components/values'
import Cta from './components/cta'
import Timeline from './components/timeline'

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
      <Cta />
      <Timeline imgPos="right" data={benefitOne} />
      <Footer />
    </>
  )
}
