import Image from 'next/image';
import Headerimg from './../images/header-img.png'
import SingleCycle from './../images/image-demo4_optimized.png'
import { FaAlignRight, FaBicycle, FaBiking, FaGoodreads, GrStatusGood, FaMoneyCheckAlt, FaQuoteRight, FaAngleRight, FaCaretRight, FaHandPointRight, FaGoodreadsG, FaCheck, FaCheckCircle, FaRegHandPointRight, FaThumbsUp, FaGoogleDrive, FaCompressAlt, FaCubes } from 'react-icons/fa';
import { Noto_Sans_Indic_Siyaq_Numbers } from 'next/font/google';
import Header from '@/Components/Home/Header/Header';
import Friendly from '@/Components/Home/Friendly/Friendly';
import Follow3Steps from '@/Components/Home/Follow3Steps/Follow3Steps';
import BuyaCycle from '@/Components/Home/BuyaCycle/BuyaCycle';
import ChooseUs from '@/Components/Home/ChooseUs/ChooseUs';
import OurBikes from '@/Components/Home/OurBikes/OurBikes';
import IncludedWrental from '@/Components/Home/IncludedWrental/IncludedWrental';

export default function Home() {
  return (
    <main className="mx-auto px-4 max-w-7xl">
        {/* header section --------------------------------- */}
      <Header />

        {/* Follow these 3 steps --------------------------------- */}
      <Follow3Steps />

      <OurBikes />

      {/* Included with every bike rental */}
      <IncludedWrental />

        {/* Friendly, fast process and good response--------------------------------- */}
      <Friendly />

        {/* Want to buy a bicycle but can't yet? just rent it======================================   */}
      <BuyaCycle />

        {/* Why choose us======================================   */}
      <ChooseUs />
    </main>
  )
}
