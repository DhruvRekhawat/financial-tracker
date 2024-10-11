
const MobileNav = () => {
  return (
    <nav className="w-full h-16 rounded-t-2xl bg-primary text-white fixed bottom-0 z-30 sm:hidden">
        <ul className="flex gap-4 justify-center items-center w-full h-full">
            <li>Home</li>
            <li>Savings</li>
            <li>Expenses</li>
        </ul>
    </nav>
  )
}

export default MobileNav