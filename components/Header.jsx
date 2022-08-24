import Image from "next/image"
import { BadgeCheckIcon,CollectionIcon,HomeIcon,LightningBoltIcon,SearchIcon,UserIcon } from '@heroicons/react/outline'
import HeaderItem from "./HeaderItem"

function Header() {
  return (
    <header className="flex flex-col sm:flex-row ml-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem title='HOME' Icon={HomeIcon}/>
        <HeaderItem title='HOME' Icon={LightningBoltIcon}/>
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
        <HeaderItem title='SEARCH' Icon={SearchIcon}/>
        <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
      </div>
      <Image src="https://links.papareact.com/ua6"
      className="object-contain"
      width={200}
      height={100}/>
    </header>
  ) 
}

export default Header

