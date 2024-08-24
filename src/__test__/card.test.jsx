import { render, screen } from "@testing-library/react";
import InfoCard from "../pages/detail/infoCard";

it("carda gönderilen proplar dogru sekilde ekrana basılır", () => {
  const item = ["last_update", "2023-03-10 04:21:03"];

  render(<InfoCard item={item} />);

  screen.getByText(item[0].replace("_", " "));

  screen.getByText(item[1]);
});
