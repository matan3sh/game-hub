import platforms from "../data/platforms"
interface Platform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () => ({ data: platforms, loading: false, error: null })
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents")

export default usePlatforms
