import { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
    //
}>

export default function SideContent({ children }: Props) {
    return <div className="relative ">
        <div className="w-40 absolute left-[calc(100%+3rem)]">
            {children}
        </div>
    </div>
}