import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GameScreen } from './components/GameScreen'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GameScreen />
    </QueryClientProvider>
  )
}

export default App
