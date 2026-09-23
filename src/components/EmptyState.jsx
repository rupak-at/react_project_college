function EmptyState({ emoji, title, message, action }) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-black/5 bg-white px-6 py-20 text-center">
      <span className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-4xl">
        {emoji}
      </span>
      <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">{title}</h3>
      <p className="mt-1.5 max-w-sm text-[15px] tracking-tight text-neutral-500">{message}</p>
      <div className="mt-7">{action}</div>
    </div>
  )
}

export default EmptyState