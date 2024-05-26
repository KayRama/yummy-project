import Link from "next/link";

import logoImg from '@/app/assets/logo.png'

export default function MainHeader() {
  return(
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="yummy.png" />
          Yummy
      </Link>
      
      <nav>
        <ul>
          <li>
            <Link href="/meals">Look Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}