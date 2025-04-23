import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
 
    return (
        <main className='flex flex-col gap-4 min-h-screen p-5'>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 w-12/12 md:w-12/12">
                <Skeleton className="w-30 h-30 md:hidden mx-auto rounded-full" />
                <Skeleton className="w-full gap-4 md:min-w-[300px] md:w-full h-[200px] md:h-[300px] my-auto"/>
                <Skeleton className="hidden md:block w-60 h-60 mx-auto rounded-full" />
                <Skeleton className="hidden md:block w-full h-[500px] mx-auto" />
            </div>
            
        </main>
    )
}