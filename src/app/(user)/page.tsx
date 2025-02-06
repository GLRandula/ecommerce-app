import Banner from "@/components/Banner";
import Container from "@/components/Container";
import Facilities from "@/components/Facilities";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <Container className="py-0">
      <Banner />
        <Facilities />
        <ProductList />
    </Container>
  );
}
