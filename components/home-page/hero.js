import Image from "next/image"
import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
        src= '/images/site/angie.jpg' 
        alt='dev' 
        width={300} 
        height={300} />
      </div>
      <h1>Hi, I'm Refilwe</h1>
      <p>
        I blog about software development - especially frontend frameworks like React and NextJS
      </p>
    </section>
  )
}

export default Hero;