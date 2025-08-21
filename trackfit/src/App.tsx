import { Welcome } from './components/Welcome'
import { ExerciseList } from './components/ExerciseList'
import { MotivationMessage } from './components/MotivationMessage'

export default function App() {
  return (
    <div className="container">
      <Welcome />
      <div className="grid" style={{ marginTop: 16 }}>
        <ExerciseList
          id="1"
          date="15/08/2025"
          durationMinutes={60}
          intensity={5}
          title="Zumba"
        />
        <ExerciseList
          id="2"
          date="16/08/2025"
          durationMinutes={45}
          intensity={3}
          title="Corrida Leve"
        />
        <ExerciseList
          id="3"
          date="16/08/2025"
          durationMinutes={45}
          intensity={5}
          title="Spinning"
        />
      </div>
      <div>
        <MotivationMessage />
      </div>
    </div>
  )
}
