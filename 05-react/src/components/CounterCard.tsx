import { useState } from 'react'

type CounterCardProps = {
  label: string
}

export function CounterCard({ label }: CounterCardProps) {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h2>{label}</h2>
      <p>{count}</p>
      <button onClick={() => setCount((current) => current + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((current) => current - 1)}>
        Decrease
      </button>

      {/* TODO: Add a Reset button and disable Decrease when count is 0 */}
    </section>
  )
}
