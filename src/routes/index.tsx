import { Title } from "@solidjs/meta";
import { createAsync } from "@solidjs/router";
import Counter from "~/components/Counter";
import { testData } from "~/lib/server";

export default function Home() {
  const test = createAsync(() => testData());
  return (
    <main>
      {JSON.stringify(test())}
    </main>
  );
}
