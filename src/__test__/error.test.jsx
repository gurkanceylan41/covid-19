import { getByRole, render, screen } from "@testing-library/react";
import Error from "../components/error";
import userEvent from "@testing-library/user-event";

it("Gönderilen hata mesajı ekrana basılıyor mu ?", () => {
  // Test edilecek bileşeni renderla
  render(<Error message={"404 not found"} />);

  // test edilecek elemanları çağır
  const text = screen.getByText(/404/);

  // message ekranda var mı ?
  expect(text).toHaveTextContent(/404/);
});

it("tekrar dene butonu işlevini yapıyor mu =", async () => {
  const user = userEvent.setup();

  //Test edilebilir fonksiyon oluştur
  const retryMock = jest.fn();

  // Render edilcek bileşeni al
  render(<Error message={"404 not found"} retry={retryMock} />);

  // test edilecek elamanı çağır
  const button = screen.getByRole("button");

  // butona tıkla
  await user.click(button);

  // fonksiyon çalıştı mı?
  expect(retryMock).toHaveBeenCalled();
});
