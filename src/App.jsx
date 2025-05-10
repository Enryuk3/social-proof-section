import { Background } from "./components/background"
import { Hero } from "./components/hero"
import { RaitingContainer } from "./components/rating-container"
import { ReviewContainer } from "./components/review-container"

function App() {
  return (
    <main className="lg:min-h-screen font-league-spartan px-6 xl:px-[165px] py-20 relative">
      <Background />
      <div className="xl:flex mb-12">
        <Hero />
        <RaitingContainer />
      </div>
      <ReviewContainer />
    </main>
  )
}

export default App
