export function MotivationMessage() {
  return (
    <header style={{ padding: '16px 0' }}>
      <p style={{ margin: 0 }}>Crie 👋</p>
      <h1 style={{ margin: '4px 0 0' }}>Sonhe!</h1>
      <p style={{ margin: '8px 0 0', color: '#6b7280' }}>
        Persista! Nunca desista dos seus sonhos!
      </p>
      <hr style={{ marginTop: 16, borderColor: '#e5e7eb' }} />
    </header>
  )
}
interface MotivationMessageProps {
 message: string;
 author: string;
}
export function ExerciseList(props: WorkoutCardProps) {
  return (
    <div className="card">
      <h2 style={{ margin: '0 0 8px' }}>{props.message}</h2>
      <p>Autor: {props.author} Pablo Picasso</p>
      <p>Message: {props.message}Crie! Sonhe! Persista!</p>
    </div>
  )
}
