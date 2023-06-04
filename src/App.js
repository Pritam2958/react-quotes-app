import all from "everyday-fun";

const Getquote = () => {
  let quote = all.getRandomQuote();
  return (
    <>
      <p className="text-sm text-orange-500 font-cursive">{quote.quote}</p>
      <br />
      <h6 className="text-sm font-extralight text-right font-serif text-pink-300 underline capitalize">
        -{quote.author}
      </h6>
      <br />
    </>
  );
};

function App() {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-900 to-wetAsphalt text-slate-100 text-center">
      <header className="bg-gradient-to-br from-orange-800 to-amber-500">
        <br />
        <h3 className="text-stone-100">Inspirational Quotes</h3>
        <br />
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          width="1.5em"
        >
          <path
            fill="currentColor"
            d="M34.85 34q-1.25 0-1.875-1.025T32.9 30.85L35.3 26H29q-1.25 0-2.125-.875T26 23v-8q0-1.25.875-2.125T29 12h8q1.25 0 2.125.875T40 15v10.7q0 .35-.075.7t-.225.65l-2.9 5.75q-.25.55-.775.875Q35.5 34 34.85 34Zm-18 0q-1.25 0-1.875-1.025T14.9 30.85L17.3 26H11q-1.25 0-2.125-.875T8 23v-8q0-1.25.875-2.125T11 12h8q1.25 0 2.125.875T22 15v10.7q0 .35-.075.7t-.225.65l-2.9 5.75q-.25.55-.775.875Q17.5 34 16.85 34Z"
          />
        </svg>
        <br />
        <h6 className="p-3 text-right text-vsm text-wetAsphalt underline font-black font-cursive">
          After you have read everything, <br />
          you may reload the page for more quotes
        </h6>
        <br />
      </header>
      <div className="prose prose-headers:text-right">
        <br />
        <Getquote />
        <br />
        <Getquote />
        <br />
        <Getquote />
        <br />
        <Getquote />
        <br />
        <Getquote />
        <br />
        <Getquote />
        <br />
        <Getquote />
        <br />
        <Getquote />
        <br />
        <Getquote />
        <br />
        <Getquote />
        <br />
        <Getquote />
        <br />
        <Getquote />
        <br />
        <Getquote />
        <br />
      </div>
    </div>
  );
}

export default App;
