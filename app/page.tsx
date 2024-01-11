import Hero from './components/Hero'
import SectionTitle from './components/sectionTitle'
import Benefits from './components/Benefits'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTitle pretitle='Our vision' title="It's all about collaboration">
        Imaging a custom GPT that has the knowledge of your company and allows your team to get all the benefits of artificial intelligence
      </SectionTitle>
      <Benefits />
      <SectionTitle pretitle="Let's build" title="Let's build your custom GPT">
        Get in touch with us and we will schedule a meeting with you.
        <br></br>
        <Link id='contact' href="mailto:hello@ai-textbooks.com" className='text-teal-300'>hello@ai-textbooks.com</Link>
      </SectionTitle>
    </>
  )
}
