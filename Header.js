export default function Header() {
  return (
    <header className="bg-woofBlack text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">WOOF Coin</h1>
        <nav>
          <a href="#vision" className="mr-4">Vision</a>
          <a href="#tokenomics" className="mr-4">Tokenomics</a>
          <a href="#roadmap" className="mr-4">Roadmap</a>
          <a href="#cta">Join Us</a>
        </nav>
      </div>
    </header>
  );
}
