import { useState } from "react";

export default function SearchForm() {
  const [hits, setHits] = useState([]);

  async function search(event) {
    const q = event.target.value;

    if (q.length > 2) {
      const params = new URLSearchParams({ q });

      const res = await fetch(`/api/search?` + params);

      const result = await res.json();
      console.log(result);
      setHits(result['cars']);
    }
  }

  return (
    <div>
      <input onChange={search} />

      <ul>
        {hits.map((hit) => (
          <li key={hit.id}>
            {hit.make} {hit.model}
          </li>
        ))}
      </ul>
    </div>
  )

}