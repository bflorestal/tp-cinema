import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="container flex flex-col items-center justify-center py-8">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-center">Hello world!</h1>
          <p className="text-center md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ea
            voluptates recusandae autem aliquid earum distinctio, nisi
            temporibus iusto. Nihil quia delectus, neque voluptatum facere
            aperiam velit voluptatem cumque quod suscipit rem modi totam
            corrupti a eaque perspiciatis praesentium magnam, tenetur est saepe
            iusto tempore libero! Molestiae minima nemo quod!
          </p>
        </div>
      </section>
    </Layout>
  );
}
