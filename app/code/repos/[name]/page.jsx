import { Suspense } from "react"
import RepoDirs from "@/app/components/RepoDirs"
import Repo from "@/app/components/Repo"
import Link from "next/link"

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
        <Link href='/code/repos' className="btn btn-back">Back To Repositories</Link>
        <Suspense fallback={<div>Loading repo...</div>}>
          <Repo name={name} />
        </Suspense>
        <Suspense fallback={<div>Loading directories...</div>}>
          <RepoDirs name={name} />
        </Suspense>
    </div>
  )
}

export default RepoPage