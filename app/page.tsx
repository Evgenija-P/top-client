import { Button, Htag } from "@/components";

export default function Home(): JSX.Element {
  return (
    <main>
      <Htag tag="h3">Test text</Htag>
      <Button type="button" status="ghost">
        Test button
      </Button>
      <Button type="button" status="primary">
        Test primary
      </Button>
    </main>
  );
}
