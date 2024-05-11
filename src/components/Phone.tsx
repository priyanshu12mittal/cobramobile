import { cn } from "@/lib/utils"
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    imgSrc:string;
    dark?:boolean
}
const Phone = ({imgSrc,className,dark=false,...props}:Props) => {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden",className)}>
      <img src={dark?"/phone-template-dark-edges.png":"/phone-template-white-edges.png"} alt="phone image"className=" pointer-events-none z-50 select-none"/>
      <div className=" absolute -z-10 inset-0">
        <img src={imgSrc} alt="overlay phone image" className=" object-cover" />
      </div>
    </div>
  )
}

export default Phone
