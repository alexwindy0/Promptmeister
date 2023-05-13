import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore & Exchange
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
      Promptmeister is a free, open-source AI prompting solution for contemporary society, 
      designed to facilitate the Exploration, Creation, 
      and Exchange of Innovative prompts.
      </p>

      <Feed />
    </section>
  )
}

export default Home;