import PagesManifestPlugin from "next/dist/build/webpack/plugins/pages-manifest-plugin"
import { Suspense } from "react"
import ThankYou from "./ThankYou"

const Page = ()=>{

    return <Suspense>
        <ThankYou />
    </Suspense>

}

export default Page