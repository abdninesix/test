
const Navbar = () => {
    return (
        <nav className='w-full sticky top-0 bg-pink-500/95 flex items-center justify-between rounded-md py-2 z-20'>
            <a href="/" className='flex items-center tracking-wide text-lg font-semibold text-yellow-500'>
                <img src="/logo.png" alt='logo' className='size-6 md:size-9' />
                <p>SPARKS</p>
            </a>

            <div className='flex items-center gap-4 text-gray-500'>
                <a href="/" className='flex items-center gap-2'>Home</a>
                <button>Bell</button>
                <a href="/login">Login</a>
            </div>
        </nav>
    )
}

export default Navbar