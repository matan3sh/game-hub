import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

interface Game {
  id: number
  name: string
}

interface FetchGamesResponse {
  count: number
  results: Game[]
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    const controller = new AbortController()

    const fetchGames = async () => {
      try {
        const { data } = await apiClient.get<FetchGamesResponse>("/games", {
          signal: controller.signal,
        })
        setGames(data.results)
      } catch (err: any) {
        if (err instanceof CanceledError) return
        setError(err.message)
      }
    }

    fetchGames()

    return () => controller.abort()
  }, [])

  return { games, error }
}

export default useGames
