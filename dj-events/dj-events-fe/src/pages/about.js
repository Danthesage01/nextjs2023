
import Link from 'next/link'


function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the best DJ platform in the world</p>
      <p>version: 1.0.0</p>
      <Link  href="/">Home</Link>
    </div>
  );
}

export default AboutPage