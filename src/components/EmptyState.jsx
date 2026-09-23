function EmptyState({ emoji, title, message, action }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white px-6 py-16 text-center">
      <span className="mb-3 block text-5xl">{emoji}</span>
      <h3 className="mb-1 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mb-6 text-gray-500">{message}</p>
      {action}
    </div>
  )
}

export default EmptyState