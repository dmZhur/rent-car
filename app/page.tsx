import { BaseLayout, Main } from "@components";

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Main />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Cars you might like</p>
        </div>

        <BaseLayout />
      </div>
    </main>
  );
}
