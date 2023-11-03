import { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
    //
}>

export default function SideContent({ children }: Props) {
    return <div className="relative">
        <div className="mb-8 lg:mb-0 mt-3 w-30 xl:w-48 lg:absolute right-[calc(100%+3rem)] text-base lg:text-sm py-4 border-y lg:border-b-0 border-gray-900 lg:text-right opacity-60">
            {children}
        </div>
    </div>
}