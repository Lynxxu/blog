export default function Background(){
    return(
    <div id="body-wrapper" className="fixed flex w-full h-screen bg-slate-50 dark:bg-black  transition-colors duration-300">
        <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white  ring-1 dark:bg-zinc-900 ring-zinc-100 dark:ring-zinc-900 transition-all duration-300"></div>
            </div>
        </div>
    </div>
    )
}