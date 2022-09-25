import type { NextPage } from 'next'
import { CenteredWrapper, LinkText } from '@/parts/atoms'

const Home: NextPage = () => (

  <CenteredWrapper>
    <h1>SF</h1>
    <h2>Links</h2>
    <ul>
      <li>
        <h3>Main site</h3>
        <LinkText
          text="stevenfukase.com"
          href="http://stevenfukase.com"
        />
      </li>
      <li>
        <h3>GitHub</h3>
        <LinkText
          text="stevenfukase"
          href="https://github.com/stevenfukase"
        />
      </li>
      <li>
        <h3>Instagram</h3>
        <LinkText
          text="stevenfukase"
          href="https://www.instagram.com/stevenfukase/"
        />
      </li>
      <li>
        <h3>Random Tokyo Ward Generator</h3>
        <LinkText
          text="ward23.stevenfukase.com"
          href="https://23wards.stevenfukase.com"
        />
      </li>
    </ul>
  </CenteredWrapper>
);

export default Home
