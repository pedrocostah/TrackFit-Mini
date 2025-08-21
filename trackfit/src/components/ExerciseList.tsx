interface WorkoutCardProps {
  id: string
  title: string
  durationMinutes: number
  date: string
  intensity: 1 | 2 | 3 | 4 | 5
}

export function ExerciseList(props: WorkoutCardProps) {
  return (
    <div className="card">
      <h2 style={{ margin: '0 0 7px' }}>{props.title}</h2>
      <p>Duração: {props.durationMinutes} min</p>
      <p>Intensidade: {props.intensity}/5</p>
      <p>Data: {props.date}</p>
    </div>
  )
}
