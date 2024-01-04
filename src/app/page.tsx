import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/app/components/main/Hero';
import Header from '@/app/components/main/Header';
import Cursor from '@/app/components/main/Cursor';
import About from '@/app/components/main/About';

export default function Home() {  
  
  return (
    <main>
      <Cursor />
      <Header />
      <Hero />
      <About />
    </main>
  )
}
