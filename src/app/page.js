import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.superheader}>
          <Image
            src="/images/logo-light.svg"
            alt="Website Logo"
            width={96}
            height={24}
          />
          <Link href="/" className={styles.link}>
            Apply for access
          </Link>
        </div>
        <p>
          Data <span>tailored</span> to your needs.
        </p>
        <button>Learn more</button>
      </header>

      <main className={styles.main}>
        <article>
          <div>1</div>
          <h2>Actionable insights</h2>
          <p>
            Optimize your products, improve customer satisfaction and
            stay ahead of the competition with our product data
            analytics.
          </p>
        </article>
        <article>
          <div>2</div>
          <h2>Data-driven decisions</h2>
          <p>
            Make data-driven decisions with our product data
            analytics. Our AI-generated reports help you unlock
            insights hidden in your product data.
          </p>
        </article>
        <article>
          <div>3</div>
          <h2>Always affordable</h2>
          <p>
            Always affordable pricing that scales with your business.
            Get top-quality product data analytics services without
            hidden costs or unexpected fees.
          </p>
        </article>
      </main>
      <section className={styles.profile}>
        <Image alt="The founder image" />
        <article>
          <h2>Be the first to test</h2>
          <p>
            {`Hi, I'm Louis Graham, the founder of the company. Book a
            demo call with me to become a beta tester for our app and
            kickstart your company. Apply for access below and I’ll be
            in touch to schedule a call.`}
          </p>
          <button>Apply for access</button>
        </article>
      </section>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
