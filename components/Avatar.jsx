import Image from "next/image";
import Vercel from "../public/vercel.svg"

const Avatar = ({ imageURL }) => {
  return (
    <div className=" w-[120px] h-[120px] ml-8 ring-[5px] ring-[#3b52d4] dark:ring-[#053bff] rounded-full ">
    {imageURL ? (
        <Image
          src={imageURL ? imageURL : Vercel}
          width="120"
          height="120"
          objectFit="cover"
          className="rounded-full" />
      ) : (
        <p className="pt-8 font-mono text-lg font-bold text-center text-gray-800 dark:text-gray-200">No Image Found</p>
      )
    }
    </div>
  )
}

export default Avatar