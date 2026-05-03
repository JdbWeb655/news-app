const SkeletonCard = () => {
  return (
    <div className="animate-pulse border-b border-gray-200 pb-8 space-y-4">
      <div className="bg-gray-200 h-64 w-full"></div>

      <div className="space-y-3">
        <div className="bg-gray-200 h-3 w-20"></div>
        <div className="bg-gray-200 h-6 w-full"></div>
        <div className="bg-gray-200 h-4 w-5/6"></div>
        <div className="bg-gray-200 h-4 w-4/6"></div>
      </div>
    </div>
  )
}
export default SkeletonCard