export default function CarForm() {

  async function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    console.log(formData);

    const res = await fetch("/api/cars", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    console.log(result);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="make" placeholder="Make" />
      <input type="text" name="model" placeholder="Model" />
      <input type="text" name="image" placeholder="Image" />
      <textarea type="text" name="description" placeholder="Description" />

      <button type="submit">Submit</button>
    </form>
  )
}