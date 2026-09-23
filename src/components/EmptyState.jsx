function EmptyState({ emoji, title, message, action }) {
  return (
    <div className="empty-state">
      <span className="empty-emoji">{emoji}</span>
      <h3 className="empty-title">{title}</h3>
      <p className="empty-message">{message}</p>
      {action}
    </div>
  )
}

export default EmptyState