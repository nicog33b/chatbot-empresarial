import CategorySection from "./components/categorySection";
import { foodSections } from "./components/categorySection";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
    {foodSections.map((section) => (
      <CategorySection 
        key={section.id}
        id={section.id}
        title={section.title}
        products={section.products}
      />
    ))}
  </main>
  );
}
