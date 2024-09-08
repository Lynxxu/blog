export default function Background(){
    return(
    <div id="body-wrapper" className="fixed flex w-full  h-screen bg-slate-50">
        <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-zinc-100"></div>
            </div>
        </div>
    </div>
)
}