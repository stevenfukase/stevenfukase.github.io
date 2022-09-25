import type { NextPage } from 'next'
import { CenteredWrapper, LinkText } from '@/parts/atoms'

const Home: NextPage = () => {
  const links = [
    {
      title: "Main site",
      text: "stevenfukase.com",
      href: "https://stevenfukase.com"
    },
    {
      title: "GitHub",
      text: "stevenfukase",
      href: "https://github.com/stevenfukase"
    },
    {
      title: "Instagram",
      text: "stevenfukase",
      href: "https://www.instagram.com/stevenfukase/"
    },
    {
      title: "Random Tokyo Ward Generator",
      text: "23wards.stevenfukase.com",
      href: "https://23wards.stevenfukase.com"
    }
  ]


  return (
    <CenteredWrapper>
      <h1>SF</h1>
      <h2>Links</h2>
      <ul>
        {links.map(({ title, text, href }) => (
          <li key={href}>
            <h3>{title}</h3>
            <LinkText
              text={text}
              href={href}
            />
          </li>
        ))}
      </ul>
    </CenteredWrapper>
  )
}

export default Home
