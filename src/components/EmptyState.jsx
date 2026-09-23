function EmptyState({ emoji, title, message }) {
  return (
    <div className="empty-state">
      <span className="empty-emoji">{emoji}</span>
      <h3 className="empty-title">{title}</h3>
      <p className="empty-message">{message}</p>
    </div>
  )
}

export default EmptyState